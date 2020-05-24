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

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState("");
  const [courseGoals, setCourseGoals] = useState([]);

  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  };

  const addGoalHandler = () => {
    // setCourseGoals([...courseGoals, enteredGoal]);
    // the curretGoals is basically the previous or current state the way you want to look at it
    let newGoal = {
      goal: enteredGoal,
      id: Math.random().toString() + enteredGoal,
    };
    setCourseGoals((currentGoals) => {
      // console.log("");
      // console.log("courses", [...currentGoals, newGoal]);

      return [...currentGoals, newGoal];
    });
    setEnteredGoal("");
    console.log("courseGoals", courseGoals);
  };

  const resetListHandler = () => {
    setCourseGoals([]);
  };

  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <Button title="Reset List" onPress={resetListHandler} />
        <TextInput
          placeholder="Course Goal"
          style={styles.input}
          onChangeText={goalInputHandler}
          value={enteredGoal}
        />
        <Button title="Add" onPress={addGoalHandler} />
      </View>
      <FlatList
        data={courseGoals}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Text style={styles.listItem}>{item.goal}</Text>
        )}
      />
      {/* 
      by default the scrollview is vertcical 
      <ScrollView>
        {courseGoals.map((courseGoal, index) => {
          return (
            <View style={styles.listItem} key={index + courseGoal}>
              <Text>{courseGoal}</Text>
            </View>
          );
        })}
      </ScrollView> 
      */}
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
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  input: {
    width: "80%",
    borderBottomColor: "black",
    borderBottomWidth: 1,
    padding: 10,
    margin: 10,
  },
  listItem: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: "#ccc",
    borderColor: "#000",
    borderWidth: 1,
  },
});
