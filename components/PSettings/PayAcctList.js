import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button, List } from "react-native-paper";
import VisaSVG from "../../assets/svg/cc-visa-2.svg";
import MasterCardSVG from "../../assets/svg/master-card-9.svg";
import SettingsCard from "../Card/SettingsCard";

const PayAcctList = (props) => {
  const [_CrdPressInner, setCrdPressInner] = useState(false);
  const [BtnTitle, setBtnTitle] = useState("");
  const [BtnTitleList, _setBtnTitleList] = useState([
    "",
    "Add Card",
    "Add Paypal",
    "Add Crypto",
  ]);
  useEffect(() => {
    //load user accounts
    console.log(props.AcctType);
  }, []);

  const EditAcctInfo = (AcctID) => {
    props.EditStoredPayAcct(props.AcctType, AcctID);
  };

  // set call to actio button title
  useEffect(() => {
    console.log(props.AcctType);
    if (BtnTitleList[props.AcctType]) {
      setBtnTitle(BtnTitleList[props.AcctType]);
    }
  }, []);
  return (
    <>
      <View
        style={{
          textAlign: "left",
          height: 40,
          flexDirection: "row",
          display: "flex",
          alignItems: "center",
          paddingHorizontal: 18,
          justifyContent: "space-between",
          marginTop: 23,
        }}
      >
        <View
          style={{
            flex: 1,
          }}
        >
          <Text
            style={{
              fontSize: 18,
              color: "rgba(255,255,255,.8)",
              fontWeight: "bold",
            }}
          >
            {props.DialogTitle}
          </Text>
        </View>
        <View
          style={{
            background: "transparent",
          }}
        >
          <Button
            icon=""
            textColor="#82ABFE"
            mode="text"
            labelStyle={{
              fontSize: 17,
            }}
            onPress={() => props.AddNewPayAcct(props.AcctType)}
          >
            {BtnTitle}
          </Button>
        </View>
      </View>
      <View
        style={{
          flex: 1,
          marginTop: 25,
          paddingHorizontal: 15,
        }}
      >
        <SettingsCard
          CardRound={8}
          touchableAction={false}
          CardUid={1}
          PressUAction={setCrdPressInner}
        >
          <List.Item
            titleStyle={{
              color: "#fff",
              marginLeft: 55,
            }}
            style={{}}
            descriptionStyle={{
              color: "rgba(255,255,255,.4)",
              marginLeft: 55,
            }}
            title="**** **** **** 4978"
            description="expires 10/24"
            left={(props) => (
              <View
                style={{
                  position: "absolute",
                  left: -24,
                  top: 4,
                }}
              >
                <VisaSVG />
              </View>
            )}
            right={(props) => (
              <View
                style={{
                  flex: 0,
                  alignItems: "flex-end",
                  alignContent: "center",
                  justifyContent: "center",
                  paddingRight: 7,
                }}
              >
                <Button
                  icon=""
                  style={{
                    padding: 0,
                    borderRadius: 4,
                  }}
                  buttonColor="#3A6BD1"
                  labelStyle={{
                    padding: 0,
                  }}
                  mode="contained"
                  onPress={() => EditAcctInfo(1)}
                >
                  Edit
                </Button>
              </View>
            )}
          />
        </SettingsCard>
        <SettingsCard
          CardRound={8}
          touchableAction={false}
          CardUid={1}
          PressUAction={setCrdPressInner}
        >
          <List.Item
            titleStyle={{
              color: "#fff",
              marginLeft: 55,
            }}
            style={{}}
            descriptionStyle={{
              color: "rgba(255,255,255,.4)",
              marginLeft: 55,
            }}
            title="**** **** **** 2478"
            description="expires 3/28"
            left={(_props) => (
              <View
                style={{
                  position: "absolute",
                  left: -24,
                  top: 4,
                }}
              >
                <MasterCardSVG />
              </View>
            )}
            right={(props) => (
              <View
                style={{
                  flex: 0,
                  alignItems: "flex-end",
                  alignContent: "center",
                  justifyContent: "center",
                  paddingRight: 7,
                }}
              >
                <Button
                  icon=""
                  style={{
                    padding: 0,
                    borderRadius: 4,
                  }}
                  buttonColor="#3A6BD1"
                  labelStyle={{
                    padding: 0,
                  }}
                  mode="contained"
                  onPress={() => EditAcctInfo(1)}
                >
                  Edit
                </Button>
              </View>
            )}
          />
        </SettingsCard>
      </View>
    </>
  );
};

export default PayAcctList;

const styles = StyleSheet.create({});
