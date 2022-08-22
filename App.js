import { GestureHandlerRootView } from "react-native-gesture-handler";
import { TailwindProvider } from "tailwindcss-react-native";
import RootNavigator from "./navigation/RootNavigator";
import {
  MD3LightTheme as DefaultTheme,
  Provider as PaperProvider,
} from "react-native-paper";
import { SafeAreaProvider } from "react-native-safe-area-context";

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "#82ABFE",
    secondary: "yellow",
  },
};
export default function App() {
  return (
    <GestureHandlerRootView
      style={{
        flex: 1,
      }}
    >
      <SafeAreaProvider>
        <PaperProvider theme={theme}>
          <TailwindProvider>
            <RootNavigator />
          </TailwindProvider>
        </PaperProvider>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}
