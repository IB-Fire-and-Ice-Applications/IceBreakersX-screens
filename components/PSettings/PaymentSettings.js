import { Octicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import React, { useEffect, useState } from "react";
import { BackHandler, ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import PaypalSVGIc from "../../assets/svg/paypal-26.svg";
import BitcoinSVG from "../../assets/svg/wrapped-bitcoin-wbtc-icon.svg";
import metrics from "../../theme/metrics";
import SettingsCard from "../Card/SettingsCard";
import Header from "../Header";
import PaymentOptContent from "./PaymentOptContent";

const PaymentSettings = ({ navigation: { goBack } }) => {
  const [HeaderBack, setHeaderBack] = useState(false);
  const [IsOpenSchemeMode, setIsOpenSchemeMode] = useState(false);
  const [DialogCloserx, setDialogCloserx] = useState(false);
  const [PInteract, setPInteract] = useState(0);
  const [DialogTitle, setDialogTitle] = useState("");
  const [CrdPress, setCrdPress] = useState(0);

  const DialogTitleDesc = [
    "",
    "Credit/Debit Card",
    "Paypal Account",
    "Crypto Currency",
  ];

  useEffect(() => {
    if (DialogCloserx) {
      setCrdPress(0);
      setIsOpenSchemeMode(false);
    }
  }, [DialogCloserx]);

  // useEffect(() => {
  //   const backAction = () => {
  //     if (!DialogCloserx) {
  //       if (PInteract === 0) {
  //         return false;
  //       } else {
  //         setDialogCloserx(true);
  //         return true;
  //       }
  //     } else {
  //       return false;
  //     }
  //   };
  //   const backHandler = BackHandler.addEventListener(
  //     "hardwareBackPress",
  //     backAction
  //   );

  //   return () => backHandler.remove();
  // }, [DialogCloserx, PInteract]);

  useEffect(() => {
    if (CrdPress > 0) {
      if (DialogTitleDesc[CrdPress]) {
        setDialogTitle(DialogTitleDesc[CrdPress]);
      }
      setPInteract(1);
      setDialogCloserx(false);
      setIsOpenSchemeMode(true);
    }
  }, [CrdPress]);

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
          <Header
            BackHeader={true}
            BackNavigator={setHeaderBack}
            title="Manage payment account"
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
                  You have no saved cards or crypto account.
                </Text>
              </View>
              {/* Credit/debit Control */}
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
                    alignItems: "center",
                    paddingHorizontal: 16,
                  }}
                >
                  <View
                    style={{
                      width: 40,
                      height: 40,
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Octicons
                      name="credit-card"
                      size={30}
                      color="rgba(255,255,255,.6)"
                    />
                    {/* <Image
                  source={CreditIcon}
                  style={{
                    width: 40,
                    height: 40,
                  }}
                /> */}
                  </View>
                  <View
                    style={{
                      marginLeft: 15,
                      flexDirection: "row",
                    }}
                  >
                    <Text
                      style={{
                        color: "#fff",
                        fontSize: 17,
                      }}
                    >
                      Credit/Debit Card
                    </Text>
                  </View>
                </View>
              </SettingsCard>

              {/* Paypal Control */}
              <SettingsCard
                CardRound={8}
                touchableAction={true}
                CardUid={2}
                PressUAction={setCrdPress}
              >
                <View
                  style={{
                    flex: 1,
                    flexDirection: "row",
                    alignItems: "center",
                    paddingHorizontal: 16,
                  }}
                >
                  <View
                    style={{
                      width: 40,
                      height: 40,
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <View
                      style={{
                        flex: 1,
                        width: "80%",
                        height: "80%",
                      }}
                    >
                      <PaypalSVGIc />
                    </View>
                  </View>
                  <View
                    style={{
                      marginLeft: 15,
                      flexDirection: "row",
                    }}
                  >
                    <Text
                      style={{
                        color: "#fff",
                        fontSize: 17,
                      }}
                    >
                      Paypal
                    </Text>
                  </View>
                </View>
              </SettingsCard>

              {/* Bitcoin Control */}
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
                    alignItems: "center",
                    paddingHorizontal: 16,
                  }}
                >
                  <View
                    style={{
                      width: 40,
                      height: 40,
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <BitcoinSVG
                      style={{
                        color: "#fff",
                      }}
                    />
                  </View>
                  <View
                    style={{
                      marginLeft: 15,
                      flexDirection: "row",
                    }}
                  >
                    <Text
                      style={{
                        color: "#fff",
                        fontSize: 17,
                      }}
                    >
                      Crypto Currency
                    </Text>
                  </View>
                </View>
              </SettingsCard>
            </View>
          </ScrollView>
        </SafeAreaView>
      </LinearGradient>

      {IsOpenSchemeMode && (
        <PaymentOptContent
          setDialogCloserx={setDialogCloserx}
          DialogTitle={DialogTitle}
          AcctType={CrdPress}
        />
      )}
    </>
  );
};

export default PaymentSettings;

const styles = StyleSheet.create({});
