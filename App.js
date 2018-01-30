import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default class App extends React.Component {
  state = {
    placename: ''
  }

  placeNameChangeHandler = val => {
    this.setState({
      placename: val
    })
  }
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={{width: 300, borderColor: "black", borderWidth: 1}}
          value={this.state.placename} 
          onChangeText={this.placeNameChangeHandler} />
        <Text>{this.state.placename}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
