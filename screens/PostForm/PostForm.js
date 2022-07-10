import {
	StyleSheet,
	Switch,
	Text,
	ScrollView,
	View,
	TouchableOpacity,
	TextInput,
	Image,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import React, { useState } from "react";
import * as ImagePicker from "expo-image-picker";
import * as FileSystem from "expo-file-system";
import Modal from "react-native-modal";

export default function PostForm({ navigation, route }) {
	const [isEnabled, setIsEnabled] = useState(false);
	const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
	const [nameOfFood, setNameOfFood] = React.useState("");
	const [location, setLocation] = React.useState("");
	const [cookedBy, setCookedBy] = React.useState("");
	const [contactNumber, setContactNumber] = React.useState(null);
	const [selectedImage, setSelectedImage] = React.useState(null);

	// Code for submit modal
	var pin = (Math.floor(Math.random() * 10000) + 10000).toString().substring(1);
	const [isSubmitModalVisible, setSubmitModalVisible] = useState(false);
	const toggleSubmitModal = () => {
		setSubmitModalVisible(!isSubmitModalVisible);
	};
	const submitPin = () => {
		toggleSubmitModal();
		return togglePINModal();
	};
	// Code for display PIN modal
	const [isPINModalVisible, setPINModalVisible] = useState(false);
	const togglePINModal = () => {
		setPINModalVisible(!isPINModalVisible);
	};
	const confirmRemember = () => {
		togglePINModal();
		return navigation.navigate("Home");
	};

	let openImagePickerAsync = async () => {
		let permissionResult =
			await ImagePicker.requestMediaLibraryPermissionsAsync();

		if (permissionResult.granted === false) {
			alert("Permission to access camera roll is required!");
			return;
		}

		let pickerResult = await ImagePicker.launchImageLibraryAsync();

		if (pickerResult.cancelled === true) {
			return;
		}

		const base64 = await FileSystem.readAsStringAsync(pickerResult.uri, {
			encoding: "base64",
		});

		setSelectedImage({ localUri: pickerResult.uri });
	};

	return (
		<View style={styles.container}>
			{/* Submit modal */}
			<Modal isVisible={isSubmitModalVisible} style={styles.modalContainer}>
				<View style={styles.modalContents}>
					<Text style={[styles.modalText, { fontWeight: "bold" }]}>
						Are you sure you want to submit this food item?
					</Text>
					<Text style={styles.modalText}>
						<Text>You will be given a </Text>
						<Text style={{ fontWeight: "bold" }}>4-digit PIN </Text>
						<Text>to make any edits after submitting this food item.</Text>
					</Text>
					<View style={styles.modalButtonsContainer}>
						<TouchableOpacity
							onPress={toggleSubmitModal}
							style={styles.cancelButton}
						>
							<Text style={{ color: "#47896D" }}>Cancel</Text>
						</TouchableOpacity>
						<TouchableOpacity onPress={submitPin} style={styles.submitButton}>
							<Text style={{ color: "#FFFFFF" }}>Submit PIN</Text>
						</TouchableOpacity>
					</View>
				</View>
			</Modal>

			{/* Pin modal */}
			<Modal isVisible={isPINModalVisible} style={styles.modalContainer}>
				<View style={styles.modalContents}>
					<Text style={styles.modalText}>
						<Text>Your PIN is: </Text>
						<Text style={{ fontWeight: "bold" }}>{pin}</Text>
					</Text>
					<Text style={styles.modalText}>
						<Text>
							Please ensure that you have remembered the PIN before proceeding
							as{" "}
						</Text>
						<Text style={{ fontWeight: "bold" }}>NO </Text>
						<Text>edits could be made without the PIN.</Text>
					</Text>
					<View style={styles.modalButtonsContainer}>
						<TouchableOpacity
							onPress={confirmRemember}
							style={styles.submitButton}
						>
							<Text style={{ color: "#FFFFFF" }}>
								I have remembered the PIN.
							</Text>
						</TouchableOpacity>
					</View>
				</View>
			</Modal>

			<ScrollView>
				{/* Switch */}
				<View style={styles.switchButton}>
					<Text style={styles.switchText}>Halal</Text>
					<Switch
						trackColor={{ false: "#d9d9d9", true: "#47896D" }}
						thumbColor={"#ffffff"}
						ios_backgroundColor="#d9d9d9"
						onValueChange={toggleSwitch}
						value={isEnabled}
					/>
				</View>

				{/* Add image Button */}
				{selectedImage !== null ? (
					<TouchableOpacity
						style={styles.imageContainer}
						onPress={openImagePickerAsync}
					>
						<Image
							source={{ uri: selectedImage.localUri }}
							style={styles.image}
						/>
					</TouchableOpacity>
				) : (
					<TouchableOpacity
						style={styles.imageButton}
						onPress={openImagePickerAsync}
					>
						<Icon name={"add"} style={styles.icon} color="#47896D" />
						<Text style={styles.imageText}>Click to upload picture</Text>
					</TouchableOpacity>
				)}

				{/* Start of Form */}
				<View style={styles.textInput}>
					<Text style={styles.inputText}>Name of Food:</Text>
					<TextInput
						placeholder="Key in the name of the food"
						placeholderTextColor={"rgba(71, 137, 109, 0.75)"}
						style={styles.input}
						autoCapitalize="words"
						onChangeText={setNameOfFood}
						value={nameOfFood}
					/>
				</View>
				<View style={styles.textInput}>
					<Text style={styles.inputText}>Location:</Text>
					<TextInput
						placeholder="Key in your address"
						placeholderTextColor={"rgba(71, 137, 109, 0.75)"}
						style={styles.input}
						autoCapitalize="words"
						onChangeText={setLocation}
						value={location}
					/>
				</View>
				<View style={styles.textInput}>
					<Text style={styles.inputText}>Cooked By:</Text>
					<TextInput
						placeholder="Key in your name"
						placeholderTextColor={"rgba(71, 137, 109, 0.75)"}
						style={styles.input}
						autoCapitalize="words"
						onChangeText={setCookedBy}
						value={cookedBy}
					/>
				</View>
				<View style={styles.textInput}>
					<Text style={styles.inputText}>Contact Number:</Text>
					<TextInput
						placeholder="Key in your number"
						placeholderTextColor={"rgba(71, 137, 109, 0.75)"}
						style={styles.input}
						autoCapitalize="words"
						onChangeText={setContactNumber}
						value={contactNumber}
						keyboardType="numeric"
					/>
				</View>
			</ScrollView>
			<TouchableOpacity
				style={styles.addFoodButton}
				onPress={toggleSubmitModal}
			>
				<Text style={styles.addFoodText}>Submit Food Item</Text>
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
		fontSize: 20,
	},
	switchButton: {
		marginVertical: 10,
		marginHorizontal: 20,
		flexDirection: "row",
		justifyContent: "flex-end",
		alignItems: "center",
	},
	switchText: {
		paddingRight: 5,
		color: "#47896D",
		fontWeight: "bold",
	},
	imageButton: {
		flex: 1,
		backgroundColor: "#FFFFFF",
		borderRadius: 10,
		justifyContent: "center",
		alignItems: "center",
		color: "#47896D",
		flexDirection: "row",
		borderWidth: 1.5,
		borderColor: "#47896D",
		padding: 50,
		marginTop: 10,
		marginBottom: 10,
		marginLeft: 40,
		marginRight: 40,

		// Shadow
		shadowOffset: { width: 0, height: 1 },
		shadowOpacity: 0.2,
		shadowRadius: 3,

		// android (Android +5.0)
		elevation: 3,
	},
	imageText: {
		color: "#47896D",
		fontSize: 12,
		fontWeight: "500",
	},
	addFoodButton: {
		height: 60,
		backgroundColor: "#47896D",
		justifyContent: "center",
		alignItems: "center",
	},
	addFoodText: {
		color: "#FFFFFF",
		fontSize: 16,
		fontWeight: "bold",
	},
	input: {
		flex: 1,
		backgroundColor: "#FFFFFF",
		borderRadius: 10,
		justifyContent: "center",
		alignItems: "center",
		color: "#47896D",
		flexDirection: "row",
		borderWidth: 1.5,
		borderColor: "#47896D",
		padding: 13,
		marginTop: 10,
		fontSize: 12,

		// Shadow
		shadowOffset: { width: 0, height: 1 },
		shadowOpacity: 0.2,
		shadowRadius: 3,

		// android (Android +5.0)
		elevation: 3,
	},
	inputText: {
		color: "#47896D",
		fontSize: 12,
		marginLeft: 10,
	},
	textInput: {
		marginTop: 20,
		marginLeft: 20,
		marginRight: 20,
	},
	thumbnail: {
		borderRadius: 10,
		height: "100%",
		width: "100%",
	},
	imageContainer: {
		borderRadius: 10,
		overflow: "hidden",
		alignSelf: "center",
		marginBottom: 10,

		borderWidth: 1.5,
		borderColor: "#47896D",
	},
	image: {
		height: 135,
		width: 155,
	},
	modalContainer: {
		flex: 1,
		margin: 50,
		alignItems: "center",
	},
	modalText: {
		color: "#47896D",
		paddingTop: 20,
		paddingHorizontal: 20,
		width: "100%",
	},
	modalContents: {
		width: "100%",
		height: 220,
		backgroundColor: "#E4EBE8",
		justifyContent: "center",
		alignItems: "center",
	},
	modalButtonsContainer: {
		flex: 1,
		flexDirection: "row",
		alignItems: "flex-end",
		width: "100%",
		paddingTop: 20,
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
