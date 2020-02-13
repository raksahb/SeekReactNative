// @flow

import React from "react";
import {
  View,
  Image
} from "react-native";

import i18n from "../../i18n";
import styles from "../../styles/modals/getStarted";
import icons from "../../assets/icons";
import GreenText from "../UIComponents/GreenText";
import GreenButton from "../UIComponents/Buttons/GreenButton";
import DescriptionText from "../UIComponents/DescriptionText";

type Props = {
  +closeModal: Function
}

const GetStarted = ( { closeModal }: Props ) => (
  <View style={styles.container}>
    <View style={styles.headerMargin}>
      <GreenText text="get_started.header" />
    </View>
    <View style={styles.marginTop} />
    <View style={[styles.row, styles.margin]}>
      <Image source={icons.cameraGreen} style={styles.image} />
      <View style={styles.textContainer}>
        <DescriptionText text={i18n.t( "get_started.tip_1" )} />
      </View>
    </View>
    <View style={styles.marginMiddle} />
    <View style={[styles.row, styles.margin]}>
      <Image source={icons.speciesNearby} style={styles.image} />
      <View style={styles.textContainer}>
        <DescriptionText text={i18n.t( "get_started.tip_2" )} />
      </View>
    </View>
    <View style={styles.marginMiddle} />
    <View style={[styles.row, styles.margin]}>
      <Image source={icons.birdBadge} style={styles.image} />
      <View style={styles.textContainer}>
        <DescriptionText text={i18n.t( "get_started.tip_3" )} />
      </View>
    </View>
    <View style={styles.button}>
      <GreenButton
        handlePress={() => closeModal()}
        text="onboarding.continue"
      />
    </View>
  </View>
);

export default GetStarted;
