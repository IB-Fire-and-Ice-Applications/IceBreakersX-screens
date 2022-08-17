import { Octicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import {
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Logo from "../assets/logo/logo-white.png";

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
        backgroundColor="#3C0D3B"
        barStyle="light-content"
      />
      <View style={styles.HeaderC}>
        <LinearGradient
          colors={["#3C0D3B", "#3C0D3B"]}
          locations={[0, 1]}
          useAngle={true}
          angle={92.11}
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <TouchableOpacity
            style={{
              width: 57,
              height: 57,
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
              width: 300,
              height: 57,
              alignContent: "center",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "transparent",
            }}
          >
            <View
              style={{
                textAlign: "center",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "transparent",
              }}
            >
              {/* <Image
                style={{
                  width: 30,
                  height: 30,
                  marginBottom: 0.1,
                }}
                source={Logo}
              /> */}
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
          <View
            style={{
              width: 300,
              height: 57,
              alignContent: "center",
              alignItems: "center",
              justifyContent: "center",
            }}
          ></View>
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
    height: 57,
  },
});
