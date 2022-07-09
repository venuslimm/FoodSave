import {
	StyleSheet,
	View,
	Text,
	ScrollView,
	TouchableOpacity,
} from "react-native";
import React from "react";
import Item from "./Item";
import Icon from "react-native-vector-icons/MaterialIcons";

export default function Home({ navigation }) {
	return (
		<View style={styles.container}>
			<ScrollView>
				<View style={{ flex: 1, flexDirection: "row", margin: 10 }}>
					<TouchableOpacity style={styles.filterButton}>
						<Icon name={"filter-alt"} style={styles.icon} color="#FFFFFF" />
						<Text style={styles.filterText}>Filter</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.saveButton}>
						<Icon
							name={"bookmark-border"}
							style={styles.icon}
							color="#47896D"
						/>
						<Text style={styles.saveText}>Save</Text>
					</TouchableOpacity>
				</View>
				<Item />
				<Item />
				<Item />
			</ScrollView>
			<TouchableOpacity
				onPress={() => navigation.navigate("PostForm")}
				style={styles.addButton}
			>
				<Icon name={"add-box"} size={40} color="#FFFFFF" />
				<Text style={styles.addText}>Add Food Item</Text>
			</TouchableOpacity>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#FFFFFF",
	},
	icon: {
		marginHorizontal: 5,
	},
	filterButton: {
		flex: 1,
		backgroundColor: "#47896D",
		borderRadius: 10,
		justifyContent: "center",
		alignItems: "center",
		color: "#FFFFFF",
		flexDirection: "row",
		padding: 10,
		margin: 5,
	},
	filterText: {
		color: "#FFFFFF",
	},
	saveButton: {
		flex: 1,
		backgroundColor: "#FFFFFF",
		borderRadius: 10,
		justifyContent: "center",
		alignItems: "center",
		color: "#47896D",
		flexDirection: "row",
		borderWidth: 1,
		borderColor: "#47896D",
		padding: 10,
		margin: 5,
	},
	saveText: {
		color: "#47896D",
	},
	addButton: {
		height: 60,
		backgroundColor: "#47896D",
		justifyContent: "center",
		alignItems: "center",
	},
	addText: {
		color: "#FFFFFF",
		fontSize: 10,
	},
});
