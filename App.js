import React, { useState } from 'react';
import { StyleSheet, Text, View, Picker } from 'react-native';
import TypePicker from './components/TypePicker'

export default function App() {
  return (
    <View>
      <Text style={styles.customHeader}>Pokemon type efectiveness!</Text>
      <TypePicker />
      <TypePicker />
    </View>
  );
}

const styles = StyleSheet.create({
  customHeader: {
    textAlign: 'center',
    fontSize: 20,
    marginTop: 80
  }
});
