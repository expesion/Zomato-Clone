import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
function ResultsDetail({ result }) {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: result.image_url }} />
      <Text style={styles.name}>{result.name}</Text>
      <Text style={styles.name}>
        {result.rating} Stars, {result.review_count} Reviews
      </Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: { marginLeft: 15 },
  image: {
    borderRadius: 5,
    height: 120,
    width: 250,
    marginBottom: 5,
  },
  name: {
    fontWeight: "bold",
    fontSize: 16,
  },
});
export default ResultsDetail;
