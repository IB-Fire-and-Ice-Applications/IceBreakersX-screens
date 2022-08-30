import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Image, StatusBar, StyleSheet, Text, View } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import metrics from "../../theme/metrics";
import Logo from "../../assets/logo/logo-white.png";
import { Button } from "react-native-paper";

const StartScreen = () => {
  return (
    <SafeAreaProvider
      style={{
        backgroundColor: "#3C0D3B",
      }}
    >
      <StatusBar
        animated={true}
        backgroundColor="#400A3A"
        barStyle="light-content"
      />
      <LinearGradient
        colors={["#400A3A", "#580c66"]}
        location={[0.8, 98.4]}
        useAngle={true}
        angle={171.68}
        style={{
          height: metrics.screenHeight,
          alignItems: "center",
          flex: 1,
        }}
      >
        <SafeAreaView
          style={{
            width: "100%",
            flex: 1,
          }}
        >
          <View
            style={{
              flex: 1,
              justifyContent: "space-between",
              flexDirection: "column",
            }}
          >
            <View
              style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
                maxHeight: metrics.screenHeight / 2,
                backgroundColor: "transparent",
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
            <View
              style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
                maxHeight: metrics.screenHeight / 3.5,
                backgroundColor: "transparent",
                paddingHorizontal: 40,
              }}
            >
              <Button
                mode="contained"
                elevation={2}
                buttonColor="rgba(255,255,255,.2)"
                style={{
                  width: "100%",
                  borderRadius: 50,
                  padding: 0,
                }}
                contentStyle={{
                  height: 50,
                }}
              >
                Get Started
              </Button>
              <Button
                mode="contained"
                buttonColor="rgba(255,255,255,0)"
                style={{
                  width: "100%",
                  borderRadius: 50,
                  marginTop: 10,
                  padding: 0,
                }}
                contentStyle={{
                  height: 50,
                }}
              >
                Login
              </Button>
            </View>
          </View>
        </SafeAreaView>
      </LinearGradient>
    </SafeAreaProvider>
  );
};

export default StartScreen;

const styles = StyleSheet.create({});
