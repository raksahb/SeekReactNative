// @flow

import React, {
  useReducer,
  useEffect,
  useRef,
  useCallback
} from "react";
import { ScrollView, Platform } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import inatjs from "inaturalistjs";
import Realm from "realm";
import { useSafeArea } from "react-native-safe-area-context";

import i18n from "../../i18n";
import realmConfig from "../../models/index";
import styles from "../../styles/species/species";
import Spacer from "../UIComponents/TopSpacer";
import { getSpeciesId, checkForInternet } from "../../utility/helpers";
import SpeciesContainer from "./SpeciesContainer";
import createUserAgent from "../../utility/userAgent";
import SpeciesHeader from "./SpeciesHeader";

const SpeciesDetail = () => {
  const insets = useSafeArea();
  const scrollView = useRef( null );
  const navigation = useNavigation();
  const { params } = useRoute();

  // eslint-disable-next-line no-shadow
  const [state, dispatch] = useReducer( ( state, action ) => {
    switch ( action.type ) {
      case "ERROR":
        return { ...state, error: "internet" };
      case "NO_ERROR":
        return { ...state, error: null };
      case "SET_ID":
        return { ...state, id: action.id };
      case "SET_TAXON_DETAILS":
        return {
          ...state,
          taxon: action.taxon,
          photos: action.photos,
          details: action.details
        };
      case "TAXA_SEEN":
        return {
          ...state,
          seenTaxa: action.seen,
          taxon: { // is this correct?
            scientificName: action.seen.taxon.name,
            iconicTaxonId: action.seen.taxon.iconicTaxonId
          }
        };
      case "TAXA_NOT_SEEN":
        return { ...state, seenTaxa: null };
      case "RESET_SCREEN":
        return {
          id: null,
          photos: [],
          taxon: {
            scientificName: null,
            iconicTaxonId: null
          },
          details: {},
          error: null,
          seenTaxa: null
        };
      default:
        throw new Error();
    }
  }, {
    id: null,
    photos: [],
    taxon: {
      scientificName: null,
      iconicTaxonId: null
    },
    details: {},
    error: null,
    seenTaxa: null
  } );

  const {
    taxon,
    id,
    photos,
    details,
    error,
    seenTaxa
  } = state;

  const setupScreen = useCallback( async () => {
    const i = await getSpeciesId();
    dispatch( { type: "SET_ID", id: i } );
  }, [] );

  const checkIfSpeciesSeen = useCallback( () => {
    if ( id === null ) {
      return;
    }
    Realm.open( realmConfig ).then( ( realm ) => {
      const observations = realm.objects( "ObservationRealm" );
      const seen = observations.filtered( `taxon.id == ${id}` )[0];

      if ( seen ) {
        dispatch( { type: "TAXA_SEEN", seen } );
      } else {
        dispatch( { type: "TAXA_NOT_SEEN" } );
      }
    } ).catch( ( e ) => console.log( "[DEBUG] Failed to open realm, error: ", e ) );
  }, [id] );

  const checkInternetConnection = () => {
    checkForInternet().then( ( internet ) => {
      if ( internet === "none" || internet === "unknown" ) {
        dispatch( { type: "ERROR" } );
      } else {
        dispatch( { type: "NO_ERROR" } );
      }
    } );
  };

  const createTaxonomyList = ( ancestors, scientificName ) => {
    const taxonomyList = [];
    const ranks = ["kingdom", "phylum", "class", "order", "family", "genus"];
    ancestors.forEach( ( ancestor ) => {
      if ( ranks.includes( ancestor.rank ) ) {
        taxonomyList.push( ancestor );
      }
    } );

    taxonomyList.push( {
      rank: "species",
      name: scientificName || null
    } );

    return taxonomyList;
  };

  const fetchTaxonDetails = useCallback( () => {
    if ( id === null ) {
      return;
    }
    const localeParams = { locale: i18n.currentLocale() };
    const options = { user_agent: createUserAgent() };

    inatjs.taxa.fetch( id, localeParams, options ).then( ( response ) => {
      const taxa = response.results[0];
      const scientificName = taxa.name;
      const conservationStatus = taxa.taxon_photos[0].taxon.conservation_status;

      dispatch( {
        type: "SET_TAXON_DETAILS",
        taxon: {
          scientificName,
          iconicTaxonId: taxa.iconic_taxon_id
        },
        photos: taxa.taxon_photos.map( ( p ) => p.photo ),
        details: {
          wikiUrl: taxa.wikipedia_url,
          about: taxa.wikipedia_summary && taxa.wikipedia_summary,
          timesSeen: taxa.observations_count,
          ancestors: createTaxonomyList( taxa.ancestors, scientificName ),
          stats: {
            endangered: ( conservationStatus && conservationStatus.status_name === "endangered" ) || false
          }
        }
      } );
    } ).catch( () => checkInternetConnection() );
  }, [id] );

  const fetchiNatData = useCallback( () => {
    dispatch( { type: "RESET_SCREEN" } );
    setupScreen();

    const scrollToTop = () => {
      if ( scrollView.current ) {
        scrollView.current.scrollTo( {
          x: 0, y: 0, animated: Platform.OS === "android"
        } );
      }
    };

    if ( Platform.OS === "android" ) {
      setTimeout( () => scrollToTop(), 1 );
      // hacky but this fixes scroll not getting to top of screen
    } else {
      scrollToTop();
    }
  }, [setupScreen] );

  useEffect( () => {
    if ( id !== null ) {
      fetchTaxonDetails();
      checkIfSpeciesSeen();
    }
  }, [id, fetchTaxonDetails, checkIfSpeciesSeen] );

  useEffect( () => {
    navigation.addListener( "focus", () => {
      fetchiNatData();
    } );
    navigation.addListener( "blur", () => {
      dispatch( { type: "RESET_SCREEN" } );
    } );
  }, [navigation, fetchiNatData] );

  return (
    <ScrollView
      ref={scrollView}
      contentContainerStyle={[
        styles.footerMargin,
        styles.background,
        styles.greenBanner,
        { paddingTop: insets.top }
      ]}
    >
      <Spacer />
      <SpeciesHeader
        id={id}
        taxon={taxon}
        seenTaxa={seenTaxa}
        photos={photos}
      />
      <SpeciesContainer
        checkForInternet={checkInternetConnection}
        details={details}
        error={error}
        fetchiNatData={fetchiNatData}
        id={id}
        seenTaxa={seenTaxa}
        predictions={( params && params.image && params.image.predictions ) ? params.image.predictions : null}
      />
    </ScrollView>
  );
};

export default SpeciesDetail;
