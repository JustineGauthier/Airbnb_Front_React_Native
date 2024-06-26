import { StyleSheet, TextInput } from "react-native";
// Colors
import colors from "../style/colors";

export const LargeInput = ({ setState, state, placeholder }) => {
  return (
    <TextInput
      style={styles.textInput}
      placeholder={placeholder}
      value={state}
      maxLength={250}
      multiline={true}
      numberOfLines={10}
      onChangeText={(text) => {
        setState(text);
      }}
    />
  );
};

const styles = StyleSheet.create({
  textInput: {
    borderColor: colors.lightPink,
    borderWidth: 2,
    width: "80%",
    marginBottom: 30,
    marginTop: 15,
    fontSize: 16,
    height: 100,
    padding: 10,
  },
});
