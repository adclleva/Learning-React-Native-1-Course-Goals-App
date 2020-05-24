import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  ScrollView,
  FlatList,
} from "react-native";

import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);

  const addGoalHandler = (enteredGoal) => {
    // setCourseGoals([...courseGoals, enteredGoal]);
    // the currentGoals is basically the previous or current state the way you want to look at it
    let newGoal = {
      goal: enteredGoal,
      id: Math.random().toString() + enteredGoal,
    };

    setCourseGoals((currentGoals) => {
      return [...currentGoals, newGoal];
    });

    console.log("courseGoals", courseGoals);
  };

  const resetListHandler = () => {
    setCourseGoals([]);
  };

  return (
    <View style={styles.screen}>
      <GoalInput onAddGoal={addGoalHandler} onResetList={resetListHandler} />
      <FlatList
        data={courseGoals}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <GoalItem goal={item.goal} />}
      />
    </View>
  );
}

/** it is good practice to create a stylesheet object
 * we can create an object but it's better to use the StyleSheet class when there are
 * optimizations in the future
 */
const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
});
