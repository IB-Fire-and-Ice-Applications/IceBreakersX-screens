import { ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React, { useEffect, useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import metrics from "../../theme/metrics";
import { RadioButton } from "react-native-paper";
import SettingsHeader from "../Headers/SettingsHeader";

const LanguageSettings = ({ navigation: { goBack } }) => {
  const [HeaderBack, setHeaderBack] = useState(false);
  const [value, setValue] = useState("first");

  useEffect(() => {
    if (HeaderBack) {
      goBack();
    }
  }, [HeaderBack]);
  return (
    <LinearGradient
      colors={["#400A3A", "#4285F4"]}
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
        <SettingsHeader
          BackHeader={true}
          BackNavigator={setHeaderBack}
          title="Preferred Languages"
        />

        <ScrollView
          style={{
            paddingTop: 0,
            paddingHorizontal: 10,
            flex: 1,
          }}
        >
          <View
            style={{
              paddingBottom: 60,
            }}
          >
            <RadioButton.Group
              onValueChange={(newValue) => setValue(newValue)}
              value={value}
            >
              <View
                style={{
                  flex: 1,
                  flexDirection: "row",
                  width: "100%",
                  paddingHorizontal: 20,
                  justifyContent: "space-between",
                  alignItems: "center",
                  height: 60,
                }}
              >
                <Text
                  style={{
                    color: "#fff",
                    fontSize: 16,
                  }}
                >
                  English
                </Text>
                <RadioButton uncheckedColor="#fff" value="first" />
              </View>
              <View
                style={{
                  flex: 1,
                  flexDirection: "row",
                  width: "100%",
                  paddingHorizontal: 20,
                  alignItems: "center",
                  justifyContent: "space-between",
                  height: 60,
                }}
              >
                <Text
                  style={{
                    color: "#fff",
                    fontSize: 16,
                  }}
                >
                  Spanish
                </Text>
                <RadioButton uncheckedColor="#fff" value="second" />
              </View>
              <View
                style={{
                  flex: 1,
                  flexDirection: "row",
                  width: "100%",
                  paddingHorizontal: 20,
                  alignItems: "center",
                  justifyContent: "space-between",
                  height: 60,
                }}
              >
                <Text
                  style={{
                    color: "#fff",
                    fontSize: 16,
                  }}
                >
                  French
                </Text>
                <RadioButton uncheckedColor="#fff" value="third" />
              </View>
            </RadioButton.Group>
          </View>
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default LanguageSettings;

const styles = StyleSheet.create({});
