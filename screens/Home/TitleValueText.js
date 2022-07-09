import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function TitleValueText(props) {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>{props.title}:</Text>
			<Text style={styles.value}>{props.value}</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		margin: 8,
	},
	title: {
		color: "#75A792",
		fontSize: 10,
	},
	value: {
		color: "#47896D",
		fontWeight: "500",
	},
});
