import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState, useEffect } from "react";
import { ActivityIndicator, SafeAreaView, Text } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import colors from "../style/colors";
import { router } from "expo-router";
import axios from "axios";
import { Logo, RedirectButton } from "../components/index";

export default HomePage = async () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const isAuth = async () => {
      console.log("coucou");

      const token = await AsyncStorage.getItem("token");
      if (!token) {
        router.replace("login");
        alert("You're not connected!");
      } else {
        setLoading(false);
      }

      try {
        const response = await axios.get(
          "https://lereacteur-bootcamp-api.herokuapp.com/api/airbnb/rooms"
        );

        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    isAuth();
  }, []);

  if (loading) {
    return (
      <ActivityIndicator
        size="large"
        color={colors.pink}
        style={{ marginTop: 100 }}
      />
    );
  }

  return (
    <KeyboardAwareScrollView
      style={{ flex: 1 }}
      contentContainerStyle={{ flex: 1 }}
    >
      <Text>Coucou</Text>
      {/* <SafeAreaView style={styles.mainView}>
        <Logo />

        <RedirectButton text={"Sign out"} screen={"login"} />
      </SafeAreaView> */}
    </KeyboardAwareScrollView>
  );
};
