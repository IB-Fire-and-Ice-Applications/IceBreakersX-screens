import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import { StyleSheet } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { SHome, SLanguage, SPayment, SProfile } from "../components/PSettings";
import NotificationSettings from "../components/PSettings/NotificationSett/NotificationSettings";

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
          name="SLanguage"
          screenOptions={{ presentation: "modal" }}
          component={SLanguage}
        />

        <Stack.Screen
          name="NSettings"
          screenOptions={{ presentation: "modal" }}
          component={NotificationSettings}
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
