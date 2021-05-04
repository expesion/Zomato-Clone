import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
function ResultsDetail({ result }) {
  return (
    <View>
      <Text>{result.name}</Text>
    </View>
  );
}
const style = StyleSheet.create({});
export default ResultsDetail;
