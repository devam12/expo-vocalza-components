// app/_layout.js (or app/_layout.tsx)
import { Stack } from "expo-router";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <Stack>
          <Stack.Screen
            name="index"
            options={{
              headerShown: true,
              headerTitle: "List",
            }}
          />

          <Stack.Screen
            name="screen-list/[componentId]"
            options={{
              headerShown: true,
              headerTitle: "Component Details",
            }}
          />
        </Stack>
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
}
