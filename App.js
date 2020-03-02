/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList, TouchableOpacity } from 'react-native';

export default function App() {
  const [people, setPeople] = useState([
    {name: 'a', key: '1'},
    {name: 'b', key: '2'},
    {name: 'c', key: '3'},
    {name: 'd', key: '4'},
    {name: 'e', key: '5'},
    {name: 'f', key: '6'},
    
  ]);

  const pressHandler = (id) => {
    console.log(id);
    setPeople((prevPeople) => {
      return prevPeople.filter(person => person.id);
    });
  }

  return (
    <View style={styles.container}>
      <FlatList 
      numColumns={2}
      keyExtractor={(item) => item.id}
      data={people}
      renderItem={({ item }) => (
        <TouchableOpacity onPress={() => pressHandler(item.id)}>
          <Text style={styles.item}>{item.name}</Text>
        </TouchableOpacity>
      )}/>

     </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40,
    paddingHorizontal: 20
    // alignItems: 'center',
    // justifyContent: 'center',

  },
  item: {
    marginTop: 60,
    padding: 30,
    backgroundColor: 'pink'
  }


});