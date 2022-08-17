import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import metrics from "../../theme/metrics";
import Header from "../Header";
import { Switch } from "react-native-paper";
import SettingsCard from "../Card/SettingsCard";
import { Octicons } from "@expo/vector-icons";

const ProfileSettings = ({ navigation: { goBack } }) => {
  const [HeaderBack, setHeaderBack] = useState(false);
  const [isSwitchOn, setIsSwitchOn] = React.useState(false);
  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);
  const [CrdPress, setCrdPress] = useState(0);

  useEffect(() => {
    if (HeaderBack) {
      goBack();
    }
  }, [HeaderBack]);

  return (
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
      <Header
        BackHeader={true}
        BackNavigator={setHeaderBack}
        title="Account Settings"
      />

      <SafeAreaView
        style={{
          width: "100%",
          flex: 1,
        }}
      >
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
            <View
              style={{
                height: 80,
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  color: "rgba(255,255,255,.6)",
                  fontSize: 15,
                  textAlign: "center",
                  paddingHorizontal: 20,
                }}
              >
                Personalize your account setting to get the best experience.
              </Text>
            </View>
            {/* Like & Wishlist Control */}
            <SettingsCard
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
                    flexDirection: "row",
                  }}
                >
                  <Text
                    style={{
                      color: "#fff",
                      fontSize: 17,
                    }}
                  >
                    My Like / Wishlist
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
            {/* Location Control */}
            <SettingsCard
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
                  Discovery Settings
                </Text>
              </View>
              <View
                style={{
                  flex: 1,
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  height: 50,
                  paddingHorizontal: 16,
                  paddingBottom: 8,
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
                    Location{" "}
                    <Text
                      style={{
                        color: "rgba(255,255,255,.6)",
                      }}
                    >
                      (Texas,USA)
                    </Text>
                  </Text>
                </View>
                <View>
                  <Switch value={isSwitchOn} onValueChange={onToggleSwitch} />
                </View>
              </View>
            </SettingsCard>
            {/* Blocked Users Control */}
            <SettingsCard
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
                    flexDirection: "row",
                  }}
                >
                  <Text
                    style={{
                      color: "#fff",
                      fontSize: 17,
                    }}
                  >
                    Blocked Users
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
            {/* Show Me Control */}
            <SettingsCard
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
                  Show Me
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
                onPress={() => setCrdPress(5)}
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
                    Women
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
            {/* Legal Control */}
            <SettingsCard
              touchableAction={false}
              CardUid={5}
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
                  Legal
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
                    Licenses
                  </Text>
                </View>
                <View>
                  {/* <Octicons
                      name="chevron-right"
                      size={22}
                      color="rgba(255,255,255,.6)"
                    /> */}
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
                    Terms of Service
                  </Text>
                </View>
                <View>
                  {/* <Octicons
                      name="chevron-right"
                      size={22}
                      color="rgba(255,255,255,.6)"
                    /> */}
                </View>
              </TouchableOpacity>
            </SettingsCard>
            {/* Delete Account  Control */}
            <View style={{ height: 20 }}></View>
            <SettingsCard
              touchableAction={true}
              CardUid={6}
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
                    Delete account
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
          </View>
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default ProfileSettings;

const styles = StyleSheet.create({});
