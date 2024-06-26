import { StyleSheet, Pressable, Text } from "react-native";

import colors from "../style/colors";

export const Button = ({ text, onPressFun }) => {
  return (
    <Pressable onPress={onPressFun} style={styles.button}>
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    height: 60,
    width: "50%",
    alignItems: "center",
    justifyContent: "center",
    borderColor: colors.pink,
    borderWidth: 3,
    borderRadius: 60,
  },
  text: {
    color: colors.grey,
    fontWeight: "500",
    fontSize: 18,
  },
});
