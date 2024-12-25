import { StyleSheet, TextInput, View } from "react-native";
import React from "react";
import Feather from "@expo/vector-icons/Feather";
const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
  return (
    <View style={styles.background}>
      <Feather
        name="search"
        size={40}
        color="black"
        style={{ width: 40, marginRight: 15 }}
      />
      <TextInput
        value={term}
        onChangeText={onTermChange}
        style={styles.inputStyle}
        placeholder="Search"
        autoCapitalize="none"
        autoCorrect={false}
        onEndEditing={onTermSubmit}
      />
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  background: {
    backgroundColor: "#fefefe",
    height: 50,
    borderRadius: 5,
    marginHorizontal: 15,
    flexDirection: "row",
    alignItems: "center",
  },
  inputStyle: {
    flex: 1,
    fontSize: 18,
  },
});
