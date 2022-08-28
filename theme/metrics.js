import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

const metrics = {
  screenWidth: width < height ? width : height,
  screenHeight: width < height ? height : width,
  mutedText: "rgba(255,255,255,.5)",
  mutedTextLight: "rgba(255,255,255,.7)",
};

export default metrics;
