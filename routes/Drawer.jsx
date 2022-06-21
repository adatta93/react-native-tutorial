import { createDrawerNavigator } from "@react-navigation/drawer";
import React from "react";
import AboutStack from "./AboutStack";
import HomeStack from "./HomeStack";

const Drawer = createDrawerNavigator();

export default function DrawerComp() {
  return (
    <Drawer.Navigator
      backBehavior="initialRoute"
      drawerContentOptions={{
        contentContainerStyle: {
          backgroundColor: "#F4511E",
          flex: 1,
        },
        itemStyle: { marginVertical: 10 },
        activeTintColor: "#000",
        activeBackgroundColor: "#000",
        labelStyle: { color: "white", padding: 0, margin: 0 },
      }}
      drawerStyle={{
        width: 200,
      }}>
      <Drawer.Screen name="Home" component={HomeStack}></Drawer.Screen>
      <Drawer.Screen name="About" component={AboutStack}></Drawer.Screen>
    </Drawer.Navigator>
  );
}
