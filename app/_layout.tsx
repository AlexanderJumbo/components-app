import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import "react-native-reanimated";

import { useColorScheme } from "@/hooks/use-color-scheme";

import { Text, View } from "react-native";
import "../global.css";

export const unstable_settings = {
  anchor: "(tabs)",
};

export default function RootLayout() {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <View className="bg-light-background dark:bg-dark-background">
        <Text className="mt-10 text-3xl text-light-text dark:text-dark-text">
          Hola mundo
        </Text>
      </View>
    </ThemeProvider>
  );
}
