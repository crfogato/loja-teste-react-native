import { router, Stack, useLocalSearchParams } from "expo-router";
import {
  SafeAreaView,
  StyleSheet,
  StatusBar,
  ScrollView,
  View,
  Image,
  Text,
} from "react-native";
import { Button } from "../../components/button";
import { getProductById } from "../../services/product";

export default function Screen() {
  const { id } = useLocalSearchParams();
  const idProduct = parseInt(id as string);

  const product = getProductById(idProduct);
  if (!product) return router.back();

  const handleBuyButton = () => {
    alert("Você clicou no item: " + id);
  };

  return (
    <SafeAreaView style={styles.constainer}>
      <Stack.Screen options={{ title: "Produto" }} />
      <ScrollView style={styles.area}>
        <Image
          style={styles.img}
          source={{ uri: product.image }}
          resizeMode="cover"
        />
        <Text style={styles.title}>{product.title}</Text>
        <Text style={styles.description}>{product.description}</Text>
        <View style={styles.priceArea}>
          <Text style={styles.price}>R$ {product.price}</Text>
        </View>
      </ScrollView>
      <View style={styles.buttonArea}>
        <Button title="Comprar agora" onPress={handleBuyButton} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  constainer: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  area: {
    flex: 1,
    padding: 10,
  },
  buttonArea: {
    padding: 20,
  },
  img: {
    width: "100%",
    height: 250,
    borderRadius: 10,
    marginBottom: 20,
  },
  title: {
    fontSize: 27,
    fontWeight: "bold",
    marginBottom: 10,
  },
  description: {
    fontSize: 15,
    color: "#555555",
    marginBottom: 20,
  },
  priceArea: {
    padding: 10,
    borderRadius: 10,
    backgroundColor: "#cccccc",
  },
  price: {
    fontSize: 22,
    textAlign: "center",
  },
});
