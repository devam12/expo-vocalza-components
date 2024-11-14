// app/_layout.js (or app/_layout.tsx)
import { Stack } from "expo-router";

export default function ScreenLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="switch"
        options={{
          headerShown: false,
          headerTitle: "Switch ",
          headerBackVisible:true
        }}
      />
    </Stack>
  );
}
