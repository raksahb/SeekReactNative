import { Platform, Dimensions } from "react-native";

const { width, height } = Dimensions.get( "window" );

export const colors = {
  white: "#ffffff",
  black: "#000000",
  lightGray: "#f5f5f5",
  darkGray: "#393939",
  seekiNatGreen: "#77b300",
  seekTeal: "#297f87",
  seekGreen: "#44ab55",
  seekForestGreen: "#38976d",
  seekTransparent: "#38976d33",
  speciesNearbyGreen: "#2a7353",
  dividerGray: "#d8d8d8",
  dividerWhite: "#63d4ab",
  errorGray: "#4a4a4a",
  circleGray: "#f0f0f0",
  red: "#973838",
  transparent: "transparent",
  linkText: "#9b9b9b",
  speciesError: "#102b1f",
  textShadow: "rgba(0, 0, 0, 0.75)",
  silver: "#818181",
  bronze: "#aa774a",
  menuItems: "#63d4ab",
  grayGradientDark: "#404040",
  grayGradientLight: "#5e5e5e",
  greenGradientDark: "#22784d",
  greenGradientLight: "#38976d",
  tealGradientDark: "#175f67",
  checkboxColor: "#979797",
  placeholderGray: "#828282"
};

export const fonts = {
  medium: Platform.OS === "ios" ? "Whitney-Medium" : "Whitney-Medium-Pro",
  semibold: Platform.OS === "ios" ? "Whitney-Semibold" : "Whitney-Semibold-Pro",
  book: Platform.OS === "ios" ? "Whitney-Book" : "Whitney-Book-Pro",
  light: Platform.OS === "ios" ? "Whitney-Light" : "Whitney-Light-Pro",
  bookItalic: Platform.OS === "ios" ? "Whitney-BookItalic" : "Whitney-BookItalic-Pro"
};

export const padding = {
  iOSPadding: Platform.OS === "ios" ? 8 : 0,
  iOSButtonPadding: Platform.OS === "ios" ? 7 : 0, // this looks different on RN 0.63.x
  iOSPaddingFontSize18: Platform.OS === "ios" ? 4 : 0, // so does this
  iOSPaddingSmall: Platform.OS === "ios" ? 5 : 0
};

export const dimensions = {
  width,
  height
};

export const center = {
  alignItems: "center",
  justifyContent: "center"
};

export const row = {
  alignItems: "center",
  flexDirection: "row",
  flexWrap: "nowrap"
};
