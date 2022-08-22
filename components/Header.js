import { Octicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import metrics from "../theme/metrics";

const Header = (props) => {
  const goBackHeader = () => {
    if (props.BackHeader) {
      props.BackNavigator(true);
    }
  };
  return (
    <>
      <StatusBar
        animated={true}
        backgroundColor="#400A3A"
        barStyle="light-content"
      />
      <View style={styles.HeaderC}>
        <LinearGradient
          colors={["#400A3A", "#3C0D3B"]}
          locations={[0, 1]}
          useAngle={true}
          angle={92.11}
          style={{
            flex: 1,
            flexDirection: "row",
            width: metrics.screenWidth,
            textAlign: "center",
            justifyContent: "center",
            position: "relative",
          }}
        >
          <TouchableOpacity
            style={{
              width: 57,
              height: 57,
              position: "absolute",
              left: 2,
              top: 0,
              alignContent: "center",
              alignItems: "center",
              justifyContent: "center",
            }}
            onPress={() => goBackHeader()}
          >
            <View>
              <Octicons name="chevron-left" size={26} color="#fff" />
            </View>
          </TouchableOpacity>
          <View
            style={{
              height: 57,
              alignContent: "center",
              alignItems: "center",
              textAlign: "center",
              justifyContent: "center",
              backgroundColor: "transparent",
            }}
          >
            <View
              style={{
                textAlign: "center",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: "bold",
                  color: "white",
                  backgroundColor: "transparent",
                }}
              >
                {props.title}
              </Text>
            </View>
          </View>
        </LinearGradient>
      </View>
    </>
  );
};

export default Header;

const styles = StyleSheet.create({
  HeaderC: {
    flexDirection: "column",
    width: "100%",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    height: 57,
  },
});
