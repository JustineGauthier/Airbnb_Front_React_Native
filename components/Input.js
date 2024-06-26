import { StyleSheet, TextInput } from "react-native";

import colors from "../style/colors";

export const Input = ({ state, setState, placeholder, secure }) => {
  return (
    <TextInput
      style={styles.textInput}
      secureTextEntry={secure ? true : false}
      placeholder={placeholder}
      autoCapitalize="none"
      value={state}
      onChangeText={(text) => {
        setState(text);
      }}
    />
  );
};

const styles = StyleSheet.create({
  textInput: {
    height: 40,
    borderBottomColor: colors.lightPink,
    borderBottomWidth: 2,
    width: "80%",
    fontSize: 16,
  },
});
