import { StyleSheet, Text, View } from "react-native";
import React from "react";
import metrics from "../../theme/metrics";

const AuthTitle = (props) => {
  return (
    <View>
      <Text
        style={{
          fontSize: 24,
          fontWeight: "500",
          color: "#fff",
          textAlign: props.contPos,
        }}
      >
        {props.title}
      </Text>
      {props.desc.length ? (
        <Text
          style={{
            fontSize: 17,
            marginTop: 6,
            color: metrics.mutedText,
            textAlign: props.contPos,
          }}
        >
          {props.desc}
        </Text>
      ) : (
        ""
      )}
    </View>
  );
};

export default AuthTitle;

const styles = StyleSheet.create({});
