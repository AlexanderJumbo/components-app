import ThemedCard from "@/presentation/shared/ThemedCard";
import ThemedSwitch from "@/presentation/shared/ThemedSwitch";
import ThemedView from "@/presentation/shared/ThemedView";
import { useState } from "react";
// import { useColorScheme } from "react-native";
import { useColorScheme } from "nativewind";

const ThemesScreen = () => {
  //const theme = useColorScheme();
  const { colorScheme, setColorScheme } = useColorScheme();
  const [darkModeSettings, setDarkModeSettings] = useState({
    darkMode: colorScheme === "dark",
    systemMode: false,
  });

  const setDarkMode = (value: boolean) => {
    setColorScheme(value ? "dark" : "light");

    setDarkModeSettings({
      darkMode: value,
      systemMode: false,
    });
  };

  const setSystemMode = (value: boolean) => {
    setDarkModeSettings({
      darkMode: darkModeSettings.darkMode, //* -> false
      systemMode: value,
    });
  };

  return (
    <ThemedView margin>
      <ThemedCard className="mt-5">
        <ThemedSwitch
          text="Dark Mode"
          className="mb-5"
          value={darkModeSettings.darkMode}
          onValueChange={setDarkMode}
        />
        <ThemedSwitch
          text="System Mode"
          value={darkModeSettings.systemMode}
          onValueChange={setSystemMode}
        />
      </ThemedCard>
    </ThemedView>
  );
};
export default ThemesScreen;
