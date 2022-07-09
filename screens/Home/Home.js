import { StyleSheet, View, Button } from "react-native";
import React from "react";

export default function Home({ navigation }) {
	return (
		<View>
			<Button
				title="Go to Post Form"
				onPress={() => navigation.navigate("PostForm")}
			/>
		</View>
	);
}

const styles = StyleSheet.create({});
