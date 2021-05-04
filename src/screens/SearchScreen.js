import React, { useState, useCallback, useEffect } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import useYelp from "../hooks/useYelp";
import Searchbar from "../Components/SearchBar";
import ResultsList from "../Components/ResultsList";
function SearchScreen() {
  const [search, setSearch] = useState("");
  const [restaurants, setRestaurants] = useState({
    cheap: [],
    average: [],
    expensive: [],
  });
  const [{ results, error, loading }, submitSearch] = useYelp();
  const filterResultsByPrice = () => {
    let res = { cheap: [], average: [], expensive: [] };
    for (let i = 0; i < results.length; i++) {
      if (results[i].price == "$") {
        res.cheap.push(results[i]);
      }
      if (results[i].price == "$$") {
        res.average.push(results[i]);
      }
      if (results[i].price == "$$$" || results[i].price == "$$$$") {
        res.expensive.push(results[i]);
      }
    }
    setRestaurants(res);
  };
  useEffect(() => {
    filterResultsByPrice();
  }, [results, error]);
  const debounce = (func, delay = 500) => {
    let inDebounce;
    return function () {
      const context = this;
      const args = arguments;
      clearTimeout(inDebounce);
      inDebounce = setTimeout(() => func.apply(context, args), delay);
    };
  };
  let debounedSearch = useCallback(debounce(submitSearch), []);
  return (
    <View style={styles.background}>
      <Searchbar
        search={search}
        searchChange={(newSearch) =>
          setSearch(() => {
            debounedSearch(newSearch);
            return newSearch;
          })
        }
        submitSearch={() => submitSearch(search)}
      />
      {loading && <Text>Loading...</Text>}
      {error ? (
        <Text>{error}</Text>
      ) : (
        <ScrollView>
          <ResultsList title="Cost Effective" data={restaurants.cheap} />
          <ResultsList title="Bit Pricy" data={restaurants.average} />
          <ResultsList title="Big Spender" data={restaurants.expensive} />
        </ScrollView>
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  background: {
    backgroundColor: "white",
    flex: 1,
  },
});
export default SearchScreen;
