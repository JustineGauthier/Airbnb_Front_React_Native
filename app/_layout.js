import { Stack } from "expo-router";

const RootLayout = () => {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      {/* <Stack.Screen name="(user)" /> */}
      {/* <Stack.Screen name="[id]" /> */}
    </Stack>
  );
};

export default RootLayout;
