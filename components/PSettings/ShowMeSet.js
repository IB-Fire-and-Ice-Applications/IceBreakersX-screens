import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button, RadioButton } from "react-native-paper";
import metrics from "../../theme/metrics";
import { GDialog } from "../PopDialog";

const ShowMeSet = (props) => {
  const [value, setValue] = useState("second");

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
        SnapPointers={["45%"]}
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
            Show Me
          </Text>
        </View>
        <View>
          <RadioButton.Group
            onValueChange={(newValue) => setValue(newValue)}
            value={value}
          >
            <View
              style={{
                paddingHorizontal: 10,
              }}
            >
              <RadioButton.Item
                label="All"
                uncheckedColor="#fff"
                style={{
                  height: 60,
                }}
                labelStyle={{
                  color: "#fff",
                }}
                value="first"
              />

              <RadioButton.Item
                label="Women"
                uncheckedColor="#fff"
                style={{
                  height: 60,
                }}
                labelStyle={{
                  color: "#fff",
                }}
                value="second"
              />

              <RadioButton.Item
                label="Men"
                uncheckedColor="#fff"
                style={{
                  height: 60,
                }}
                labelStyle={{
                  color: "#fff",
                }}
                value="third"
              />
            </View>
          </RadioButton.Group>
          <View
            style={{
              marginTop: 10,
              paddingHorizontal: 20,
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
        </View>
      </GDialog>
    </View>
  );
};

export default ShowMeSet;

const styles = StyleSheet.create({});
