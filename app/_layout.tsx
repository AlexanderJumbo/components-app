import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import "react-native-reanimated";

import { useColorScheme } from "@/hooks/use-color-scheme";

import { useThemeColor } from "@/hooks/use-theme-color";
import ThemedView from "@/presentation/shared/ThemedView";
import React from "react";
import { Text } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import "../global.css";

export const unstable_settings = {
  anchor: "(tabs)",
};

export default function RootLayout() {
  const backgroundColor = useThemeColor({}, "background");
  const colorScheme = useColorScheme();

  return (
    <GestureHandlerRootView
      style={{ backgroundColor: backgroundColor, flex: 1 }}
    >
      <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
        <ThemedView margin>
          <Text className="mt-10 text-3xl text-light-text dark:text-dark-text">
            Hola mundo
          </Text>
        </ThemedView>
      </ThemeProvider>
    </GestureHandlerRootView>
  );
}
