import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [goal, setGoal] = useState('');
  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <TextInput placeholder='Enter your goal' style={styles.textInput} />
        <Button title='ADD' style={styles.button} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
    flexDirection: 'row',
    alignItems: 'flex-start',
    backgroundColor: '#aaa',
    height: '100%',
  },
  textInput: {
    width: '80%',
    marginLeft: '5%',
    padding: 10,
    borderColor: '#cecece',
    borderWidth: 2,
  },
  inputContainer: {
    flexDirection: 'row',
    flexGrow: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  button: {
    color: 'green',
  },
});
