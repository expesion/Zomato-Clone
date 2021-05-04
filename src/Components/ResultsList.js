import React from "react";
import uuid from "react-native-uuid";
import { View, Text, StyleSheet, FlatList } from "react-native";
function ResultsList({ title, data }) {
  return (
    <View>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        horizontal
        data={data}
        keyExtractor
        keyExtractor={() => uuid.v4()}
        renderItem={({ item }) => {
          return <Text>{item.name}</Text>;
        }}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
export default ResultsList;
