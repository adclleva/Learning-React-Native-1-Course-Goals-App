import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const GoalItem = (props) => {
  const { goal, onDeleteGoal } = props;

  return (
    <TouchableOpacity onPress={() => onDeleteGoal(goal)}>
      <View style={styles.listItem}>
        <Text>{goal}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: "#ccc",
    borderColor: "#000",
    borderWidth: 1,
  },
});

export default GoalItem;
