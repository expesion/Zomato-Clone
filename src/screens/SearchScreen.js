import React, { useState, useMemo, useEffect } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import useYelp from "../hooks/useYelp";
import Searchbar from "../Components/SearchBar";
import ResultsList from "../Components/ResultsList";
function SearchScreen() {
  const [search, setSearch] = useState("");
  const resultsByPrice = useMemo(() => {
    return { cheap: [], average: [], expensive: [] };
  }, []);
  const [{ results, error }, submitSearch] = useYelp();
  const filterResultsByPrice = () => {
    for (let i = 0; i < results.length; i++) {
      if (results[i].price == "$") {
        resultsByPrice.cheap.push(results[i]);
      }
      if (results[i].price == "$$") {
        resultsByPrice.average.push(results[i]);
      }
      if (results[i].price == "$$$" || results[i].price == "$$$$") {
        resultsByPrice.expensive.push(results[i]);
      }
    }
  };
  useEffect(() => {
    filterResultsByPrice();
  }, [results, error]);
  return (
    <View style={styles.background}>
      <Searchbar
        search={search}
        searchChange={(newSearch) => setSearch(newSearch)}
        submitSearch={() => submitSearch(search)}
      />
      {error ? (
        <Text>{error}</Text>
      ) : (
        <ScrollView>
          <ResultsList title="Cost Effective" data={resultsByPrice.cheap} />
          <ResultsList title="Bit Pricy" data={resultsByPrice.average} />
          <ResultsList title="Big Spender" data={resultsByPrice.expensive} />
        </ScrollView>
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  background: {
    backgroundColor: "white",
  },
});
export default SearchScreen;
