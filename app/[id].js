import { View, Text, Button } from "react-native";
import { router } from "expo-router";

export default function HomePage() {
  return (
    <View>
      <Text>Oups tu t'es perdu... Retourne sur la page d'accueil !</Text>
      <Button title="Home" onPress={() => router.navigate("/")} />
    </View>
  );
}
