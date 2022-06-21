import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import React from "react";
import Demo1 from "../demo";
import TodoDemo from "../todo-demo";

const Tab = createMaterialTopTabNavigator();

export default function TopTab() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: "#ba0442",
        labelStyle: { fontSize: 18 },
        pressColor: "#ecd400",
        indicatorStyle: { backgroundColor: "#ba0442", height: 4 },
        style: { backgroundColor: "white" },
      }}>
      <Tab.Screen name="Todo Demo" component={TodoDemo} />
      <Tab.Screen name="Demo 1" component={Demo1} />
    </Tab.Navigator>
  );
}
