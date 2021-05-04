import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import yelp from "../api/yelp";
function ResultShowScreen({ navigation }) {
  const [result, setResult] = useState([]);
  const getResult = async () => {
    const response = awaityelp.get(`/${navigation.getParam("id")}`);
    setResult(response.data.photos);
  };
  console.log(result);
  useEffect(() => {
    getResult();
  }, []);
  return (
    <View>
      <Text>Results show</Text>
    </View>
  );
}
const styles = StyleSheet.create({});
export default ResultShowScreen;
