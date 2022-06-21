import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  darkContainer: {
    backgroundColor: "#333",
    color: "#fff",
  },
  titleText: {
    fontFamily: "monospace",
    fontSize: 18,
    color: "#333",
  },
  darkTitleText: {
    color: "#eee",
  },
  paragraph: {
    marginVertical: 8,
    lineHeight: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#aaa",
    borderRadius: 6,
    fontSize: 18,
    padding: 10,
    marginBottom: 5,
  },
  darkInput: {
    color: "#fff",
  },
  errorText: {
    color: "crimson",
    fontWeight: "bold",
    marginBottom: 12,
    textAlign: "center",
  },
});
