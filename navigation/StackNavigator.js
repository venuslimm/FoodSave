import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Image } from "react-native";
import Home from "../screens/Home/Home";
import PostForm from "../screens/PostForm/PostForm";

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
	return (
		<Stack.Navigator initialRouteName="Home">
			<Stack.Screen
				name="Home"
				component={Home}
				options={{
					headerTitle: (
						props // App Logo
					) => (
						<Image
							style={{ width: 380, height: 50 }}
							source={require("../assets/logo.png")}
							resizeMode="contain"
						/>
					),
				}}
			/>
			<Stack.Screen name="PostForm" component={PostForm} />
		</Stack.Navigator>
	);
};

export default StackNavigator;
