import "react-native-gesture-handler";
import {
  StyleSheet,
  View,
  Text,
  Linking,
} from "react-native";
import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import FirstPage from "./page/FirstPage";
import SecondPage from "./page/SecondPage";
import ThirdPage from "./page/ThirdPage";
import CustomSideBarManu from "./page/CustomSideBarManu";

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

function FirstScreenStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="First Page" component={FirstPage} />
    </Stack.Navigator>
  );
}

function SecondScreenStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Second Page" component={SecondPage} />
    </Stack.Navigator>
  );
}

function MyDrawer() {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerStyle: {
          backgroundColor: "#FFFF",
          width: 240,
        },
      }}
      drawerContent={(props) => <CustomSideBarManu {...props} />}
    >
      <Drawer.Screen
        name="FirstDrawer"
        component={FirstScreenStack}
        options={{ drawerLabel: "First page Option" }}
      />
      <Drawer.Screen
        name="SecondDrawer"
        component={SecondScreenStack}
        options={{ drawerLabel: "Second page Option" }}
      />
    </Drawer.Navigator>
  );
}

const App = () => {
  return (
    <NavigationContainer>
      <MyDrawer />
    </NavigationContainer>
  );
};

export default App;
