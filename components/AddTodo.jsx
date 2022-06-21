import React, { useState } from "react";
import { StyleSheet, View, TextInput, Button } from "react-native";

export default function AddTodo({ onAddTodo }) {
  const [todo, setTodo] = useState("");

  const onAdd = () => {
    onAddTodo(todo);
    setTodo("");
  };

  return (
    <View style={styles.addForm}>
      <TextInput
        style={styles.input}
        placeholder="Enter new Todo"
        value={todo}
        onChangeText={(val) => setTodo(val)}
      />
      <Button title="Add" onPress={onAdd} color="#006064" />
    </View>
  );
}

const styles = StyleSheet.create({
  addForm: {
    marginHorizontal: 16,
  },
  input: {
    marginBottom: 10,
    padding: 8,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    color: "#bbb",
  },
});
