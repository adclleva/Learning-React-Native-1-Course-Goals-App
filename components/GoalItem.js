import React from "react";
import { View, Text, StyleSheet } from "react-native";

const GoalItem = (props) => {
  const { goal } = props;

  return (
    <View style={styles.listItem}>
      <Text>{goal}</Text>
    </View>
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
