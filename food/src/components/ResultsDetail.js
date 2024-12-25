import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";

const ResultsDetail = ({ result }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: result.image_url }} />
      <Text style={styles.name}>{result.name}</Text>
      <Text>
        {result.rating} Stars, {result.review_count}
        Reviews
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 15,
  },
  image: {
    marginBottom: 5,
    width: 250,
    height: 120,
    borderRadius: 4,
    objectFit: "cover",
  },
  name: {
    maxWidth: 200,
    fontWeight: "bold",
  },
});

export default ResultsDetail;
