import { View, StyleSheet, FlatList, Text } from "react-native";
import { getAllCategories } from "../../../services/categoty";
import { CategoryItem } from "../../../components/category-item";

export default function Screen() {
  const categories = getAllCategories();

  return (
    <View style={styles.container}>
      <FlatList
        data={categories}
        renderItem={({ item }) => <CategoryItem data={item} />}
        keyExtractor={(item) => item.id.toString()}
        style={styles.list}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  list: {
    width: "100%",
    padding: 20,
  },
});
