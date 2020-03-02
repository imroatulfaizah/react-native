/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  const [name, setName] = useState('Faizah');
  const [age, setAge] = useState('90');

  return (
    <View style={styles.container}>
      <Text>Enter Name</Text>
      <TextInput style={styles.input}
                 placeholder='e.g. Imroatul'
                 onChangeText={(val) => setName(val)} />
      <Text>Enter Age</Text>
      <TextInput style={styles.input}
                 placeholder='e.g. 30'
                 onChangeText={(val) => setAge(val)} />
      <Text>name: {name}, age: {age}</Text>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',

  },
  buttonContainer: {
    marginTop: 20
  },
  input: {
    borderWidth: 1,
    borderColor: '#777',
    padding: 8,
    margin: 10,
    width: 200,
  }

});