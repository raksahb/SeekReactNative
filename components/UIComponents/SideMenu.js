// @flow

import React from "react";
import {
  View,
  Image,
  TouchableOpacity,
  Text,
  SafeAreaView
} from "react-native";

import i18n from "../../i18n";
import styles from "../../styles/uiComponents/sideMenu";
import logoImages from "../../assets/logos";
import icons from "../../assets/icons";

type Props = {
  navigation: any
}

const SideMenu = ( { navigation }: Props ) => (
  <View style={styles.container}>
    <SafeAreaView />
    <TouchableOpacity
      accessibilityLabel={i18n.t( "menu.home" )}
      accessible
      onPress={() => navigation.navigate( "Home" )}
    >
      <Image
        source={logoImages.seek}
        style={styles.logo}
      />
    </TouchableOpacity>
    <View style={styles.textContainer}>
      <TouchableOpacity
        accessibilityLabel={i18n.t( "menu.home" )}
        accessible
        onPress={() => navigation.navigate( "Home" )}
        style={[styles.row, styles.height]}
      >
        <Image source={icons.menuHome} style={styles.image} />
        <Text adjustsFontSizeToFit style={styles.text}>
          {i18n.t( "menu.home" ).toLocaleUpperCase()}
        </Text>
      </TouchableOpacity>
      <View style={styles.divider} />
      <TouchableOpacity
        accessibilityLabel={i18n.t( "menu.achievements" )}
        accessible
        onPress={() => navigation.navigate( "Achievements" )}
        style={[styles.row, styles.height]}
      >
        <Image source={icons.menuAchievements} style={styles.image} />
        <Text adjustsFontSizeToFit style={styles.text}>
          {i18n.t( "menu.achievements" ).toLocaleUpperCase()}
        </Text>
      </TouchableOpacity>
      <View style={styles.divider} />
      <TouchableOpacity
        accessibilityLabel={i18n.t( "menu.challenges" )}
        accessible
        onPress={() => navigation.navigate( "Challenges" )}
        style={[styles.row, styles.height]}
      >
        <Image source={icons.menuChallenges} style={styles.image} />
        <Text adjustsFontSizeToFit style={styles.text}>
          {i18n.t( "menu.challenges" ).toLocaleUpperCase()}
        </Text>
      </TouchableOpacity>
      <View style={styles.divider} />
      <TouchableOpacity
        accessibilityLabel={i18n.t( "menu.observations" )}
        accessible
        onPress={() => navigation.navigate( "Observations" )}
        style={[styles.row, styles.height]}
      >
        <Image source={icons.menuObservations} style={styles.image} />
        <Text adjustsFontSizeToFit style={styles.text}>
          {i18n.t( "menu.observations" ).toLocaleUpperCase()}
        </Text>
      </TouchableOpacity>
      <View style={styles.divider} />
      <TouchableOpacity
        accessibilityLabel={i18n.t( "menu.inat" )}
        accessible
        onPress={() => navigation.navigate( "iNatStats" )}
        style={[styles.row, styles.height]}
      >
        <Image source={icons.menuiNat} style={styles.image} />
        <Text adjustsFontSizeToFit style={styles.text}>
          {i18n.t( "menu.inat" ).toLocaleUpperCase()}
        </Text>
      </TouchableOpacity>
      <View style={styles.divider} />
      <TouchableOpacity
        accessibilityLabel={i18n.t( "menu.about" )}
        accessible
        onPress={() => navigation.navigate( "About" )}
        style={[styles.row, styles.height]}
      >
        <Image source={icons.menuSeek} style={styles.image} />
        <Text adjustsFontSizeToFit style={styles.text}>
          {i18n.t( "menu.about" ).toLocaleUpperCase()}
        </Text>
      </TouchableOpacity>
      <View style={styles.divider} />
      <TouchableOpacity
        accessibilityLabel={i18n.t( "menu.settings" )}
        accessible
        onPress={() => navigation.navigate( "Settings" )}
        style={[styles.row, styles.height]}
      >
        <Image source={icons.menuSettings} style={styles.image} />
        <Text adjustsFontSizeToFit style={styles.text}>
          {i18n.t( "menu.settings" ).toLocaleUpperCase()}
        </Text>
      </TouchableOpacity>
    </View>
  </View>
);

export default SideMenu;
