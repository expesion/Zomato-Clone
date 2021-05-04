import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import useYelp from "../hooks/useYelp";
import Searchbar from "../Components/SearchBar";
function SearchScreen() {
  const [search, setSearch] = useState("");
  const [{ results, error }, submitSearch] = useYelp();

  return (
    <View style={styles.background}>
      <Searchbar
        search={search}
        searchChange={(newSearch) => setSearch(newSearch)}
        submitSearch={() => submitSearch(search)}
      />
      {error ? <Text>{error}</Text> : <Text>{results.length}</Text>}
    </View>
  );
}
const styles = StyleSheet.create({
  background: {
    backgroundColor: "white",
  },
});
export default SearchScreen;
