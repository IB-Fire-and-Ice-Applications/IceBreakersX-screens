import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";

const SettingsCard = (props) => {
  return (
    <>
      {props.touchableAction === true ? (
        <TouchableOpacity
          onPress={() => props.PressUAction(props.CardUid)}
          style={[styles.SettingsCard, { borderRadius: props.CardRound }]}
        >
          {props.children}
        </TouchableOpacity>
      ) : (
        <View style={[styles.SettingsCard, { borderRadius: props.CardRound }]}>
          {props.children}
        </View>
      )}
    </>
  );
};

export default SettingsCard;

const styles = StyleSheet.create({
  SettingsCard: {
    flex: 1,
    width: "100%",
    alignSelf: "stretch",
    flexDirection: "column",
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    minHeight: 59,
    marginBottom: 18,
  },
});
