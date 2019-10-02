import React, { Component } from "react";
import {
  View,
  Text
} from "react-native";
import inatjs from "inaturalistjs";
import { NavigationEvents } from "react-navigation";

import i18n from "../../i18n";
import styles from "../../styles/results/speciesNearby";
import SpeciesNearbyList from "../UIComponents/SpeciesNearbyList";
import { getPreviousAndNextMonth } from "../../utility/dateHelpers";

type Props = {
  +ancestorId: Number,
  +hrank: string,
  +lat: Number,
  +lng: Number,
  +navigation: any
}

class SpeciesNearby extends Component<Props> {
  constructor() {
    super();

    this.state = {
      taxa: []
    };
  }

  setTaxa( taxa ) {
    this.setState( { taxa } );
  }

  setParamsForSpeciesNearby() {
    const {
      ancestorId,
      hrank,
      lat,
      lng
    } = this.props;

    const params = {
      verifiable: true,
      photos: true,
      per_page: 20,
      lat,
      lng,
      radius: 50,
      threatened: false,
      oauth_application_id: "2,3",
      hrank,
      include_only_vision_taxa: true,
      not_in_list_id: 945029,
      month: getPreviousAndNextMonth(),
      locale: i18n.currentLocale(),
      taxon_id: ancestorId
    };

    this.fetchSpeciesNearby( params );
  }

  fetchSpeciesNearby( params ) {
    inatjs.observations.speciesCounts( params ).then( ( response ) => {
      const taxa = response.results.map( r => r.taxon );
      this.setTaxa( taxa );
    } ).catch( () => {
      console.log( "couldn't fetch species nearby" );
    } );
  }

  render() {
    const { taxa } = this.state;
    const { navigation } = this.props;

    const species = (
      <SpeciesNearbyList match navigation={navigation} taxa={taxa} />
    );

    return (
      <View>
        <NavigationEvents
          onWillFocus={() => {
            this.setParamsForSpeciesNearby();
          }}
        />
        <Text style={styles.headerText}>
          {i18n.t( "results.nearby" ).toLocaleUpperCase()}
        </Text>
        <View style={styles.speciesNearbyContainer}>
          {species}
        </View>
      </View>
    );
  }
}

export default SpeciesNearby;