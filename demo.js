import React, { useState } from "react";
import { Button, ScrollView, StyleSheet, Text, TextInput } from "react-native";

export default function Demo1() {
  const [name, setName] = useState("Anik");
  const [age, setAge] = useState("30");

  return (
    <ScrollView style={styles.container}>
      <Text>Enter name:</Text>
      <TextInput
        multiline
        placeholder="e.g. John Doe"
        style={styles.input}
        onChangeText={(value) => setName(value)}
      />

      <Text>Enter age:</Text>
      <TextInput
        keyboardType="numeric"
        placeholder="e.g. 99"
        style={styles.input}
        onChangeText={(value) => setAge(value)}
      />

      <Text style={styles.result}>
        Name: {name}, Age: {age}
      </Text>
      <Button title="Reset Name" onPress={() => setName("Anikendra")} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 40,
    paddingHorizontal: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#777",
    padding: 8,
    marginVertical: 10,
  },
  item: {
    fontSize: 24,
    margin: 20,
    padding: 20,
    backgroundColor: "pink",
  },
  result: {
    marginVertical: 20,
  },
});
