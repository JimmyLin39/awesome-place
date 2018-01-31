import React from 'react';
import { View, TextInput, Button, StyleSheet } from "react-native";

const input = (props) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.placeInput}
        placeholder="An Awesome Place"
        value={props.placeName} 
        onChangeText={props.placeNameChangeHandler} 
      />
      <Button 
        style={styles.placeButton}
        title="Add" 
        onPress={props.placeSubmitHandler}
      />
    </View>
  )
};

const styles = StyleSheet.create({
  inputContainer: {
    paddingLeft: 20,
    paddingRight: 20,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  placeInput: {
    width: "70%"
  },
  placeButton: {
    width: "30%"
  }
})

export default input;