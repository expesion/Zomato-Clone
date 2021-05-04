import React from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import { Feather } from "@expo/vector-icons";
function SearchBar({ search, searchChange, submitSearch }) {
  return (
    <View style={styles.background}>
      <Feather name="search" style={styles.icon} />
      <TextInput
        placeholder="Search"
        style={styles.input}
        value={search}
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={searchChange}
        onEndEditing={submitSearch}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  background: {
    backgroundColor: "#F0EEEE",
    height: 50,
    marginHorizontal: 15,
    marginTop: 10,
    borderRadius: 5,
    flexDirection: "row",
  },
  input: {
    flex: 1,
    fontSize: 18,
  },
  icon: {
    fontSize: 35,
    color: "black",
    alignSelf: "center",
    marginHorizontal: 10,
  },
});
export default SearchBar;
