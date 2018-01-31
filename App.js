import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

import ListItem from './src/components/ListItem/ListItem';
import Input from './src/components/ListItem/Input';
import List from './src/components/ListItem/List';

export default class App extends React.Component {
  state = {
    placeName: '',
    places: [],
  };

  placeNameChangeHandler = val => {
    this.setState({
      placeName: val
    });
  }

  placeSubmitHandler = () => {
    if (this.state.placeName.trim() === "") {
      return;
    }
    this.setState(prevState => {
      return {
        places: prevState.places.concat(prevState.placeName)
      };
    })
  }
  
  render() {
    const placesOutput = this.state.places.map((place, i) => 
      <ListItem key={i} placeName={place} />
    );
    return (
      <View style={styles.container}>
        <Input 
          placeName={this.state.placeName}
          placeNameChangeHandler={this.placeNameChangeHandler}
          placeSubmitHandler={this.placeSubmitHandler}
        />
        <List placesOutput={placesOutput}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 26,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  }
});
