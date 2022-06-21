import { MaterialIcons } from "@expo/vector-icons";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import DrawerComp from "./Drawer";
import TopTab from "./TopTab";

//const Tab = createBottomTabNavigator();
const BtmTab = createMaterialBottomTabNavigator();

export default function BottomTab() {
  return (
    <NavigationContainer>
      <BtmTab.Navigator
        activeColor="#ba0442"
        barStyle={{ backgroundColor: "#ffeb3b" }}>
        <BtmTab.Screen
          name="GameZone"
          component={DrawerComp}
          options={{
            tabBarLabel: "GameZone",
            tabBarIcon: ({ color }) => (
              <MaterialIcons name="home" color={color} size={26} />
            ),
          }}
        />
        <BtmTab.Screen
          name="Demo"
          component={TopTab}
          options={{
            tabBarIcon: ({ color }) => (
              <MaterialIcons name="apps" color={color} size={26} />
            ),
          }}
        />
      </BtmTab.Navigator>
    </NavigationContainer>
  );
}
