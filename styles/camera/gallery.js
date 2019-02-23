import { Dimensions, StyleSheet } from "react-native";
import { colors, padding, fonts } from "../global";

const { width } = Dimensions.get( "screen" );

export default StyleSheet.create( {
  background: {
    flex: 1
  },
  header: {
    backgroundColor: colors.white,
    height: 60,
    flexDirection: "row",
    flexWrap: "nowrap",
    alignItems: "center",
    justifyContent: "space-around"
  },
  headerText: {
    paddingTop: padding.iOSPadding,
    fontSize: 18,
    fontFamily: fonts.semibold,
    color: colors.seekForestGreen,
    letterSpacing: 1.0
  },
  loadingWheel: {
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  galleryContainer: {
    flex: 1,
    flexGrow: 1,
    backgroundColor: colors.lightGray
  },
  container: {
    flexWrap: "wrap",
    flexDirection: "row"
  },
  button: {
    paddingHorizontal: padding.extraSmall,
    paddingTop: padding.small
  },
  image: {
    width: width / 4 - 2,
    height: width / 4 - 2
  },
  backButton: {
    padding: 10
  },
  safeView: {
    flex: 1
  },
  safeViewTop: {
    flex: 0,
    backgroundColor: colors.white
  }
} );
