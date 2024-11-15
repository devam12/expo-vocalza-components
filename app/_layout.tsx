// app/_layout.js (or app/_layout.tsx)
import { Stack } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <Stack>
        <Stack.Screen
          name="index"
          options={{
            headerShown: true,
            headerTitle: "List",
          }}
        />

        <Stack.Screen
          name="screen-index/[componentId]" // This is the dynamic route for each component
          options={{
            headerShown: true,
            headerTitle: "Component Details",
          }}
        />
      </Stack>
    </SafeAreaProvider>
  );
}
