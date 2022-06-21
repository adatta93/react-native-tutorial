import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export default function TodoItem({ item, onItemPress }) {
  return (
    <TouchableOpacity onPress={() => onItemPress(item.key)}>
      <View style={styles.item}>
        <Text style={styles.text}>{item.text}</Text>
        <MaterialIcons name="delete" size={20} color="darkred" />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  item: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
    margin: 16,
    borderRadius: 10,
    backgroundColor: "#333",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 6,
  },
  text: {
    color: "#bbb",
    fontSize: 18,
  },
});
