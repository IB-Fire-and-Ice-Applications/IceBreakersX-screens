import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useState } from "react";
import SettingScreen from "../screens/SettingScreen";
import SplashScreen from "../screens/SplashScreen";

const Root = createNativeStackNavigator();

const RootNavigator = () => {
  const [isLoading, setisLoading] = useState(true);

  setTimeout(() => {
    setisLoading(false);
  }, 0);

  return (
    <NavigationContainer>
      <Root.Navigator
        initialRouteName="SplashScreen"
        screenOptions={{ headerShown: false }}
      >
        {isLoading && (
          <Root.Screen name="SplashScreen" component={SplashScreen} />
        )}

        {!isLoading && (
          <Root.Screen name="SettingScreen" component={SettingScreen} />
        )}
      </Root.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
