import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { StyleSheet } from "react-native";
import { AuthL, AuthO, AuthR, AuthV } from "../screens/Authentication";

const Auth = createNativeStackNavigator();

const AuthenticationNavigator = () => {
  return (
    <Auth.Navigator
      screenOptions={{ headerShown: false, animation: "slide_from_right" }}
    >
      <Auth.Screen name="Welcome" component={AuthO} />
      <Auth.Screen name="Login" component={AuthL} />
      <Auth.Screen name="OTP" component={AuthV} />
      <Auth.Screen name="Register" component={AuthR} />
    </Auth.Navigator>
  );
};

export default AuthenticationNavigator;

const styles = StyleSheet.create({});
