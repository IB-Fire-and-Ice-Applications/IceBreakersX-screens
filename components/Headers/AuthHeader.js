import { AntDesign } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import metrics from "../../theme/metrics";

const AuthHeader = (props) => {
  return (
    <View style={styles.HeaderC}>
      <TouchableOpacity
        style={styles.AuthComp}
        onPress={() => props.frmPaginator("back")}
      >
        <AntDesign name="arrowleft" size={24} color="white" />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.AuthComp}
        onPress={() => props.frmPaginator("next")}
      >
        <Text
          style={{
            color: metrics.mutedTextLight,
          }}
        >
          Skip
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default AuthHeader;

const styles = StyleSheet.create({
  HeaderC: {
    flexDirection: "row",
    textAlign: "center",
    alignItems: "center",
    justifyContent: "space-between",
    height: 57,
  },
  AuthComp: {
    width: 57,
    height: 57,
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
  },
});
