import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { Button } from "react-native-paper";
import metrics from "../../theme/metrics";
import { useNavigation } from "@react-navigation/native";

const StartScreen = () => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        width: metrics.screenWidth,
        flex: 1,
      }}
    >
      <TouchableOpacity
        style={{
          paddingHorizontal: 50,
        }}
        onPress={() => navigation.navigate("StartAuth")}
      >
        <Button
          mode="contained"
          elevation={2}
          buttonColor="rgba(255,255,255,1)"
          style={{
            borderRadius: 60,
            padding: 0,
          }}
          contentStyle={{
            height: 50,
          }}
          labelStyle={{
            fontSize: 16,
            color: "#000",
          }}
        >
          Get Started
        </Button>
      </TouchableOpacity>
      <View
        style={{
          paddingHorizontal: 50,
          marginTop: 30,
        }}
      >
        <Button
          mode="contained"
          elevation={2}
          buttonColor="rgba(255,255,255,0)"
          style={{
            borderRadius: 50,
            padding: 0,
          }}
          contentStyle={{
            height: 50,
          }}
          labelStyle={{
            fontSize: 16,
          }}
        >
          Login with Phone number
        </Button>
      </View>
    </View>
  );
};

export default StartScreen;

const styles = StyleSheet.create({});
