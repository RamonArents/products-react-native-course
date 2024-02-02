import { useContext } from "react";
import {
  ActivityIndicator,
  Text,
  StyleSheet,
  View,
  FlatList,
} from "react-native";
import { Context } from "../../context";

export default function ProductListing() {
  const { loading, products } = useContext(Context);

  if (loading) {
    return (
      <ActivityIndicator styles={styles.loader} color={"red"} size={"large"} />
    );
  }
  return (
    <View>
      <FlatList
        data={products}
        renderItem={(itemData) => <Text>{itemData.item.title}</Text>}
        key={(itemData) => itemData.id}
        numColumns={2}
      />
      <Text>ProductListing</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  loader: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
