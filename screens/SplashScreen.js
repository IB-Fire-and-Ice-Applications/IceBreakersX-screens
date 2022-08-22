import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import {
  Image,
  ImageBackground,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Logo from "../assets/logo/logo-white.png";

// Dimensions
import metrics from "../theme/metrics";

const STYLES = ["default", "dark-content", "light-content"];
const TRANSITIONS = ["fade", "slide", "none"];

const SplashScreen = () => {
  const navigation = useNavigation();
  const [statusBarStyle, setStatusBarStyle] = useState(STYLES[2]);
  const [statusBarTransition, setStatusBarTransition] = useState(
    TRANSITIONS[0]
  );
  const [hidden, setHidden] = useState(false);

  return (
    <>
      <LinearGradient
        colors={["#400A3A", "#000", "#000"]}
        locations={[0, 0.5, 1]}
        style={{
          flex: 1,
        }}
      >
        <ImageBackground
          source={require("../assets/backgrounds/bg-1.png")}
          style={styles.ImageBackground}
          resizeMode="cover"
        >
          <View style={styles.container}>
            <StatusBar
              animated={true}
              translucent
              backgroundColor="transparent"
              barStyle={statusBarStyle}
              showHideTransition={statusBarTransition}
              hidden={hidden}
            />

            <View
              style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Image
                style={{
                  width: 100,
                  height: 100,
                  marginBottom: 2,
                }}
                source={Logo}
              />
              <Text
                style={{
                  fontSize: 25,
                  fontWeight: "bold",
                  color: "white",
                }}
              >
                IceBreakers
              </Text>
            </View>
          </View>
        </ImageBackground>
      </LinearGradient>
    </>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  ImageBackground: {
    width: metrics.screenWidth,
    height: metrics.screenHeight,
    alignItems: "center",
  },
});
