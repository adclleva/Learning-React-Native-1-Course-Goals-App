import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState("");
  const [courseGoals, setCourseGoals] = useState([]);

  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  };

  const addGoalHander = () => {
    // setCourseGoals([...courseGoals, enteredGoal]);
    // ththe curretGoals is basically the previous or current state the way you want to look at it
    setCourseGoals((currentGoals) => [...currentGoals, enteredGoal]);
    setEnteredGoal("");
    console.log(courseGoals);
  };

  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Course Goal"
          style={styles.input}
          onChangeText={goalInputHandler}
          value={enteredGoal}
        />
        <Button title="Add" onPress={addGoalHander} />
      </View>
      <View>
        {courseGoals.map((courseGoal, index) => {
          return <Text key={index + courseGoal}>{courseGoal}</Text>;
        })}
      </View>
    </View>
  );
}

/** it is good practice to create astylesheet object
 * we can create an object but it's better to use the StyleSheet class when there are
 * optimizatons in the future
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
  },
});
