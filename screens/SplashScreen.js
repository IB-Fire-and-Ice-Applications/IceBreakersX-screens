import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import React, { useEffect, useRef, useState } from "react";
import {
  Animated,
  Dimensions,
  ImageBackground,
  StatusBar,
  StyleSheet,
  View,
} from "react-native";
import Logo from "../assets/logo/logo-white.png";

import { useSafeAreaInsets } from "react-native-safe-area-context";

// Dimensions
import metrics from "../theme/metrics";
import { AuthS } from "./Authentication";

const STYLES = ["default", "dark-content", "light-content"];
const TRANSITIONS = ["fade", "slide", "none"];

const SplashScreen = () => {
  const navigation = useNavigation();
  const [statusBarStyle, setStatusBarStyle] = useState(STYLES[2]);
  const [statusBarTransition, setStatusBarTransition] = useState(
    TRANSITIONS[0]
  );

  // SafeArea Value...
  const edges = useSafeAreaInsets();

  //Animtion Values....

  const startAnimation = useRef(new Animated.Value(0)).current;

  //Scaling Down Both Logo and Title
  const ScaleLogo = useRef(new Animated.Value(1)).current;
  const ScaleTitle = useRef(new Animated.Value(1)).current;
  const ScaleBtn = useRef(new Animated.Value(0)).current;

  //Offset Animation

  const moveLogo = useRef(new Animated.ValueXY({ x: 0, y: 0 })).current;
  const moveTitle = useRef(new Animated.ValueXY({ x: 0, y: 0 })).current;

  useEffect(() => {
    //Starting animation after 500ms....

    setTimeout(() => {
      Animated.parallel([
        Animated.timing(startAnimation, {
          toValue: -Dimensions.get("window").height + (edges.top + 65),
          useNativeDriver: true,
        }),
        Animated.timing(ScaleLogo, {
          toValue: 0.8,
          useNativeDriver: true,
        }),
        Animated.timing(ScaleTitle, {
          toValue: 0.8,
          useNativeDriver: true,
        }),
        Animated.timing(ScaleBtn, {
          toValue: 1,
          useNativeDriver: true,
        }),
        Animated.timing(moveLogo, {
          toValue: {
            x: 0,
            y: Dimensions.get("window").height / 1.3,
          },
          useNativeDriver: true,
        }),
        Animated.timing(moveTitle, {
          toValue: {
            x: 0,

            y: Dimensions.get("window").height / 1.34,
          },
          useNativeDriver: true,
        }),
      ]).start();
    }, 2000);
  }, []);

  return (
    <>
      <StatusBar
        animated={true}
        translucent
        backgroundColor="transparent"
        barStyle={statusBarStyle}
        showHideTransition={statusBarTransition}
        hidden={true}
      />
      <LinearGradient
        colors={["#400A3A", "#000", "#000"]}
        locations={[0.3, 0.5, 1]}
        style={{
          flex: 1,
        }}
      >
        <ImageBackground
          source={require("../assets/backgrounds/bg-1.png")}
          style={styles.ImageBackground}
          resizeMode="cover"
        >
          <LinearGradient
            colors={["transparent", "rgba(0,0,0,.2)", "rgba(0,0,0,.4)"]}
            locations={[0, 0.3, 0.5]}
            style={{
              flex: 1,
              width: metrics.screenWidth,
            }}
          >
            <Animated.View
              style={{
                flex: 1,
                backgroundColor: "transparent",
                zIndex: 2,
                transform: [
                  {
                    translateY: startAnimation,
                  },
                ],
              }}
            >
              <View
                style={{
                  flex: 1,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {/* <Image
                style={{
                  width: 100,
                  height: 100,
                  marginBottom: 2,
                }}
                source={Logo}
              /> */}
                <Animated.Image
                  source={Logo}
                  style={{
                    width: 130,
                    height: 130,
                    marginBottom: 0,
                    transform: [
                      {
                        translateX: moveLogo.x,
                      },
                      {
                        translateY: moveLogo.y,
                      },
                      {
                        scale: ScaleLogo,
                      },
                    ],
                  }}
                ></Animated.Image>
                <Animated.Text
                  style={{
                    fontSize: 26,
                    fontWeight: "bold",
                    color: "white",
                    transform: [
                      { translateY: moveTitle.y },
                      { scale: ScaleTitle },
                    ],
                  }}
                >
                  IceBreakers
                </Animated.Text>
              </View>
            </Animated.View>
            <Animated.View
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                height: metrics.screenHeight / 4,
                backgroundColor: "rgba(0,0,0,.0)",
                zIndex: 1,
                flex: 1,
                justifyContent: "center",
                alignContent: "center",
                alignItems: "center",
                transform: [{ scale: ScaleBtn }],
              }}
            >
              <View>
                <AuthS />
              </View>
            </Animated.View>
          </LinearGradient>
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
