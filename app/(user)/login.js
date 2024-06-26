import { useState } from "react";
import { SafeAreaView, StyleSheet, Platform } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { router } from "expo-router";
import axios from "axios";
import Constants from "expo-constants";
import colors from "../../style/colors";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  Logo,
  Title,
  Input,
  Button,
  RedirectButton,
} from "../../components/index";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "https://lereacteur-bootcamp-api.herokuapp.com/api/airbnb/user/log_in",
        { email, password }
      );

      // console.log(response.data);
      if (response.data.token) {
        await AsyncStorage.setItem("token", response.data.token);
        router.navigate("/");
      } else {
        alert("Unknowing user, try again !");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <KeyboardAwareScrollView
      style={{ flex: 1 }}
      contentContainerStyle={{ flex: 1 }}
    >
      <SafeAreaView style={styles.mainView}>
        <Logo />
        <Title title={"Sign In"} />

        <Input state={email} setState={setEmail} placeholder={"email"} />

        <Input
          state={password}
          setState={setPassword}
          placeholder={"password"}
          secure
        />

        <Button text={"Sign in"} onPressFun={handleSubmit} />
        <RedirectButton text={"No account ? Register !"} screen={"signup"} />
      </SafeAreaView>
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
  mainView: {
    paddingTop: Platform.OS === "android" && Constants.statusBarHeight,
    backgroundColor: colors.bgColor,
    alignItems: "center",
    justifyContent: "space-around",
    flex: 1,
  },
});
