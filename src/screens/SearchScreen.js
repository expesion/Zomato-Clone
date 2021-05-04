import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import Searchbar from "../Components/SearchBar";
import yelp from "../api/yelp";
function SearchScreen() {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);
  const [error, setError] = useState(null);
  const submitSearch = async () => {
    try {
      let response = await yelp.get("/search", {
        params: { limit: 50, term: search, location: "san jose" },
      });
      setResults(response.data.businesses);
      setError(null);
    } catch (err) {
      setError("Something went Wrong");
    }
  };
  return (
    <View style={styles.background}>
      <Searchbar
        search={search}
        searchChange={(newSearch) => setSearch(newSearch)}
        submitSearch={submitSearch}
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
