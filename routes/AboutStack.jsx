import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import About from "../screens/About";
import Header from "../shared/Header";

const Stack = createStackNavigator();

export default function AboutStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTintColor: "#444",
        headerStyle: { backgroundColor: "#ecd400" },
      }}>
      <Stack.Screen
        name="About"
        component={About}
        options={({ navigation }) => ({
          header: () => <Header title="About Us" />,
        })}
      />
    </Stack.Navigator>
  );
}
