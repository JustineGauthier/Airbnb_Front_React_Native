import { Image, StyleSheet, View } from "react-native";
import logo from "../assets/airbnb_logo.png";

export const Logo = () => {
  return (
    <View>
      <Image source={logo} style={styles.mainLogo} resizeMode="contain" />
    </View>
  );
};

const styles = StyleSheet.create({
  mainLogo: {
    height: 100,
    width: 100,
  },
});
