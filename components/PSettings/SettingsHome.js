import { Octicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import React, { useEffect, useState } from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Avatar, TouchableRipple } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import Logo from "../../assets/logo/logo-white.png";
import ScanSVG from "../../assets/svg/scan-15.svg";
import metrics from "../../theme/metrics";
import SettingsCard from "../Card/SettingsCard";
import SettingsHeader from "../Headers/SettingsHeader";
import Drkmode from "./Drkmode";

const SettingsHome = ({ navigation }) => {
  const [IsOpenSchemeMode, setIsOpenSchemeMode] = useState(false);
  const [DialogCloserx, setDialogCloserx] = useState(false);
  const [CrdPress, setCrdPress] = useState(0);
  const [HeaderBack, setHeaderBack] = useState(false);
  const [ShowAlert, setShowAlert] = useState(true);
  const [isSwitchOn, setIsSwitchOn] = React.useState(false);
  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);

  useEffect(() => {
    if (DialogCloserx) {
      setCrdPress(0);
      setIsOpenSchemeMode(false);
    }
  }, [DialogCloserx]);

  useEffect(() => {
    if (CrdPress > 0) {
      if (CrdPress == 3) {
        setDialogCloserx(false);
        setIsOpenSchemeMode(true);
      } else if (CrdPress == 1) {
        navigation.navigate("SProfile");
        setCrdPress(0);
      } else if (CrdPress == 4) {
        navigation.navigate("SPayment");
        setCrdPress(0);
      } else if (CrdPress == 2) {
        navigation.navigate("SLanguage");
        setCrdPress(0);
      } else if (CrdPress == 8) {
        navigation.navigate("NSettings");
        setCrdPress(0);
      }
    }
  }, [CrdPress]);

  return (
    <>
      {/* {ShowAlert && <GAlert />} */}
      <LinearGradient
        colors={["#400A3A", "#4285F4"]}
        location={[0.8, 98.4]}
        useAngle={true}
        angle={171.68}
        style={{
          height: metrics.screenHeight,
          alignItems: "center",
          flex: 1,
        }}
      >
        <SafeAreaView
          style={{
            width: "100%",
            flex: 1,
          }}
        >
          <SettingsHeader
            BackHeader={false}
            BackNavigator={setHeaderBack}
            title="Settings"
          />

          <ScrollView
            style={{
              paddingTop: 0,
              paddingHorizontal: 20,
              flex: 1,
            }}
          >
            <View
              style={{
                paddingBottom: 60,
              }}
            >
              {/* Profile Card */}
              <View
                style={{
                  flex: 1,
                  height: 70,
                  marginVertical: 20,
                  flexDirection: "row",
                  width: metrics.screenWidth,
                  alignItems: "center",
                  position: "relative",
                }}
                rippleColor="rgba(0, 0, 0, .32)"
              >
                <View
                  style={{
                    flex: 1,
                    flexDirection: "row",
                    width: metrics.screenWidth,
                  }}
                >
                  <View
                    style={{
                      border: "2px solid #fff",
                    }}
                  >
                    <Avatar.Image
                      size={60}
                      source={require("../../assets/avatar-2.png")}
                    />
                  </View>
                  <View
                    style={{
                      justifyContent: "center",
                      paddingLeft: 10,
                      alignSelf: "stretch",
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 20,
                        color: "rgba(255,255,255,.8)",
                      }}
                    >
                      Allison Gomez
                    </Text>
                    <Text
                      style={{
                        fontSize: 17,
                        color: "rgba(255,255,255,.6)",
                      }}
                    >
                      @Marcul
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    width: 50,
                    height: 50,
                    right: 50,
                    flex: 1,
                    flexDirection: "row",
                    textAlign: "center",
                    justifyContent: "flex-end",
                    alignItems: "center",
                    position: "absolute",
                  }}
                >
                  <View style={{}}>
                    <TouchableRipple
                      onPress={() => console.log("Pressed")}
                      rippleColor="rgba(0, 0, 0, .1)"
                    >
                      <ScanSVG />
                    </TouchableRipple>
                    {/* <Button
                      icon=""
                      mode="text"
                      onPress={() => console.log("Pressed")}
                    >
                      <ScanSVG />
                    </Button> */}
                  </View>
                </View>
              </View>

              {/* Profile Control */}
              <SettingsCard
                CardRound={8}
                touchableAction={true}
                CardUid={1}
                PressUAction={setCrdPress}
              >
                <View
                  style={{
                    flex: 1,
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    paddingHorizontal: 16,
                  }}
                >
                  <View
                    style={{
                      flexDirection: "column",
                    }}
                  >
                    <Text
                      style={{
                        color: "#fff",
                        fontSize: 17,
                      }}
                    >
                      Account
                    </Text>

                    <View>
                      <Text
                        style={{
                          color: "rgba(255,255,255,.3)",
                        }}
                      >
                        Location, like, wishlist, friends, groups
                      </Text>
                    </View>
                  </View>

                  <View>
                    <Octicons
                      name="chevron-right"
                      size={22}
                      color="rgba(255,255,255,.6)"
                    />
                  </View>
                </View>
              </SettingsCard>
              {/* Language Control */}
              <SettingsCard
                CardRound={8}
                touchableAction={false}
                CardUid={2}
                PressUAction={setCrdPress}
              >
                <View
                  style={{
                    paddingHorizontal: 13,
                    paddingTop: 10,
                    height: 30,
                    justifyContent: "center",
                  }}
                >
                  <Text
                    style={{
                      color: "rgba(255,255,255,.4)",
                    }}
                  >
                    Preferred Language
                  </Text>
                </View>
                <TouchableOpacity
                  style={{
                    flex: 1,
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    height: 50,
                    paddingHorizontal: 16,
                    paddingBottom: 8,
                  }}
                  onPress={() => setCrdPress(2)}
                >
                  <View
                    style={{
                      flexDirection: "row",
                    }}
                  >
                    <Text
                      style={{
                        color: "#fff",
                        fontSize: 17,
                      }}
                    >
                      English
                    </Text>
                  </View>
                  <View>
                    <Octicons
                      name="chevron-right"
                      size={22}
                      color="rgba(255,255,255,.6)"
                    />
                  </View>
                </TouchableOpacity>
              </SettingsCard>

              {/* <View style={{ height: 20 }}></View> */}

              {/* Payment Control */}
              <SettingsCard
                CardRound={8}
                touchableAction={false}
                CardUid={0}
                PressUAction={setCrdPress}
              >
                <View
                  style={{
                    paddingHorizontal: 13,
                    height: 40,
                    justifyContent: "center",
                  }}
                >
                  <Text
                    style={{
                      color: "rgba(255,255,255,.4)",
                    }}
                  >
                    Payment account
                  </Text>
                </View>
                <TouchableOpacity
                  style={{
                    flex: 1,
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    paddingHorizontal: 16,
                    marginBottom: 19,
                  }}
                  onPress={() => setCrdPress(4)}
                >
                  <View
                    style={{
                      flexDirection: "row",
                    }}
                  >
                    <Text
                      style={{
                        color: "#fff",
                        fontSize: 17,
                      }}
                    >
                      Manage payment account
                    </Text>
                  </View>
                  <View>
                    <Octicons
                      name="chevron-right"
                      size={22}
                      color="rgba(255,255,255,.6)"
                    />
                  </View>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    flex: 1,
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    paddingHorizontal: 16,
                    marginBottom: 13,
                  }}
                >
                  <View
                    style={{
                      flexDirection: "row",
                    }}
                  >
                    <Text
                      style={{
                        color: "#fff",
                        fontSize: 17,
                      }}
                    >
                      Restore Purchases
                    </Text>
                  </View>
                  <View>
                    <Octicons
                      name="chevron-right"
                      size={22}
                      color="rgba(255,255,255,.6)"
                    />
                  </View>
                </TouchableOpacity>
              </SettingsCard>

              {/* Notification Control */}
              <SettingsCard
                CardRound={8}
                touchableAction={true}
                CardUid={8}
                PressUAction={setCrdPress}
              >
                <View
                  style={{
                    flex: 1,
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    paddingHorizontal: 16,
                  }}
                >
                  <View
                    style={{
                      flexDirection: "row",
                    }}
                  >
                    <Text
                      style={{
                        color: "#fff",
                        fontSize: 17,
                      }}
                    >
                      Notification settings
                    </Text>
                  </View>
                  <View>
                    <Octicons
                      name="chevron-right"
                      size={22}
                      color="rgba(255,255,255,.6)"
                    />
                  </View>
                </View>
              </SettingsCard>
              {/* Scheme Control */}
              <SettingsCard
                CardRound={8}
                touchableAction={true}
                CardUid={3}
                PressUAction={setCrdPress}
              >
                <View
                  style={{
                    flex: 1,
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    paddingHorizontal: 16,
                  }}
                >
                  <View
                    style={{
                      flexDirection: "row",
                    }}
                  >
                    <Text
                      style={{
                        color: "#fff",
                        fontSize: 17,
                      }}
                    >
                      Dark Mode
                    </Text>
                  </View>
                  <View>
                    <Octicons
                      name="chevron-right"
                      size={22}
                      color="rgba(255,255,255,.6)"
                    />
                  </View>
                </View>
              </SettingsCard>

              {/* Profile Control */}
              <SettingsCard
                CardRound={8}
                touchableAction={true}
                CardUid={10}
                PressUAction={setCrdPress}
              >
                <View
                  style={{
                    flex: 1,
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    paddingHorizontal: 16,
                  }}
                >
                  <View
                    style={{
                      flexDirection: "column",
                    }}
                  >
                    <Text
                      style={{
                        color: "#fff",
                        fontSize: 17,
                      }}
                    >
                      Help
                    </Text>

                    <View>
                      <Text
                        style={{
                          color: "rgba(255,255,255,.3)",
                        }}
                      >
                        Help centre, contact us, privacy policy
                      </Text>
                    </View>
                  </View>

                  <View>
                    <Octicons
                      name="chevron-right"
                      size={22}
                      color="rgba(255,255,255,.6)"
                    />
                  </View>
                </View>
              </SettingsCard>

              <View style={{ height: 20 }}></View>
              {/* Logout control */}
              <SettingsCard
                CardRound={8}
                touchableAction={true}
                CardUid={7}
                PressUAction={setCrdPress}
              >
                <View
                  style={{
                    flex: 1,
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                    paddingHorizontal: 16,
                  }}
                >
                  <View
                    style={{
                      flexDirection: "row",
                    }}
                  >
                    <Text
                      style={{
                        color: "#fff",
                        fontSize: 17,
                      }}
                    >
                      Logout
                    </Text>
                  </View>
                </View>
              </SettingsCard>
              <View
                style={{
                  height: 80,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Image
                  source={Logo}
                  style={{
                    width: 40,
                    height: 40,
                  }}
                />
                <Text
                  style={{
                    color: "rgba(255,255,255,.4)",
                  }}
                >
                  Version 1.0.01
                </Text>
              </View>
            </View>
          </ScrollView>
        </SafeAreaView>
      </LinearGradient>

      {IsOpenSchemeMode && <Drkmode setDialogCloserx={setDialogCloserx} />}
    </>
  );
};

export default SettingsHome;

const styles = StyleSheet.create({});
