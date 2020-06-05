import React, { useState } from 'react';
import { StyleSheet, Text, View, Picker } from 'react-native';
import PokemonTypes from '../db/PokemonTypes'

export default function App() {
  const [type, setType] = useState(1);

  return (
    <View>
        <Picker
          selectedValue={type}
          style={styles.typeSelector}
          onValueChange={(itemValue, itemIndex) =>
            setType(itemValue)
          }>
          {PokemonTypes.map((type, index) => <Picker.Item label={type.label} value={type.value} key={index} />)}
        </Picker>
    </View>
  );
}

const styles = StyleSheet.create({
  typeSelector: {
    height: 70,
    marginBottom: 60
  }
});