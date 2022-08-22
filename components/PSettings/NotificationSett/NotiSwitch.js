import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button, Switch } from "react-native-paper";
import metrics from "../../../theme/metrics";
import SettingsCard from "../../Card/SettingsCard";
import { GDialog } from "../../PopDialog";

const NotiSwitch = (props) => {
  const [_CrdPress, setCrdPress] = useState(0);
  const [isSwitchOnPush, setIsSwitchOnPush] = React.useState(true);
  const [isSwitchOnEmail, setIsSwitchOnEmail] = React.useState(false);

  const ContinueDMode = () => {
    props.setDialogCloserx(true);
  };

  const [NotiTitleList, setNotiTitleList] = useState([
    "",
    "New Admirers",
    "New Matches",
    "IceBreakers Activities",
    "Trending Bars",
  ]);

  const [NotiTitle, setNotiTitle] = useState("");

  useEffect(() => {
    if (NotiTitleList[props.CrdPress]) {
      setNotiTitle(NotiTitleList[props.CrdPress]);
    }
  }, []);

  const onToggleSwitch = (switchType) => {
    if (switchType === 1) {
      setIsSwitchOnPush(!isSwitchOnPush);
    } else if (switchType === 2) {
      setIsSwitchOnEmail(!isSwitchOnEmail);
    }
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
            {NotiTitle}
          </Text>
        </View>
        <View
          style={{
            paddingHorizontal: 20,
            paddingTop: 30,
          }}
        >
          <SettingsCard
            CardRound={60}
            touchableAction={false}
            CardUid={2}
            PressUAction={setCrdPress}
          >
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                height: 40,
                paddingHorizontal: 16,
              }}
            >
              <Text
                style={{
                  fontSize: 16,
                  color: "#fff",
                }}
              >
                Push notifications
              </Text>
              <View>
                <Switch
                  value={isSwitchOnPush}
                  onValueChange={() => onToggleSwitch(1)}
                />
              </View>
            </View>
          </SettingsCard>

          <SettingsCard
            CardRound={60}
            touchableAction={false}
            CardUid={2}
            PressUAction={setCrdPress}
          >
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                height: 40,
                paddingHorizontal: 16,
              }}
            >
              <Text
                style={{
                  fontSize: 16,
                  color: "#fff",
                }}
              >
                Emails
              </Text>
              <View>
                <Switch
                  value={isSwitchOnEmail}
                  onValueChange={() => onToggleSwitch(2)}
                />
              </View>
            </View>
          </SettingsCard>
        </View>
        <View>
          <View
            style={{
              marginTop: 20,
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
                height: 60,
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

export default NotiSwitch;

const styles = StyleSheet.create({});
