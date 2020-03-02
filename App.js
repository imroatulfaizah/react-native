/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView } from 'react-native';

export default function App() {
  const [people, setPeople] = useState([
    {name: 'a', key: '1'},
    {name: 'b', key: '2'},
    {name: 'c', key: '3'},
    {name: 'd', key: '4'},
    {name: 'e', key: '5'},
    {name: 'f', key: '6'},
  ]);

  return (
    <View style={styles.container}>
      <ScrollView>
        { people.map((item) => {
          return (
            <View key={item.key}>
              <Text style={styles.item}>{item.name}</Text>
            </View>
          )
        })}

      </ScrollView>

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
    marginTop: 24,
    padding: 30,
    backgroundColor: 'pink'
  }


});