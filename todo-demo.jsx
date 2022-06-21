import React, { useState } from "react";
import {
  StyleSheet,
  View,
  FlatList,
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import TodoHeader from "./components/TodoHeader";
import TodoItem from "./components/TodoItem";
import AddTodo from "./components/AddTodo";

export default function TodoDemo() {
  const [todos, setTodos] = useState([
    { text: "eat food" },
    { text: "learn react native" },
    { text: "make an app" },
    { text: "build app" },
    { text: "go to sleep" },
  ]);

  const onItemPress = (ind) => {
    setTodos((prev) => {
      return prev.filter((item, index) => index != ind);
    });
  };

  const onAddTodo = (todo) => {
    if (todo.length > 1) {
      setTodos((prev) => {
        return [...prev, { text: todo }];
      });
    } else {
      Alert.alert("OOPS!", "Todo must be over 1 char", [
        { text: "Okay", onPress: () => console.log("alert closed") },
      ]);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        {/*header*/}
        <TodoHeader />
        <View style={styles.content}>
          {/* form */}
          <AddTodo onAddTodo={onAddTodo} />
          <View style={styles.list}>
            <FlatList
              data={todos}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item, index }) => (
                <TodoItem item={item} onItemPress={() => onItemPress(index)} />
              )}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#222",
  },
  content: {
    flex: 1,
    paddingVertical: 20,
  },
  list: {
    flex: 1,
    marginTop: 20,
  },
});
