/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  bigBlue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  red: {
    color: 'blue',
  },
});

export default class LotOfStyles extends Component {
  render() {
    return (
      <View>
        <Text style={styles.red}>Merah</Text>
        <Text style={styles.bigBlue}>Big Blue</Text>
        <Text style={styles.bigBlue, styles.red}>Big Blue, then Red</Text>
        <Text style={styles.red, styles.bigBlue}>red, then bigBlue</Text>
      </View>
    )
  }
}