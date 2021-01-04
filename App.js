import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View, FlatList } from 'react-native';

export default function App() {
  const [goal, setGoal] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);

  const goalInputHandler = (enteredText) => {
    setGoal(enteredText);
  };

  const confirmHandler = () => {
    setCourseGoals((prevState) => [...prevState, { key: Math.random().toString(), value: goal }]);
  };
  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder='Enter your goal'
          style={styles.textInput}
          onChangeText={goalInputHandler}
          value={goal}
        />
        <Button title='ADD' style={styles.button} onPress={confirmHandler} />
      </View>
      <FlatList
        data={courseGoals}
        renderItem={(goal) => (
          <View style={styles.listItem}>
            <Text>{goal.item.value}</Text>
          </View>
        )}></FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
    alignItems: 'center',
    backgroundColor: '#aaa',
    height: '100%',

    flexWrap: 'wrap',
  },
  textInput: {
    width: '80%',
    marginLeft: '5%',
    padding: 10,
    borderColor: '#cecece',
    borderWidth: 2,
  },
  inputContainer: {
    // width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  listItem: {
    width: 200,
    marginVertical: 10,
    padding: 10,
    backgroundColor: '#cdcdcd',
    borderColor: 'black',
    borderWidth: 1,
  },
});
