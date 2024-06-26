import { useState } from "react";
import { SafeAreaView, StyleSheet, Platform } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { router } from "expo-router";
import colors from "../../style/colors";
import Constants from "expo-constants";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  Logo,
  Title,
  Input,
  Button,
  RedirectButton,
  LargeInput,
} from "../../components/index";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [description, setDescription] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "https://lereacteur-bootcamp-api.herokuapp.com/api/airbnb/user/sign_up",
        { email, username, description, password }
      );

      // console.log(response.data);
      if (response.data.token) {
        await AsyncStorage.setItem("token", response.data.token);
        router.navigate("/");
      } else {
        alert("Oups, something went wrong, try again !");
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
        <Title title={"Sign Up"} />
        <Input state={email} setState={setEmail} placeholder={"email"} />
        <Input
          state={username}
          setState={setUsername}
          placeholder={"username"}
        />
        <LargeInput
          state={description}
          setState={setDescription}
          placeholder={"describe yourself in a few words..."}
        />
        <Input
          state={password}
          setState={setPassword}
          placeholder={"password"}
          secure
        />
        <Input
          state={confirmPassword}
          setState={setConfirmPassword}
          placeholder={"confirm password"}
          secure
        />
        <Button text={"Sign up"} onPressFun={handleSubmit} />
        <RedirectButton
          text={"Already have an account ? Login !"}
          screen={"login"}
        />
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
