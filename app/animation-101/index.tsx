import ThemedButton from "@/presentation/shared/ThemedButton";
import ThemedView from "@/presentation/shared/ThemedView";
import React from "react";
import { Text } from "react-native";

const Animation101Screen = () => {
  return (
    <ThemedView margin>
      <Text>Animation101Screen</Text>

      <ThemedButton className="mb-5" onPress={() => console.log("FadeIn")}>
        FadeIn
      </ThemedButton>
      <ThemedButton className="mb-5" onPress={() => console.log("FadeOut")}>
        FadeOut
      </ThemedButton>
    </ThemedView>
  );
};
export default Animation101Screen;
