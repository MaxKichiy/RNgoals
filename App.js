import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View, FlatList } from 'react-native';
import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);

  const confirmHandler = (goal) => {
    setCourseGoals((prevState) => [...prevState, { key: Math.random().toString(), value: goal }]);
  };

  return (
    <View style={styles.screen}>
      <GoalInput confirmHandler={confirmHandler} />
      <FlatList
        data={courseGoals}
        renderItem={(goal) => <GoalItem title={goal.item.value} />}></FlatList>
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
});
