// @flow
import AsyncStorage from "@react-native-community/async-storage";

const toggleScientificNames = ( boolean ) => {
  AsyncStorage.setItem( "scientific_names", boolean.toString() );
};

const getScientificNames = async () => {
  try {
    const scientificNames = await AsyncStorage.getItem( "scientific_names" );
    if ( scientificNames === null || scientificNames === "false" ) {
      return false;
    }
    return true;
  } catch ( error ) {
    return false;
  }
};

const toggleLanguage = ( language ) => {
  AsyncStorage.setItem( "language", language );
};

const getLanguage = async () => {
  try {
    const language = await AsyncStorage.getItem( "language" );
    return language || "device"; // return device to trigger common names loading
  } catch ( error ) {
    return false;
  }
};

const toggleCameraCapture = ( boolean ) => {
  AsyncStorage.setItem( "camera", boolean.toString() );
};

const getAutoCapture = async () => {
  try {
    const camera = await AsyncStorage.getItem( "camera" );
    if ( camera === null || camera === "false" ) {
      return false;
    }
    return true;
  } catch ( error ) {
    return false;
  }
};

export {
  toggleScientificNames,
  getScientificNames,
  toggleLanguage,
  getLanguage,
  toggleCameraCapture,
  getAutoCapture
};
