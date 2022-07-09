import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import TitleValueText from "./TitleValueText";
import Icon from "react-native-vector-icons/MaterialIcons";

export default function Item() {
	return (
		<View style={styles.container}>
			<View style={styles.imageContainer}>
				<Image
					style={styles.image}
					source={require("../../assets/chicken-rice.jpg")}
				/>
			</View>
			<View style={styles.contentContainer}>
				<Text style={styles.expirationText}>
					<Icon name="access-time" color="#47896D" />
					Expiring in 4 hours...
				</Text>
				<View style={styles.valuesSaveContainer}>
					<View style={styles.values}>
						<TitleValueText title="Name" value="Chicken Rice" />
						<TitleValueText title="Location" value="Jurong East" />
						<TitleValueText title="Cooked By" value="Mary Lim" />
						<TitleValueText title="Contact Number" value="92347892" />
						<TitleValueText title="Halal" value="Yes" />
					</View>
					<View style={styles.itemButtonsContainer}>
						<TouchableOpacity style={styles.itemButton}>
							<Icon name={"edit"} size={30} color="#FFFFFF" />
						</TouchableOpacity>
						<TouchableOpacity style={styles.itemButton}>
							<Icon name={"delete"} size={30} color="#FFFFFF" />
						</TouchableOpacity>
						<TouchableOpacity style={styles.itemButton}>
							<Icon name={"bookmark-border"} size={30} color="#FFFFFF" />
						</TouchableOpacity>
					</View>
				</View>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 3,
		flexDirection: "row",
		margin: 10,
		borderWidth: 1,
		borderColor: "#47896D",
		padding: 20,
		backgroundColor: "#FFFFFF",

		// Shadow
		shadowOffset: { width: 0, height: 13 },
		shadowOpacity: 0.3,
		shadowRadius: 6,

		// android (Android +5.0)
		elevation: 3,
	},
	imageContainer: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	image: {
		width: "100%",
		height: "100%",
		resizeMode: "cover",
		borderRadius: 10,
	},
	contentContainer: {
		flex: 1,
	},
	expirationText: {
		fontSize: 10,
		color: "#47896D",
		textAlign: "right",
	},
	valuesSaveContainer: {
		flex: 1,
		flexDirection: "row",
	},
	values: {
		flex: 2,
	},
	itemButtonsContainer: {
		flex: 1,
		justifyContent: "flex-end",
		alignItems: "flex-end",
	},
	itemButton: {
		borderWidth: 1,
		borderColor: "#FFFFFF",
		alignItems: "center",
		justifyContent: "center",
		width: 50,
		height: 50,
		backgroundColor: "#47896D",
		borderRadius: 10,
		marginVertical: 10,
	},
});
