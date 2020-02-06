// src/Home.js
import React from 'react';
import Analytics from './analytics.js';
import { View, Text, FlatList } from 'react-native';
import pokemon from './pokemonStore';
const Home = props => {
  return (
    <View>
      <FlatList
        keyExtractor={pokemon => pokemon.number}
        data={pokemon}
        renderItem={({ item }) => <Text>{item.name}</Text>}
      />
    </View>
  );
};
export default Home;
