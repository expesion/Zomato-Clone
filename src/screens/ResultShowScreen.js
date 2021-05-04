import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, FlatList, Image } from "react-native";
import uuid from "react-native-uuid";
import yelp from "../api/yelp";
function ResultShowScreen({ navigation }) {
  const [result, setResult] = useState([]);
  const getResult = async () => {
    const response = await yelp.get(`/${navigation.getParam("id")}`);
    setResult(response.data.photos);
  };
  useEffect(() => {
    getResult();
  }, []);
  return (
    <View>
      <FlatList
        data={result}
        keyExtractor={() => uuid.v4()}
        renderItem={({ item }) => (
          <Image style={{ height: 200, width: 300 }} source={{ uri: item }} />
        )}
      />
    </View>
  );
}
const styles = StyleSheet.create({});
export default ResultShowScreen;
