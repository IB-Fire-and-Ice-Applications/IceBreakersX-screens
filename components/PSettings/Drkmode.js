import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button, RadioButton } from "react-native-paper";
import metrics from "../../theme/metrics";
import { GDialog } from "../PopDialog";

const Drkmode = (props) => {
  const [value, setValue] = useState("first");

  const ContinueDMode = () => {
    props.setDialogCloserx(true);
  };
  return (
    <View
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        zIndex: 7,
        flex: 1,
        height: metrics.screenHeight,
        alignItems: "center",
        width: metrics.screenWidth,
        backgroundColor: "rgba(0,0,0,.75)",
      }}
    >
      <GDialog
        Detacher={true}
        DialogCloser={props.setDialogCloserx}
        BottomInset={46}
        HorizontalMargin={22}
      >
        <View
          style={{
            textAlign: "center",
            flex: 1,
            height: 40,
            alignItems: "center",
            justifyContent: "center",
            marginTop: 18,
          }}
        >
          <Text
            style={{
              fontSize: 18,
              color: "rgba(255,255,255,.8)",
              fontWeight: "bold",
            }}
          >
            Dark Mode
          </Text>
        </View>
        <View>
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
                Follow System
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
                Normal Mode
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
                Dark Mode
              </Text>
              <RadioButton
                style={{
                  color: "#fff",
                }}
                uncheckedColor="#fff"
                value="third"
              />
            </View>
            <View
              style={{
                paddingHorizontal: 30,
                flex: 1,
                height: 60,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Button
                mode="contained"
                uppercase={false}
                buttonColor="#4172d7"
                style={{
                  width: "100%",
                  borderRadius: 50,
                  padding: 0,
                }}
                contentStyle={{
                  height: 50,
                }}
                onPress={() => ContinueDMode()}
              >
                Continue
              </Button>
            </View>
          </RadioButton.Group>
        </View>
      </GDialog>
    </View>
  );
};

export default Drkmode;

const styles = StyleSheet.create({});
