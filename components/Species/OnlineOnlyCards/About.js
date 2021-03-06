// @flow
import React, { useContext } from "react";
import { Text } from "react-native";
import { useNavigation, useIsFocused } from "@react-navigation/native";
import HTML from "react-native-render-html";

import i18n from "../../../i18n";
import { UserContext } from "../../UserContext";
import SpeciesDetailCard from "../../UIComponents/SpeciesDetailCard";
import styles from "../../../styles/species/species";
import { useCommonName } from "../../../utility/customHooks";

type Props = {
  +about: ?string,
  +wikiUrl: ?string,
  +id: ?number
}

const About = ( {
  about,
  wikiUrl,
  id
}: Props ) => {
  const navigation = useNavigation();
  const isFocused = useIsFocused();
  const { login } = useContext( UserContext );
  const commonName = useCommonName( id, isFocused );

  const html = `<p>${about}</p>`.replace( /<b>/g, "" );

  return (
    <SpeciesDetailCard text="species_detail.about">
      {about && (
        <>
          <HTML
            baseFontStyle={styles.text}
            html={html}
          />
          <Text style={styles.text}>{"\n("}{i18n.t( "species_detail.wikipedia" )}{")"}</Text>
        </>
      )}
      {( login && id !== 43584 ) && (
        <Text
          onPress={() => navigation.navigate( "Wikipedia", { wikiUrl } )}
          style={styles.linkText}
        >
          {commonName}
        </Text>
      )}
    </SpeciesDetailCard>
  );
};

export default About;
