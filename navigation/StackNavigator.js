import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Image, Text } from "react-native";
import Home from "../screens/Home/Home";
import PostForm from "../screens/PostForm/PostForm";

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="PostForm" component={PostForm} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
