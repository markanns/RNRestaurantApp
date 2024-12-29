import { View, Image, Text, StyleSheet, FlatList } from "react-native";
import React, { useState, useEffect } from "react";
import yelp from "../api/yelp";
const ResultsShowScreen = ({ navigation }) => {
  const [result, setResult] = useState(null);
  const id = navigation.getParam("id");
  const getResult = async (id) => {
    const response = await yelp.get(`/${id}`);
    setResult(response.data);
  };
  useEffect(() => {
    getResult(id);
  }, []);

  if (!result) return null;
  return (
    <View>
      <Text>{result.name}</Text>
      <FlatList
        data={result.photos}
        keyExtractor={(photo) => photo}
        renderItem={(item) => {
          return (
            <Image
              source={{ uri: item.item }}
              style={{ width: 300, height: 200 }}
            />
          );
        }}
      />
    </View>
  );
};
const styles = StyleSheet.create({});
export default ResultsShowScreen;
