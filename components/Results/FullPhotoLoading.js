// @flow
import React from "react";
import { ImageBackground, View } from "react-native";
import LoadingWheel from "../UIComponents/LoadingWheel";

import styles from "../../styles/results/fullPhotoLoading";

type Props = {
  +uri: ?string
};

const FullPhotoLoading = ( { uri }: Props ) => {
  if ( uri ) {
    return (
      <ImageBackground
        source={{ uri }}
        style={[styles.imageBackground, styles.background]}
      >
        <View style={styles.loading}>
          <LoadingWheel color="white" />
        </View>
      </ImageBackground>
    );
  }
  return (
    <View style={[styles.background, styles.flex]}>
      <View style={styles.loading}>
        <LoadingWheel color="white" />
      </View>
    </View>
  );
};

export default FullPhotoLoading;
