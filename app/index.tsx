import { Image, SafeAreaView, StatusBar, StyleSheet, Text } from "react-native";
import { Button } from "../components/button";
import { router } from "expo-router";

export default function Screen() {
  const handleStart = () => {
    router.replace("/home");
  };

  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={require("../assets/logo.png")}
        style={styles.logo}
        resizeMode="cover"
      />
      <Text style={styles.h1}>Loja R3</Text>
      <Text style={styles.h2}>Aqui você encontra de tudo</Text>
      <Button title="Começar as compras" onPress={handleStart} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight || 0,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  h1: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
  },
  h2: {
    fontSize: 16,
    marginBottom: 10,
  },
});
