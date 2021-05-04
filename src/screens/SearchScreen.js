import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import Searchbar from "../Components/SearchBar";
function SearchScreen() {
  const [search, setSearch] = useState("");
  const submitSearch = () => console.log("Submitted");
  return (
    <View style={styles.background}>
      <Searchbar
        search={search}
        searchChange={(newSearch) => setSearch(newSearch)}
        submitSearch={submitSearch}
      />
      <Text>{search}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  background: {
    backgroundColor: "white",
  },
});
export default SearchScreen;
