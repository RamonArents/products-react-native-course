import { useContext } from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";
import { Context } from "../../context";
import FavoriteItem from "../../components/favoriteItem";

export default function Favorites() {
  const { favoriteItems, handleRemoveFavorites } = useContext(Context);

  if (!favoriteItems.length) {
    return (
      <View style={styles.noFavorites}>
        <Text style={styles.noFavoritesText}>No Favorites Added !</Text>
      </View>
    );
  }

  return (
    <View style={styles.favoriteMainContainer}>
      <FlatList
        data={favoriteItems}
        renderItem={(itemData) => (
          <FavoriteItem
            title={itemData.item.title}
            reason={itemData.item.reason}
            handleRemoveFavorites={handleRemoveFavorites}
            id={itemData.item.id}
          />
        )}
        keyExtractor={(itemData) => itemData.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  noFavorites: {
    padding: 20,
    alignItems: "center",
  },
  noFavoritesText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "black",
  },
  favoriteMainContainer: {
    paddingHorizontal: 15,
    paddingVertical: 30,
  },
});
