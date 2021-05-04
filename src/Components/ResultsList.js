import React from "react";
import uuid from "react-native-uuid";
import { View, Text, StyleSheet, FlatList } from "react-native";
import ResultsDetail from "./ResultsDetail";
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
          return <ResultsDetail result={item} />;
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
