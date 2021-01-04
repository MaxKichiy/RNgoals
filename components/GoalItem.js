import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

function GoalItem(props) {
  return (
    <View style={styles.listItem}>
      <Text>{props.title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  listItem: {
    width: 200,
    marginVertical: 10,
    padding: 10,
    backgroundColor: '#cdcdcd',
    borderColor: 'black',
    borderWidth: 1,
  },
});

export default GoalItem;
