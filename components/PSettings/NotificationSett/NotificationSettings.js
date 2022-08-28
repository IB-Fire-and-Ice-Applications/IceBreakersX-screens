import { LinearGradient } from "expo-linear-gradient";
import React, { useEffect, useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Switch } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import metrics from "../../../theme/metrics";
import SettingsCard from "../../Card/SettingsCard";
import { Octicons } from "@expo/vector-icons";
import NotiSwitch from "./NotiSwitch";
import SettingsHeader from "../../Headers/SettingsHeader";

const NotificationSettings = ({ navigation: { goBack } }) => {
  const [HeaderBack, setHeaderBack] = useState(false);
  const [CrdPress, setCrdPress] = useState(0);
  const [isSwitchOn, setIsSwitchOn] = React.useState(true);
  const [isSwitchOnFriendRequest, setIsSwitchOnFriendRequest] =
    React.useState(true);
  const [isSwitchOnFollowers, setIsSwitchOnFollowers] = React.useState(false);
  const [isSwitchOnProfileLike, setIsSwitchOnProfileLike] =
    React.useState(true);
  const [DialogCloserx, setDialogCloserx] = useState(false);

  const [NotificationSwitch, setNotificationSwitch] = useState(false);

  const onToggleSwitch = (switchType) => {
    if (switchType === 1) {
      setIsSwitchOn(!isSwitchOn);
    } else if (switchType === 2) {
      setIsSwitchOnFriendRequest(!isSwitchOnFriendRequest);
    } else if (switchType === 3) {
      setIsSwitchOnFollowers(!isSwitchOnFollowers);
    } else if (switchType === 4) {
      setIsSwitchOnProfileLike(!isSwitchOnProfileLike);
    }
  };

  const NotificationToggler = (notiType) => {
    setCrdPress(notiType);
    setDialogCloserx(false);
    setNotificationSwitch(true);
  };

  useEffect(() => {
    if (DialogCloserx) {
      setCrdPress(0);
      setNotificationSwitch(false);
    }
  }, [DialogCloserx]);

  useEffect(() => {
    if (HeaderBack) {
      goBack();
    }
  }, [HeaderBack]);
  return (
    <>
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
            BackHeader={true}
            BackNavigator={setHeaderBack}
            title="Notifications"
          />

          <ScrollView
            style={{
              paddingTop: 0,
              paddingHorizontal: 10,
              flex: 1,
            }}
          >
            <View
              style={{
                paddingBottom: 20,
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
                    paddingHorizontal: 60,
                  }}
                >
                  Choose what activities matter to you to keep in touch with.
                </Text>
              </View>
            </View>
            <View>
              {/* Message notification */}
              <SettingsCard
                CardRound={8}
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
                    height: 70,
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
                      Messages
                    </Text>
                    <View>
                      <Text
                        style={{
                          color: "rgba(255,255,255,.3)",
                        }}
                      >
                        Someone sent you a new message
                      </Text>
                    </View>
                  </View>
                  <View>
                    <Switch
                      value={isSwitchOn}
                      onValueChange={() => onToggleSwitch(1)}
                    />
                  </View>
                </View>
              </SettingsCard>

              {/* Match Notifications */}
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
                    Match notifications
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
                  onPress={() => NotificationToggler(1)}
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
                      New Admirers
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
                  onPress={() => NotificationToggler(2)}
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
                      New Matches
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

              {/* Friends & Followers notification */}
              <SettingsCard
                CardRound={8}
                touchableAction={false}
                CardUid={0}
                PressUAction={setCrdPress}
              >
                <View
                  style={{
                    flex: 1,
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    paddingHorizontal: 16,
                    paddingVertical: 10,
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
                      Friend Request
                    </Text>
                    <View>
                      <Text
                        style={{
                          color: "rgba(255,255,255,.3)",
                        }}
                      >
                        Someone sent you a friend request
                      </Text>
                    </View>
                  </View>
                  <View>
                    <Switch
                      value={isSwitchOnFriendRequest}
                      onValueChange={() => onToggleSwitch(2)}
                    />
                  </View>
                </View>
                <View
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
                      flexDirection: "column",
                    }}
                  >
                    <Text
                      style={{
                        color: "#fff",
                        fontSize: 17,
                      }}
                    >
                      New Follower
                    </Text>
                    <View>
                      <Text
                        style={{
                          color: "rgba(255,255,255,.3)",
                        }}
                      >
                        Someone followed you
                      </Text>
                    </View>
                  </View>
                  <View>
                    <Switch
                      value={isSwitchOnFollowers}
                      onValueChange={() => onToggleSwitch(3)}
                    />
                  </View>
                </View>
              </SettingsCard>

              {/* Message notification */}
              <SettingsCard
                CardRound={8}
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
                    height: 70,
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
                      Profile Likes
                    </Text>
                    <View>
                      <Text
                        style={{
                          color: "rgba(255,255,255,.3)",
                        }}
                      >
                        Someone liked your profile
                      </Text>
                    </View>
                  </View>
                  <View>
                    <Switch
                      value={isSwitchOnProfileLike}
                      onValueChange={() => onToggleSwitch(4)}
                    />
                  </View>
                </View>
              </SettingsCard>

              {/* Match Notifications */}
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
                    Other notifications
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
                  onPress={() => NotificationToggler(3)}
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
                      IceBreakers Activities
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
                  onPress={() => NotificationToggler(4)}
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
                      Trending Bars
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
            </View>
          </ScrollView>
        </SafeAreaView>
      </LinearGradient>
      {NotificationSwitch && (
        <NotiSwitch CrdPress={CrdPress} setDialogCloserx={setDialogCloserx} />
      )}
    </>
  );
};

export default NotificationSettings;

const styles = StyleSheet.create({});
