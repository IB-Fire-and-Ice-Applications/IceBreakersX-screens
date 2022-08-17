import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import { StyleSheet } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { SHome, SPayment, SProfile } from "../components/PSettings";

const Stack = createNativeStackNavigator();

const SettingScreen = () => {
  return (
    <SafeAreaProvider
      style={{
        backgroundColor: "#3C0D3B",
      }}
    >
      <Stack.Navigator
        screenOptions={{ headerShown: false, animation: "slide_from_right" }}
      >
        <Stack.Screen name="SHome" component={SHome} />
        <Stack.Screen
          name="SProfile"
          screenOptions={{ presentation: "modal" }}
          component={SProfile}
        />
        <Stack.Screen
          name="SPayment"
          screenOptions={{ presentation: "modal" }}
          component={SPayment}
        />
      </Stack.Navigator>
    </SafeAreaProvider>
  );
};

export default SettingScreen;

const styles = StyleSheet.create({});
