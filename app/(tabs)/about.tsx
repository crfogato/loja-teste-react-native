import { SafeAreaView, StatusBar, StyleSheet, Text } from "react-native";

export default function Screen() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.h1}>Loja R3</Text>
      <Text style={styles.h2}>Aplicativo criado para estudos</Text>
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
