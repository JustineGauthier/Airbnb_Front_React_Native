import { StyleSheet, Text, Pressable } from "react-native";
import { router } from "expo-router";

import colors from "../style/colors";

export const RedirectButton = ({ text, screen }) => {
  return (
    <Pressable
      styles={styles.button}
      onPress={() => {
        router.navigate(screen);
      }}
    >
      <Text style={styles.button}>{text}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {},
  text: {
    color: colors.grey,
  },
});
