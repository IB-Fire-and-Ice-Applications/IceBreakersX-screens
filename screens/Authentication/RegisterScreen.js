import { LinearGradient } from "expo-linear-gradient";
import React, { useEffect, useRef, useState } from "react";
import {
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  BackHandler,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import {
  Button,
  MD2LightTheme as DefaultTheme,
  RadioButton,
  Switch,
} from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import AuthTitle from "../../components/Auth/AuthTitle";
import AuthHeader from "../../components/Headers/AuthHeader";
import metrics from "../../theme/metrics";
import { FloatingLabelInput } from "react-native-floating-label-input";
import { AntDesign } from "@expo/vector-icons";

const RegisterScreen = ({ navigation: { goBack } }) => {
  const [UserPNumber, setUserPNumber] = useState("");
  const [UserFname, setUserFname] = useState("");
  const [UserLname, setUserLname] = useState("");
  const [Username, setUsername] = useState("");
  const [UserAbout, setUserAbout] = useState("");
  const [UserDobDay, setUserDobDay] = useState("");
  const [UserDobMnth, setUserDobMnth] = useState("");
  const [UserDobYear, setUserDobYear] = useState("");
  const [UserFullDb, setUserFullDb] = useState("");
  const [UserGender, setUserGender] = useState("");
  const [UserSexuality, setUserSexuality] = useState("");

  const [isSwitchGenderOn, setIsSwitchGenderOn] = useState(false);
  const onToggleSwitchGender = () => setIsSwitchGenderOn(!isSwitchGenderOn);

  const [BtnNext, setBtnNext] = useState(false);
  const [tStage, settStage] = useState(3);
  const [currStage, setcurrStage] = useState(0);
  const [dobAlert, setdobAlert] = useState(true);

  const dbMonthRef = useRef();
  const dbYearRef = useRef();

  //Enable next button & fill field
  const setFieldValue = (fieldType, fieldValue, fieldFunct) => {
    let fieldCont = true;
    if (fieldValue.length) {
      setBtnNext(true);
    } else {
      setBtnNext(false);
    }
    if (fieldCont) {
      fieldFunct(fieldValue);
    }
  };

  const setFieldValueDB = () => {
    if (UserDobDay.length && UserDobMnth.length && UserDobYear.length) {
      setUserFullDb(UserDobDay + "/" + UserDobMnth + "/" + UserDobYear);
      setBtnNext(true);
    } else {
      setUserFullDb("");
      setBtnNext(false);
    }

    // if (UserDobYear != "") {
    //   if (new Date().getFullYear() - parseInt(UserDobYear) < 18) {
    //     setdobAlert(true);
    //   } else {
    //     setdobAlert(false);
    //   }
    // } else {
    //   setdobAlert(false);
    // }
  };

  //manage back handler
  useEffect(() => {
    const backAction = () => {
      if (currStage > 0) {
        setBtnNext(true);
        setcurrStage(currStage - 1);
      } else {
        goBack();
      }
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );
    return () => backHandler.remove();
  }, [currStage]);

  const BtnEnabler = (stageVar) => {
    if (stageVar.length > 0) {
      setBtnNext(true);
    }
  };

  //   Form pagination controller
  const frmPaginator = (pgType) => {
    setBtnNext(false);
    if (pgType === "next") {
      let NextCurrStage = currStage + 1;
      setcurrStage(NextCurrStage);
      if (NextCurrStage === 1) {
        BtnEnabler(UserFname);
      }
      if (NextCurrStage === 2) {
        console.log(UserFullDb);
        BtnEnabler(UserFullDb);
      }
    } else {
      if (pgType === "back") {
        if (currStage > 0) {
          setBtnNext(true);
          setcurrStage(currStage - 1);
        } else {
          goBack();
        }
      }
    }
  };

  return (
    <LinearGradient
      colors={["#3C0D3B", "#3C0D3B"]}
      location={[0, 1]}
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
        <AuthHeader frmPaginator={frmPaginator} />
        <KeyboardAvoidingView
          {...(Platform.OS === "ios" ? { behavior: "padding" } : {})}
          style={{
            flex: 1,
            paddingHorizontal: 24,
          }}
        >
          <ScrollView
            style={{
              paddingHorizontal: 10,
              paddingTop: 70,
            }}
          >
            {/* Phone Number */}
            <View
              style={{
                display: currStage === 0 ? "flex" : "none",
              }}
            >
              <AuthTitle title="What's your phone number?" desc="" />
              <View
                style={{
                  marginTop: 20,
                }}
              >
                <View
                  style={{
                    marginTop: 20,
                    marginBottom: 20,
                  }}
                >
                  <FloatingLabelInput
                    label="Enter phone number"
                    keyboardType="number-pad"
                    containerStyles={styles.inputContainerStyles}
                    customLabelStyles={styles.inputCustomLabelStyles}
                    inputStyles={styles.inputStyles}
                    labelStyles={styles.inputLabelStyles}
                    keyboardAppearance={"dark"}
                    value={UserPNumber}
                    onChangeText={(value) => {
                      setFieldValue(1, value, setUserPNumber);
                    }}
                  />
                </View>
              </View>
            </View>

            {/* Full Name */}
            <View
              style={{
                display: currStage === 1 ? "flex" : "none",
              }}
            >
              <AuthTitle
                contPos="left"
                title="What's your name?"
                desc="You won't be able to change this later."
              />
              <View
                style={{
                  marginTop: 20,
                }}
              >
                <View
                  style={{
                    marginTop: 20,
                    marginBottom: 20,
                  }}
                >
                  <FloatingLabelInput
                    label="Enter your first name"
                    containerStyles={styles.inputContainerStyles}
                    customLabelStyles={styles.inputCustomLabelStyles}
                    inputStyles={styles.inputStyles}
                    labelStyles={styles.inputLabelStyles}
                    value={UserFname}
                    keyboardAppearance={"dark"}
                    onChangeText={(value) => {
                      setFieldValue(2, value, setUserFname);
                    }}
                  />
                </View>
                <View
                  style={{
                    marginTop: 0,
                    marginBottom: 20,
                  }}
                >
                  <FloatingLabelInput
                    label="Enter your last name"
                    containerStyles={styles.inputContainerStyles}
                    customLabelStyles={styles.inputCustomLabelStyles}
                    inputStyles={styles.inputStyles}
                    labelStyles={styles.inputLabelStyles}
                    value={UserLname}
                    keyboardAppearance={"dark"}
                    onChangeText={(value) => {
                      setFieldValue(2, value, setUserLname);
                    }}
                  />
                </View>
              </View>
            </View>

            {/* User Name */}
            <View
              style={{
                display: currStage === 2 ? "flex" : "none",
              }}
            >
              <AuthTitle
                contPos="left"
                title="What's your username?"
                desc="You won't be able to change this later."
              />
              <View
                style={{
                  marginTop: 20,
                }}
              >
                <View
                  style={{
                    marginTop: 0,
                    marginBottom: 20,
                  }}
                >
                  <FloatingLabelInput
                    label="Enter your username"
                    containerStyles={styles.inputContainerStyles}
                    customLabelStyles={styles.inputCustomLabelStyles}
                    inputStyles={styles.inputStyles}
                    labelStyles={styles.inputLabelStyles}
                    value={Username}
                    keyboardAppearance={"dark"}
                    onChangeText={(value) => {
                      setFieldValue(2, value, setUsername);
                    }}
                  />
                </View>
              </View>
            </View>

            {/* Birthday */}
            <View
              style={{
                display: currStage === 3 ? "flex" : "none",
              }}
            >
              <AuthTitle
                contPos="left"
                title="When's your birthday?"
                desc="Only your age will be visible to others."
              />
              <View
                style={{
                  marginTop: 20,
                }}
              >
                <View
                  style={{
                    marginTop: 20,
                    marginBottom: 20,
                  }}
                >
                  <View
                    style={{
                      flexDirection: "row",
                    }}
                  >
                    <View
                      style={{
                        width: 95,
                        marginRight: 12,
                      }}
                    >
                      <FloatingLabelInput
                        label="Day"
                        mask="DD"
                        hint="DD"
                        hintTextColor="rgba(235,192,234,.3)"
                        containerStyles={styles.inputContainerStylesSingle}
                        keyboardType="numeric"
                        maxLength={2}
                        keyboardAppearance={"dark"}
                        customLabelStyles={styles.inputCustomLabelStylesSingle}
                        inputStyles={styles.inputStylesSingle}
                        labelStyles={styles.inputLabelStylesSingle}
                        returnKeyType="next"
                        onSubmitEditing={() => {
                          dbMonthRef.current.focus();
                        }}
                        blurOnSubmit={false}
                        value={UserDobDay}
                        onChangeText={(value) => {
                          setUserDobDay(value);
                          setFieldValueDB();
                        }}
                      />
                    </View>
                    <View
                      style={{
                        width: 95,
                        marginRight: 12,
                      }}
                    >
                      <FloatingLabelInput
                        label="Month"
                        mask="MM"
                        hint="MM"
                        ref={dbMonthRef}
                        hintTextColor="rgba(235,192,234,.3)"
                        keyboardType="numeric"
                        keyboardAppearance={"dark"}
                        containerStyles={styles.inputContainerStylesSingle}
                        customLabelStyles={styles.inputCustomLabelStylesSingle}
                        inputStyles={styles.inputStylesSingle}
                        labelStyles={styles.inputLabelStylesSingle}
                        returnKeyType="next"
                        maxLength={2}
                        onSubmitEditing={() => {
                          dbYearRef.current.focus();
                        }}
                        blurOnSubmit={false}
                        value={UserDobMnth}
                        onChangeText={(value) => {
                          setUserDobMnth(value);
                          setFieldValueDB();
                        }}
                      />
                    </View>
                    <View
                      style={{
                        width: 95,
                      }}
                    >
                      <FloatingLabelInput
                        label="Year"
                        mask="YYYY"
                        hint="YYYY"
                        hintTextColor="rgba(235,192,234,.3)"
                        containerStyles={styles.inputContainerStylesSingle}
                        keyboardType="numeric"
                        keyboardAppearance={"dark"}
                        ref={dbYearRef}
                        maxLength={4}
                        customLabelStyles={styles.inputCustomLabelStylesSingle}
                        inputStyles={styles.inputStylesSingle}
                        labelStyles={styles.inputLabelStylesSingle}
                        value={UserDobYear}
                        onChangeText={(value) => {
                          setUserDobYear(value);
                          setFieldValueDB();
                        }}
                      />
                    </View>
                  </View>
                  {dobAlert && (
                    <View
                      style={{
                        flex: 1,
                        marginTop: 15,
                      }}
                    >
                      <Text
                        style={{
                          color: metrics.mutedText,
                        }}
                      >
                        You must be 18 or older to use IceBreaker
                      </Text>
                    </View>
                  )}
                </View>
              </View>
            </View>

            {/* Gender */}
            <View
              style={{
                display: currStage === 4 ? "flex" : "none",
              }}
            >
              <AuthTitle
                contPos="left"
                title="What's your gender?"
                desc="Select which best describes you."
              />

              <View
                style={{
                  marginTop: 20,
                }}
              >
                <View
                  style={{
                    flex: 1,
                    height: 50,
                    justifyContent: "center",
                  }}
                >
                  <Switch
                    style={{
                      position: "absolute",
                      zIndex: 2,
                    }}
                    value={isSwitchGenderOn}
                    onValueChange={onToggleSwitchGender}
                  />
                  <Text
                    style={{
                      marginLeft: 60,
                      fontSize: 16,
                      position: "relative",
                      zIndex: 1,
                      color: "#fff",
                    }}
                  >
                    Show my gender on my profile
                  </Text>
                </View>
                <View
                  style={{
                    marginTop: 20,
                    marginBottom: 20,
                  }}
                >
                  <View>
                    <RadioButton.Group
                      onValueChange={(newValue) => setUserGender(newValue)}
                      value={UserGender}
                    >
                      <View
                        style={{
                          paddingHorizontal: 0,
                        }}
                      >
                        <RadioButton.Item
                          label="Woman"
                          uncheckedColor="#fff"
                          style={{
                            height: 60,
                            backgroundColor:
                              UserGender == "uwoman"
                                ? "rgba(255, 255, 255, 0.3)"
                                : "rgba(255, 255, 255, 0.1)",
                            borderRadius: 10,
                            marginBottom: 20,
                          }}
                          labelStyle={{
                            color: "#fff",
                          }}
                          value="uwoman"
                        />

                        <RadioButton.Item
                          label="Man"
                          uncheckedColor="#fff"
                          style={{
                            height: 60,
                            backgroundColor:
                              UserGender == "uman"
                                ? "rgba(255, 255, 255, 0.3)"
                                : "rgba(255, 255, 255, 0.1)",
                            borderRadius: 10,
                            marginBottom: 20,
                          }}
                          labelStyle={{
                            color: "#fff",
                          }}
                          value="uman"
                        />

                        <RadioButton.Item
                          label="Nonbinary"
                          uncheckedColor="#fff"
                          style={{
                            height: 60,
                            backgroundColor:
                              UserGender == "ubinary"
                                ? "rgba(255, 255, 255, 0.3)"
                                : "rgba(255, 255, 255, 0.1)",
                            borderRadius: 10,
                          }}
                          labelStyle={{
                            color: "#fff",
                          }}
                          value="ubinary"
                        />
                      </View>
                    </RadioButton.Group>
                  </View>
                </View>
              </View>
            </View>

            {/* Sexuality */}
            <View
              style={{
                display: currStage === 5 ? "flex" : "none",
              }}
            >
              <AuthTitle
                contPos="left"
                title="What's your sexuality?"
                desc="Pick which best describes you."
              />

              <View
                style={{
                  marginTop: 20,
                }}
              >
                <View
                  style={{
                    marginTop: 20,
                    marginBottom: 20,
                  }}
                >
                  <View>
                    <RadioButton.Group
                      onValueChange={(newValue) => setUserSexuality(newValue)}
                      value={UserSexuality}
                    >
                      <View
                        style={{
                          paddingHorizontal: 0,
                        }}
                      >
                        <RadioButton.Item
                          label="Straight"
                          uncheckedColor="#fff"
                          style={{
                            height: 60,
                            backgroundColor:
                              UserSexuality == "uStraight"
                                ? "rgba(255, 255, 255, 0.3)"
                                : "rgba(255, 255, 255, 0.1)",
                            borderRadius: 10,
                            marginBottom: 20,
                          }}
                          labelStyle={{
                            color: "#fff",
                          }}
                          value="uStraight"
                        />

                        <RadioButton.Item
                          label="Gay"
                          uncheckedColor="#fff"
                          style={{
                            height: 60,
                            backgroundColor:
                              UserSexuality == "uGay"
                                ? "rgba(255, 255, 255, 0.3)"
                                : "rgba(255, 255, 255, 0.1)",
                            borderRadius: 10,
                            marginBottom: 20,
                          }}
                          labelStyle={{
                            color: "#fff",
                          }}
                          value="uGay"
                        />

                        <RadioButton.Item
                          label="Bi-Sexual"
                          uncheckedColor="#fff"
                          style={{
                            height: 60,
                            backgroundColor:
                              UserSexuality == "uBi-Sexual"
                                ? "rgba(255, 255, 255, 0.3)"
                                : "rgba(255, 255, 255, 0.1)",
                            borderRadius: 10,
                            marginBottom: 20,
                          }}
                          labelStyle={{
                            color: "#fff",
                          }}
                          value="uBi-Sexual"
                        />

                        <RadioButton.Item
                          label="Others"
                          uncheckedColor="#fff"
                          style={{
                            height: 60,
                            backgroundColor:
                              UserSexuality == "Others"
                                ? "rgba(255, 255, 255, 0.3)"
                                : "rgba(255, 255, 255, 0.1)",
                            borderRadius: 10,
                          }}
                          labelStyle={{
                            color: "#fff",
                          }}
                          value="uOthers"
                        />
                      </View>
                    </RadioButton.Group>
                  </View>
                </View>
              </View>
            </View>

            {/* More About you */}
            <View
              style={{
                display: currStage === 6 ? "flex" : "none",
              }}
            >
              <AuthTitle
                contPos="left"
                title="Add more about you?"
                desc="Other people looking for a relationship love to see a bio that shows who you are."
              />
              <View
                style={{
                  marginTop: 20,
                }}
              >
                <View
                  style={{
                    marginTop: 20,
                    marginBottom: 20,
                  }}
                >
                  <FloatingLabelInput
                    label="Enter more about you"
                    containerStyles={styles.inputContainerStylesTextarea}
                    customLabelStyles={styles.inputCustomLabelStylesTextarea}
                    inputStyles={styles.inputStyles}
                    labelStyles={styles.inputLabelStylesTextarea}
                    value={UserAbout}
                    staticLabel={true}
                    multiline={true}
                    keyboardAppearance={"dark"}
                    onChangeText={(value) => {
                      setFieldValue(4, value, setUserAbout);
                    }}
                  />
                </View>
              </View>
            </View>

            {/* Profile Photo you */}
            <View
              style={{
                display: currStage === 7 ? "flex" : "none",
              }}
            >
              <AuthTitle
                contPos="center"
                title="You're almost done"
                desc="Add a profile photo. You can change these later"
              />
              <View
                style={{
                  marginTop: 20,
                }}
              >
                <View
                  style={{
                    marginTop: 20,
                    marginBottom: 20,
                    alignContent: "center",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <TouchableOpacity
                    style={{
                      backgroundColor: "rgba(235,192,234,.1)",
                      width: 150,
                      height: 150,
                      borderRadius: 999,
                      alignItems: "center",
                      justifyContent: "center",
                      textAlign: "center",
                    }}
                  >
                    <View>
                      <AntDesign
                        name="plus"
                        size={36}
                        color="rgba(255,255,255,.8)"
                      />
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </ScrollView>
          <View style={styles.nextBtnContainer}>
            <TouchableOpacity
              disabled={!BtnNext}
              onPress={() => frmPaginator("next")}
              style={{
                width: metrics.screenWidth,
                paddingHorizontal: 30,
              }}
            >
              <Button
                mode="contained"
                elevation={2}
                disabled={!BtnNext}
                buttonColor="rgba(255,255,255,.8)"
                style={{
                  borderRadius: 60,
                  padding: 0,
                }}
                contentStyle={{
                  height: 55,
                }}
                labelStyle={{
                  fontSize: 16,
                  color: `${!BtnNext ? "rgba(255,255,255,.4)" : "#000"}`,
                }}
              >
                Next
              </Button>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  nextBtnContainer: {
    height: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  inputContainerStyles: {
    backgroundColor: "rgba(235,192,234,.1)",
    paddingHorizontal: 25,
    borderRadius: 30,
    minHeight: 65,
    paddingTop: 7,
    borderWidth: 2,
    borderColor: "rgba(235,192,234,.4)",
  },
  inputContainerStylesSingle: {
    backgroundColor: "rgba(235,192,234,.1)",
    borderRadius: 30,
    minHeight: 65,
    paddingHorizontal: 17,
    paddingTop: 7,
    borderWidth: 2,
    borderColor: "rgba(235,192,234,.4)",
  },
  inputCustomLabelStylesSingle: {
    colorFocused: "rgba(235,192,234,.6)",
    colorBlurred: "rgba(235,192,234,.6)",
    topFocused: -12,
  },
  inputCustomLabelStyles: {
    colorFocused: "rgba(235,192,234,.6)",
    colorBlurred: "rgba(235,192,234,.6)",
    topFocused: -12,
  },
  inputStyles: {
    color: "#fff",
    fontSize: 17,
  },
  inputStylesSingle: {
    color: "#fff",
    fontSize: 17,
    textAlign: "left",
  },
  inputLabelStylesSingle: {
    top: Platform.OS === "ios" ? -4 : 1,
    width: "100%",
    textAlign: "left",
    fontSize: 16,
  },
  inputLabelStyles: {
    top: Platform.OS === "ios" ? -4 : 1,
    paddingLeft: 0,
    fontSize: 16,
  },
  inputContainerStylesTextarea: {
    backgroundColor: "rgba(235,192,234,.1)",
    paddingHorizontal: 20,
    borderRadius: 30,
    minHeight: 90,
    paddingTop: 45,
    paddingBottom: 105,
    borderWidth: 2,
    borderColor: "rgba(235,192,234,.4)",
  },
  inputCustomLabelStylesTextarea: {
    colorFocused: "rgba(235,192,234,.6)",
    colorBlurred: "rgba(235,192,234,.6)",
    topFocused: -12,
  },
  inputLabelStylesTextarea: {
    top: Platform.OS === "ios" ? -4 : 1,
    paddingLeft: 0,
    marginTop: 30,
    fontSize: 16,
  },
});
