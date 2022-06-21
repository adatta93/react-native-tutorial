import React from "react";
import { StyleSheet, View } from "react-native";

export default function Card({ isEnabled, children }) {
  return (
    <View style={[styles.card, isEnabled && styles.darkCard]}>
      <View style={styles.cardContent}>{children}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 6,
    elevation: 3,
    shadowColor: "#333",
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    marginHorizontal: 4,
    marginVertical: 6,
  },
  darkCard: {
    backgroundColor: "#222",
  },
  cardContent: {
    marginHorizontal: 16,
    marginVertical: 16,
  },
});
