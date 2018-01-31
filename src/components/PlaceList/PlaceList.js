import React from 'react';
import { StyleSheet, FlatList } from 'react-native';

import ListItem from '../ListItem/ListItem';

const placeList = props => {
    return (
      <FlatList
        data={props.places}
        key={props.key}
        renderItem={({item}) => (
          <ListItem
            placeName={item.name}
            placeImage={item.image}
            onItemPressed={() => props.onItemSelected(item.key)} 
          />
        )}
        style={styles.listContainer}
      />
    );
};

const styles = StyleSheet.create({
    listContainer: {
      width: "100%"
    }
});

export default placeList;