import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  ScrollView,
} from "react-native";

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState("");
  const [courseGoals, setCourseGoals] = useState([]);

  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  };

  const addGoalHander = () => {
    // setCourseGoals([...courseGoals, enteredGoal]);
    // the curretGoals is basically the previous or current state the way you want to look at it
    setCourseGoals((currentGoals) => [...currentGoals, enteredGoal]);
    setEnteredGoal("");
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
      <ScrollView>
        {/* by default the scrollview is vertcical */}
        {courseGoals.map((courseGoal, index) => {
          return (
            <View style={styles.listItem} key={index + courseGoal}>
              <Text>{courseGoal}</Text>
            </View>
          );
        })}
      </ScrollView>
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
  listItem: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: "#ccc",
    borderColor: "#000",
    borderWidth: 1,
  },
});
