import { Octicons } from "@expo/vector-icons";
import React, { createRef, useEffect, useState } from "react";
import {
  BackHandler,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { TextInputMask } from "react-native-masked-text";
import {
  Button,
  MD2LightTheme as DefaultTheme,
  TextInput,
} from "react-native-paper";
import metrics from "../../theme/metrics";
import VisaSVG from "../../assets/svg/cc-visa-2.svg";
import MasterCardSVG from "../../assets/svg/master-card-9.svg";

const EditPayAcct = (props) => {
  const [CrdName, setCrdName] = useState("Daniel Dabiri");
  const [CardNumber, setCardNumber] = useState("4860396292582536");
  const [CardCVV, setCardCVV] = useState("198");
  const [CardExpiry, setCardExpiry] = useState("06/24");
  const [CardIcon, setCardIcon] = useState("");
  const detectCardType = require("card-detector-js");
  const ref = createRef();
  const refExpiry = createRef();

  //set card icon if card number - valid
  useEffect(() => {
    if (CardNumber.length) {
      let cardTyper = detectCardType(CardNumber.replace(/\D/g, ""));
      if (cardTyper !== undefined) {
        setCardIcon(cardTyper);
      } else {
        setCardIcon("");
      }
    }
  }, [CardNumber]);

  //manage back handler
  useEffect(() => {
    const backAction = () => {
      props.BackToList(true);
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );
    return () => backHandler.remove();
  }, []);
  return (
    <>
      <StatusBar
        animated={true}
        backgroundColor="#372d73"
        barStyle="light-content"
      />
      {Platform.OS !== "android" && (
        <View
          style={{
            backgroundColor: "#372d73",
            height: 25,
          }}
        ></View>
      )}
      <View style={styles.HeaderC}>
        <TouchableOpacity
          style={{
            width: 40,
            height: 40,
            position: "absolute",
            left: 10,
            alignContent: "center",
            alignItems: "center",
            justifyContent: "center",
          }}
          onPress={() => props.BackToList(true)}
        >
          <View>
            <Octicons name="chevron-left" size={26} color="#fff" />
          </View>
        </TouchableOpacity>
        <View
          style={{
            height: 40,
            alignContent: "center",
            alignItems: "center",
            textAlign: "center",
            justifyContent: "center",
            backgroundColor: "transparent",
          }}
        >
          <View
            style={{
              textAlign: "center",
              alignItems: "center",
              width: "100%",
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                fontSize: 18,
                fontWeight: "bold",
                color: "white",
                backgroundColor: "transparent",
              }}
            >
              Edit Card Info
            </Text>
          </View>
        </View>
      </View>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={{ flex: 1 }}>
            <View
              style={{
                width: metrics.screenWidth,
                height: metrics.screenHeight - 150,
              }}
            >
              <View
                style={{
                  marginTop: 20,
                  paddingHorizontal: 20,
                  marginBottom: 20,
                }}
              >
                <TextInput
                  mode="flat"
                  style={{
                    backgroundColor: "transparent",
                    color: "red",
                    paddingHorizontal: 0,
                  }}
                  underlineColor="rgba(255,255,255,.5)"
                  theme={{
                    ...DefaultTheme,
                    colors: {
                      text: "#fff",
                      placeholder: "rgba(255,255,255,.5)",
                    },
                  }}
                  label="Name"
                  value={CrdName}
                  onChangeText={(text) => setCrdName(text)}
                />
              </View>
              <View
                style={{
                  marginTop: 20,
                  paddingHorizontal: 20,
                  marginBottom: 20,
                  position: "relative",
                }}
              >
                <View
                  style={{
                    position: "absolute",
                    flexDirection: "row",
                    right: -8,
                    top: 10,
                    height: 20,
                  }}
                >
                  {CardIcon === "mastercard" && <MasterCardSVG />}
                  {CardIcon === "visa" && <VisaSVG />}
                </View>
                <TextInput
                  mode="flat"
                  style={{
                    backgroundColor: "transparent",
                    color: "red",
                    paddingHorizontal: 0,
                  }}
                  underlineColor="rgba(255,255,255,.5)"
                  theme={{
                    ...DefaultTheme,
                    colors: {
                      text: "#fff",
                      placeholder: "rgba(255,255,255,.5)",
                    },
                  }}
                  label="Card Number"
                  placeholder="0000 0000 0000 0000"
                  value={CardNumber}
                  render={(props) => (
                    <TextInputMask
                      {...props}
                      value={CardNumber}
                      options={{
                        obfuscated: false,
                        issuer: "visa-or-mastercard",
                      }}
                      type="credit-card"
                      ref={ref}
                      onChangeText={(text) => setCardNumber(text)}
                    />
                  )}
                />
              </View>
              <View
                style={{
                  flex: 1,
                  flexDirection: "row",
                }}
              >
                <View
                  style={{
                    marginTop: 20,
                    paddingHorizontal: 20,
                    marginBottom: 20,
                    width: "50%",
                  }}
                >
                  <TextInput
                    mode="flat"
                    style={{
                      backgroundColor: "transparent",
                      color: "red",
                      paddingHorizontal: 0,
                    }}
                    placeholder="MM/YY"
                    underlineColor="rgba(255,255,255,.5)"
                    theme={{
                      ...DefaultTheme,
                      colors: {
                        text: "#fff",
                        placeholder: "rgba(255,255,255,.5)",
                      },
                    }}
                    label="Expires"
                    value={CardExpiry}
                    render={(props) => (
                      <TextInputMask
                        {...props}
                        value={CardExpiry}
                        options={{
                          format: "MM/YY",
                        }}
                        type="datetime"
                        ref={refExpiry}
                        onChangeText={(text) => setCardExpiry(text)}
                      />
                    )}
                  />
                </View>
                <View
                  style={{
                    marginTop: 20,
                    paddingHorizontal: 20,
                    marginBottom: 20,
                    width: "50%",
                  }}
                >
                  <TextInput
                    mode="flat"
                    style={{
                      backgroundColor: "transparent",
                      color: "red",
                      paddingHorizontal: 0,
                    }}
                    maxLength={3}
                    keyboardType="numeric"
                    placeholder="000"
                    underlineColor="rgba(255,255,255,.5)"
                    theme={{
                      ...DefaultTheme,
                      colors: {
                        text: "#fff",
                        placeholder: "rgba(255,255,255,.5)",
                      },
                    }}
                    label="CVV"
                    value={CardCVV}
                    onChangeText={(text) =>
                      text.length < 4 ? setCardCVV(text) : false
                    }
                  />
                </View>
              </View>
            </View>
            <View
              style={{
                paddingHorizontal: 20,
                width: metrics.screenWidth,
                height: 100,
              }}
            >
              <Button
                icon=""
                style={{
                  padding: 0,
                  borderRadius: 50,
                }}
                buttonColor="#3A6BD1"
                labelStyle={{
                  paddingVertical: 6,
                }}
                mode="contained"
                onPress={() => console.log("Pressed")}
              >
                Edit Payment Method
              </Button>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </>
  );
};

export default EditPayAcct;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  HeaderC: {
    flexDirection: "row",
    width: "100%",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    height: 50,
  },
});
