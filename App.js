import React, { useState } from "react";
import { StyleSheet, View, Button, FlatList } from "react-native";

import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [isAddModal, setIsAddModal] = useState(false);

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

    setIsAddModal(false);
  };

  const deleteGoalHandler = (goalId) => {
    setCourseGoals((currentGoals) => {
      return currentGoals.filter((goal) => {
        return goal.id !== goalId;
      });
    });
  };

  const resetListHandler = () => {
    setCourseGoals([]);
  };

  const cancelAddGoalHandler = () => {
    setIsAddModal(false);
  };

  return (
    <View style={styles.screen}>
      <View style={styles.buttonsContainer}>
        <View style={styles.button}>
          <Button title="Reset List" onPress={resetListHandler} color="red" />
        </View>
        <View style={styles.button}>
          <Button title="Add" onPress={() => setIsAddModal(true)} />
        </View>
      </View>
      <GoalInput
        isAddModal={isAddModal}
        onAddGoal={addGoalHandler}
        onCancel={cancelAddGoalHandler}
      />
      <FlatList
        data={courseGoals}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <GoalItem
            goal={item.goal}
            id={item.id}
            onDeleteGoal={deleteGoalHandler}
          />
        )}
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
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  button: {
    width: "40%",
  },
});
