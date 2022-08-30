import React from "react";
import {
  ImageBackground,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import metrics from "../../theme/metrics";
import { LinearGradient } from "expo-linear-gradient";
import { Button } from "react-native-paper";

const OnboardScreen = ({ navigation }) => {
  return (
    <>
      <StatusBar hidden={true} />
      <View
        style={{
          width: metrics.screenWidth,
          height: metrics.screenHeight,
          flex: 1,
          backgroundColor: "#400A3A",
        }}
      >
        <ImageBackground
          source={require("../../assets/backgrounds/bg-22.jpg")}
          style={styles.ImageBackground}
          resizeMode="cover"
        >
          <LinearGradient
            colors={["rgba(64, 10, 58, .4)", "rgba(0,0,0,.5)", "rgba(0,0,0,1)"]}
            locations={[0.3, 0.5, 1]}
            style={{
              flex: 1,
              width: metrics.screenWidth,
            }}
          >
            <View
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                zIndex: 1,
                flex: 1,
                justifyContent: "space-between",
                alignContent: "center",
                alignItems: "center",
              }}
            >
              <View
                style={{
                  paddingHorizontal: 40,
                  alignItems: "center",
                  marginBottom: 50,
                }}
              >
                <Text
                  style={{
                    fontSize: 32,
                    color: "#fff",
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  Share your greatest moments
                </Text>
              </View>
              <View
                style={{
                  flex: 1,
                  width: metrics.screenWidth,
                  paddingHorizontal: 30,
                }}
              >
                <TouchableOpacity
                  style={{
                    marginBottom: 14,
                  }}
                >
                  <Button
                    mode="contained"
                    elevation={2}
                    buttonColor="#1982ef"
                    icon="facebook"
                    style={{
                      borderRadius: 60,
                      padding: 0,
                    }}
                    contentStyle={{
                      height: 50,
                    }}
                    labelStyle={{
                      fontSize: 18,
                      color: "#fff",
                    }}
                  >
                    <Text>Connect with Facebook</Text>
                  </Button>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    marginBottom: 14,
                  }}
                >
                  <Button
                    mode="contained"
                    elevation={2}
                    buttonColor="#f14436"
                    icon="google"
                    style={{
                      borderRadius: 60,
                      padding: 0,
                    }}
                    contentStyle={{
                      height: 50,
                    }}
                    labelStyle={{
                      fontSize: 16,
                      color: "#fff",
                    }}
                  >
                    Connect with Google
                  </Button>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => navigation.navigate("Register")}
                >
                  <Button
                    mode="contained"
                    elevation={2}
                    buttonColor="rgba(255,255,255,.2)"
                    style={{
                      borderRadius: 60,
                      padding: 0,
                    }}
                    contentStyle={{
                      height: 50,
                    }}
                    labelStyle={{
                      fontSize: 16,
                      color: "#fff",
                    }}
                  >
                    Use cell phone number
                  </Button>
                </TouchableOpacity>

                <View
                  style={{
                    marginTop: 30,
                    height: 50,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <TouchableWithoutFeedback
                    style={{
                      flex: 1,
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <TouchableOpacity
                      style={{
                        paddingLeft: 10,
                        position: "relative",
                        marginTop: 0,
                        flex: 1,
                        flexDirection: "row",
                      }}
                    >
                      <Text
                        style={{
                          color: "rgba(255,255,255,.7)",
                        }}
                      >
                        Already have an account ?
                      </Text>
                      <Text
                        style={{
                          color: "#fff",
                          marginLeft: 4,
                        }}
                      >
                        Sign In
                      </Text>
                    </TouchableOpacity>
                  </TouchableWithoutFeedback>
                </View>
              </View>
            </View>
          </LinearGradient>
        </ImageBackground>
      </View>
    </>
  );
};

export default OnboardScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  ImageBackground: {
    width: metrics.screenWidth,
    height: metrics.screenHeight,
    alignItems: "center",
  },
});
