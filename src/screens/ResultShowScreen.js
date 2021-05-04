import React from "react";
import { View, Text, StyleSheet } from "react-native";
function ResultShowScreen({ navigation }) {
  return (
    <View>
      <Text>Results show{navigation.getParam("id")}</Text>
    </View>
  );
}
const styles = StyleSheet.create({});
export default ResultShowScreen;
