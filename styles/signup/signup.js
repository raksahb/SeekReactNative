import { StyleSheet, Platform } from "react-native";

import { fonts, colors, padding } from "../global";

export default StyleSheet.create( {
  container: {
    flex: 1
  },
  safeViewTop: {
    flex: 0,
    backgroundColor: colors.seekForestGreen
  },
  safeView: {
    flex: 1,
    backgroundColor: "transparent"
  },
  innerContainer: {
    alignItems: "center",
    justifyContent: "center"
  },
  inputField: {
    width: 307,
    backgroundColor: colors.white,
    height: 37,
    borderRadius: 40,
    borderWidth: 1,
    borderColor: colors.darkGray,
    paddingLeft: 15
  },
  dateButton: {
    backgroundColor: colors.seekForestGreen,
    paddingHorizontal: 14,
    height: 43,
    borderRadius: 6,
    justifyContent: "center",
    alignItems: "center"
  },
  greenButton: {
    backgroundColor: colors.seekForestGreen,
    width: 317,
    height: 52,
    borderRadius: 34,
    justifyContent: "center",
    alignItems: "center"
  },
  buttonText: {
    paddingTop: padding.iOSPadding,
    fontFamily: fonts.semibold,
    fontSize: 18,
    letterSpacing: 1.0,
    color: colors.white
  },
  header: {
    // marginTop: 83,
    textAlign: "center",
    color: colors.black,
    fontFamily: fonts.medium,
    fontSize: 19,
    lineHeight: 24
  },
  headerText: {
    marginTop: 22,
    textAlign: "center",
    color: colors.seekForestGreen,
    fontFamily: fonts.semibold,
    fontSize: 23,
    lineHeight: 30,
    letterSpacing: 1.0
  },
  privacy: {
    marginTop: 22,
    textAlign: "center",
    color: colors.seekForestGreen,
    fontFamily: fonts.book,
    fontSize: 16,
    lineHeight: 21,
    textDecorationLine: "underline"
  },
  text: {
    marginHorizontal: 38,
    marginTop: 20,
    textAlign: "center",
    fontFamily: fonts.medium,
    fontSize: 16,
    color: colors.black,
    lineHeight: 21
  },
  leftTextContainer: {
    flexDirection: "row",
    flexWrap: "nowrap",
    alignSelf: "flex-start",
    marginLeft: 39,
    marginTop: 16,
    marginBottom: 8
  },
  leftText: {
    fontFamily: fonts.semibold,
    fontSize: 18,
    letterSpacing: 1.0,
    lineHeight: 24,
    color: colors.seekForestGreen
  },
  darkText: {
    color: colors.black,
    fontSize: 20,
    textAlign: "center"
  },
  datePickerContainer: {
    marginTop: Platform.OS === "android" ? 40 : null,
    marginBottom: Platform.OS === "android" ? 60 : null,
    alignItems: Platform.OS === "android" ? "center" : null,
    // flex: Platform.OS === "ios" ? 1 : null,
    justifyContent: "center"
  },
  datePickerInputField: {
    width: 307,
    textAlign: "center",
    justifyContent: "center",
    backgroundColor: colors.white,
    height: 37,
    borderRadius: 40
  },
  secondHeaderText: {
    textAlign: "center",
    fontFamily: fonts.book,
    fontSize: 22,
    color: colors.white,
    lineHeight: 30
  },
  row: {
    marginTop: 35,
    marginBottom: 104,
    flexDirection: "row",
    flexWrap: "nowrap",
    alignItems: "center"
  },
  licenseText: {
    maxWidth: 253,
    fontFamily: fonts.book,
    fontSize: 16,
    lineHeight: 21,
    color: colors.black
  },
  checkBox: {
    marginRight: 18
  }
} );