import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import TitleValueText from "./TitleValueText";
import Icon from "react-native-vector-icons/MaterialIcons";
import Modal from "react-native-modal";
import { KeycodeInput } from "react-native-keycode";

export default function Item() {
	const [isModalVisible, setModalVisible] = useState(false);
	const [pin, setPin] = useState("");

	const toggleModal = () => {
		setModalVisible(!isModalVisible);
	};

	const submitPin = () => {
		if (pin === "1234") {
			return toggleModal(); // change code to navigate to edit page
		} else {
			setPin("");
			alert("Incorrect pin! Try again.");
		}
	};
	return (
		<View style={styles.container}>
			<Modal isVisible={isModalVisible} style={styles.modalContainer}>
				<View style={styles.modalContents}>
					<Text style={styles.modalText}>Enter your PIN here to proceed:</Text>
					<KeycodeInput
						onComplete={(value) => {
							setPin(value);
						}}
						numeric={true}
						tintColor="#47896D"
					/>
					<View style={styles.modalButtonsContainer}>
						<TouchableOpacity onPress={toggleModal} style={styles.cancelButton}>
							<Text style={{ color: "#47896D" }}>Cancel</Text>
						</TouchableOpacity>
						<TouchableOpacity onPress={submitPin} style={styles.submitButton}>
							<Text style={{ color: "#FFFFFF" }}>Submit PIN</Text>
						</TouchableOpacity>
					</View>
				</View>
			</Modal>

			<View style={styles.expiry}>
				<Icon name="access-time" color="#47896D" style={{ marginRight: 5 }} />
				<Text style={styles.expirationText}>Expiring in 4 hours...</Text>
			</View>

			<View style={styles.imageContainer}>
				<Image
					style={styles.image}
					source={require("../../assets/chicken-rice.jpg")}
				/>
			</View>

			<View style={styles.contentContainer}>
				<View style={styles.valuesSaveContainer}>
					<View>
						<TitleValueText title="Name" value="Chicken Rice" />
						<TitleValueText title="Location" value="Jurong East" />
						<TitleValueText title="Cooked By" value="Mary Lim" />
						<TitleValueText title="Contact Number" value="92347892" />
						<TitleValueText title="Halal" value="Yes" />
					</View>
					<View style={styles.itemButtonsContainer}>
						<TouchableOpacity style={styles.itemButton} onPress={toggleModal}>
							<Icon name={"edit"} size={20} color="#FFFFFF" />
						</TouchableOpacity>
						<TouchableOpacity style={styles.itemButton} onPress={toggleModal}>
							<Icon name={"delete"} size={20} color="#FFFFFF" />
						</TouchableOpacity>
						<TouchableOpacity style={styles.itemButton}>
							<Icon name={"bookmark-border"} size={20} color="#FFFFFF" />
						</TouchableOpacity>
					</View>
				</View>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		marginBottom: 30,
		marginHorizontal: 22,
		padding: 20,

		borderWidth: 1.5,
		borderColor: "#47896D",
		borderRadius: 10,

		backgroundColor: "#FFFFFF",

		// Shadow
		shadowOffset: { width: 0, height: 13 },
		shadowOpacity: 0.3,
		shadowRadius: 6,

		// android (Android +5.0)
		elevation: 3,
	},
	imageContainer: {
		borderRadius: 10,
		overflow: "hidden",
		alignSelf: "center",
		marginBottom: 10,
	},
	image: {
		height: 135,
		width: 155,
	},
	expiry: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "flex-end",
		marginBottom: 10,
	},
	expirationText: {
		fontSize: 10,
		color: "#47896D",
		textAlign: "right",
	},
	valuesSaveContainer: {
		flexDirection: "row",
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
		width: 30,
		height: 30,
		backgroundColor: "#47896D",
		borderRadius: 10,
		marginVertical: 10,
	},
	modalContainer: {
		flex: 1,
		margin: 50,
		alignItems: "center",
		justifyContent: "center",
	},
	modalText: {
		color: "#47896D",
		margin: 40,
	},
	modalContents: {
		width: "100%",
		height: 250,
		backgroundColor: "#E4EBE8",
		justifyContent: "center",
		alignItems: "center",
	},
	modalButtonsContainer: {
		flex: 1,
		flexDirection: "row",
		alignItems: "flex-end",
		width: "100%",
		marginTop: 40,
	},
	cancelButton: {
		flex: 1,
		backgroundColor: "#FFFFFF",
		height: "100%",
		alignItems: "center",
		justifyContent: "center",
	},
	submitButton: {
		flex: 1,
		backgroundColor: "#47896D",
		height: "100%",
		alignItems: "center",
		justifyContent: "center",
	},
});
