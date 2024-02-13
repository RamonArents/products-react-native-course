import { Text, View } from "react-native";
import { useRoute } from "@react-navigation/native";
import { useState, useEffect } from "react";

export default function ProductDetails() {
  const route = useRoute();
  const { productId } = route.params;

  const [loading, setLoading] = useState(false);
  const [productDetailsdata, setProductDetailsData] = useState([]);
  useEffect(() => {
    setLoading(true);

    async function getDataFromApi() {
      const apiRes = await fetch(`https://dummyjson.com/products/${productId}`);
      const finalResult = await apiRes.json();

      if (finalResult) {
        setLoading(false);
        setProductDetailsData(finalResult);
      }
    }

    getDataFromApi();
  }, []);

  console.log(productDetailsdata);

  return (
    <View>
      <Text>ProductDetails</Text>
    </View>
  );
}
