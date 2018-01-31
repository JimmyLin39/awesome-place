import React from 'react';
import { View, Text, StyleSheet } from "react-native";

const list = (props) => {
  return (
    <View style={styles.listContainer}>
      {props.placesOutput}
    </View>
  )
};

const styles = StyleSheet.create({
  listContainer: {
    width: "100%",
    padding: 10,
  }
})

export default list;