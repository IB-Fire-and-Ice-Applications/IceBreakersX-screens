import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { GDialog } from "../PopDialog";
import metrics from "../../theme/metrics";
import { Button, List } from "react-native-paper";
import SettingsCard from "../Card/SettingsCard";
import VisaSVG from "../../assets/svg/cc-visa-2.svg";
import MasterCardSVG from "../../assets/svg/master-card-9.svg";

const PaymentOptContent = (props) => {
  const [CrdPress, setCrdPress] = useState(false);
  return (
    <>
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
          BottomInset={0}
          HorizontalMargin={0}
        >
          <View
            style={{
              textAlign: "left",
              flex: 1,
              height: 40,
              flexDirection: "row",
              alignItems: "center",
              paddingHorizontal: 18,
              justifyContent: "space-between",
              marginTop: 23,
            }}
          >
            <View>
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
                background: "red",
              }}
            >
              <Button
                icon=""
                textColor="#82ABFE"
                mode="text"
                labelStyle={{
                  fontSize: 17,
                }}
                onPress={() => console.log("Pressed")}
              >
                Add Card
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
              touchableAction={false}
              CardUid={1}
              PressUAction={setCrdPress}
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
                      onPress={() => console.log("Pressed")}
                    >
                      Edit
                    </Button>
                  </View>
                )}
              />
            </SettingsCard>
            <SettingsCard
              touchableAction={false}
              CardUid={1}
              PressUAction={setCrdPress}
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
                left={(props) => (
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
                      onPress={() => console.log("Pressed")}
                    >
                      Edit
                    </Button>
                  </View>
                )}
              />
            </SettingsCard>
          </View>
        </GDialog>
      </View>
    </>
  );
};

export default PaymentOptContent;

const styles = StyleSheet.create({});
