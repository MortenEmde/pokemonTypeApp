import React, { useState } from 'react';
import { StyleSheet, Text, View, Picker } from 'react-native';

export default function App() {
  const [atackType, setAtackType] = useState(1);
  const [defenceTypeOne, setDefenceTypeOne] = useState(1);
  const [defenceTypeTwo, setDefenceTypeTwo] = useState(1);

  let pokemonTypes = [
    {
      label: 'Bug',
      value: 1
    }, 
    {
      label: 'Dark',
      value: 2
    }, 
    {
      label: 'Dragon',
      value: 3
    },
    {
      label: 'Electric',
      value: 4
    },
    {
      label: 'Fairy',
      value: 5
    }, 
    {
      label: 'Flying',
      value: 6
    }, 
    {
      label: 'Fighting',
      value: 7
    },
    {
      label: 'Fire',
      value: 8
    },
    {
      label: 'Ghost',
      value: 9
    }, 
    {
      label: 'Grass',
      value: 10
    }, 
    {
      label: 'Ground',
      value: 11
    },
    {
      label: 'Ice',
      value: 12
    },
    {
      label: 'Normal',
      value: 13
    },
    {
      label: 'Poison',
      value: 14
    }, 
    {
      label: 'Psychic',
      value: 15
    }, 
    {
      label: 'Rock',
      value: 16
    },
    {
      label: 'Steel',
      value: 17
    },
    {
      label: 'Water',
      value: 18
    }
  ]

  return (
    <View>
      <Text style={styles.customHeader}>Pokemon type efectiveness!</Text>
      <View>
        <Picker
          selectedValue={atackType}
          style={styles.typeSelector}
          onValueChange={(itemValue, itemIndex) =>
            setAtackType(itemValue)
          }>
          <Picker.Item label='Bug' value={1} />
          <Picker.Item label='Dark' value={2} />
        </Picker>
        <Picker
          selectedValue={defenceTypeOne}
          style={styles.typeSelector}
          onValueChange={(itemValue, itemIndex) =>
            setDefenceTypeOne(itemValue)
          }>
          <Picker.Item label='Bug' value={1} />
          <Picker.Item label='Dark' value={2} />
        </Picker>
        <Picker
          selectedValue={defenceTypeTwo}
          style={styles.typeSelector}
          onValueChange={(itemValue, itemIndex) =>
            setDefenceTypeTwo(itemValue)
          }>
          <Picker.Item label='Bug' value={1} />
          <Picker.Item label='Dark' value={2} />
        </Picker>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  customHeader: {
    textAlign: 'center',
    fontSize: 20,
    marginTop: 80
  },
  typeSelector: {
    height: 70,
    marginBottom: 60
  }
});
