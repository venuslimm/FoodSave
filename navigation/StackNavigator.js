import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
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
      <Stack.Screen
        name="PostForm"
        component={PostForm}
        options={{
          title: "Create Food Item",
          headerTintColor: "#47896D",
        }}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;
