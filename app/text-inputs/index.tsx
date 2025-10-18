import ThemedCard from "@/presentation/shared/ThemedCard";
import ThemedText from "@/presentation/shared/ThemedText";
import ThemedTextInput from "@/presentation/shared/ThemedTextInput";
import ThemedView from "@/presentation/shared/ThemedView";
import { useState } from "react";
import { KeyboardAvoidingView, Platform, ScrollView } from "react-native";

const TextInputsScreen = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const isIOS = Platform.OS === "ios";

  return (
    <KeyboardAvoidingView behavior={isIOS ? "height" : undefined}>
      <ScrollView>
        <ThemedView margin>
          <ThemedCard className="mb-5">
            <ThemedTextInput
              placeholder="Nombre Completo"
              autoCapitalize="words"
              autoCorrect={false}
              onChangeText={(text) => setForm({ ...form, name: text })}
            />
            <ThemedTextInput
              placeholder="Correo electrónico"
              autoCorrect={false}
              keyboardType="email-address"
              onChangeText={(text) => setForm({ ...form, email: text })}
            />
            <ThemedTextInput
              placeholder="Teléfono"
              autoCorrect={false}
              keyboardType="phone-pad"
              onChangeText={(text) => setForm({ ...form, phone: text })}
            />
          </ThemedCard>
          <ThemedCard className="my-2">
            <ThemedText>{JSON.stringify(form, null, 2)}</ThemedText>
          </ThemedCard>
          <ThemedCard className="my-2">
            <ThemedText>{JSON.stringify(form, null, 2)}</ThemedText>
          </ThemedCard>
          <ThemedCard className="my-2">
            <ThemedText>{JSON.stringify(form, null, 2)}</ThemedText>
          </ThemedCard>
          <ThemedCard className="my-2">
            <ThemedText>{JSON.stringify(form, null, 2)}</ThemedText>
          </ThemedCard>
          <ThemedCard className="my-2">
            <ThemedText>{JSON.stringify(form, null, 2)}</ThemedText>
          </ThemedCard>
          <ThemedCard className="my-2">
            <ThemedText>{JSON.stringify(form, null, 2)}</ThemedText>
          </ThemedCard>
          <ThemedCard className="my-2">
            <ThemedText>{JSON.stringify(form, null, 2)}</ThemedText>
          </ThemedCard>
          <ThemedCard
            style={{
              marginBottom: isIOS ? 100 : 10,
            }}
          >
            <ThemedTextInput
              placeholder="Teléfono"
              autoCorrect={false}
              keyboardType="phone-pad"
              onChangeText={(text) => setForm({ ...form, phone: text })}
            />
          </ThemedCard>
        </ThemedView>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
export default TextInputsScreen;
