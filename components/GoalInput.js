import React, { useState } from 'react';
import { Button, StyleSheet, TextInput, View } from 'react-native';

function GoalInput(props) {
  const [goal, setGoal] = useState('');

  const goalInputHandler = (enteredText) => {
    setGoal(enteredText);
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder='Enter your goal'
        style={styles.textInput}
        onChangeText={goalInputHandler}
        value={goal}
      />
      <Button title='ADD' onPress={() => props.confirmHandler(goal)} />
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    // width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  textInput: {
    width: '80%',
    marginLeft: '5%',
    padding: 10,
    borderColor: '#cecece',
    borderWidth: 2,
  },
});

export default GoalInput;
