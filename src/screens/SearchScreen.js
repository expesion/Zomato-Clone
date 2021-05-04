import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Searchbar from "../Components/SearchBar";
function SearchScreen() {
  return (
    <View style={styles.background}>
      <Searchbar />
      <Text>Seach Screen</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  background: {
    backgroundColor: "white",
  },
});
export default SearchScreen;
