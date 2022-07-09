import { StyleSheet, Switch, Text, ScrollView, View, TouchableOpacity, TextInput, Image } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import React, { useState }  from "react";
import * as ImagePicker from 'expo-image-picker';
import * as FileSystem from 'expo-file-system';

export default function PostForm({ navigation, route }) {
	const [isEnabled, setIsEnabled] = useState(false);
  	const toggleSwitch = () => setIsEnabled(previousState => !previousState);
	const [nameOfFood, setNameOfFood] = React.useState("");
	const [location, setLocation] = React.useState("");
	const [cookedBy, setCookedBy] = React.useState("");
	const [contactNumber, setContactNumber] = React.useState(null);
	const [selectedImage, setSelectedImage] = React.useState(null);

	let openImagePickerAsync = async () => {
		let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
	
		if (permissionResult.granted === false) {
		  alert("Permission to access camera roll is required!");
		  return;
		}
	
		let pickerResult = await ImagePicker.launchImageLibraryAsync();
		
		if (pickerResult.cancelled === true) {
			return;
		}

		const base64 = await FileSystem.readAsStringAsync(pickerResult.uri, { encoding: 'base64' });

		console.log(base64)
		  
		setSelectedImage({ localUri: pickerResult.uri });
	}

	return (
		<View style={styles.container}>	
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
				{selectedImage !== null ? 
				<TouchableOpacity style={styles.imageTouchable} onPress={openImagePickerAsync}>
					<Image source={{ uri: selectedImage.localUri }} style={styles.thumbnail}/> 
				</TouchableOpacity>
					: 
					<TouchableOpacity style={styles.imageButton} onPress={openImagePickerAsync}>
						<Icon
							name={"add"}
							style={styles.icon}
							color="#47896D"
						/>
						<Text style={styles.imageText}>Click to upload picture</Text>
					</TouchableOpacity>
				}	
				
				
				{/* Start of Form */}
				<View style={styles.textInput}>
					<Text style={styles.inputText}>Name of Food:</Text>
					<TextInput
						placeholder='Key in the name of the food'
						style={styles.input}
						autoCapitalize='words'
						onChangeText={setNameOfFood}
						value={nameOfFood}
					/>
				</View>
				<View style={styles.textInput}>
					<Text style={styles.inputText}>Location:</Text>
					<TextInput
						placeholder='Key in your address'
						style={styles.input}
						autoCapitalize='words'
						onChangeText={setLocation}
						value={location}
					/>
				</View>
				<View style={styles.textInput}>
					<Text style={styles.inputText}>Cooked By:</Text>
					<TextInput
						placeholder='Key in your name'
						style={styles.input}
						autoCapitalize='words'
						onChangeText={setCookedBy}
						value={cookedBy}
					/>
				</View>
				<View style={styles.textInput}>
					<Text style={styles.inputText}>Contact Number:</Text>
					<TextInput
						placeholder='Key in your number'
						style={styles.input}
						autoCapitalize='words'
						onChangeText={setContactNumber}
						value={contactNumber}
						keyboardType='numeric'
					/>
				</View>
			</ScrollView>
			<TouchableOpacity
				style={styles.addFoodButton}
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
	},
	switchButton: {
		margin: 5,
		padding: 10,
		flexDirection: "row",
		justifyContent: "flex-end",
		alignItems: "flex-center",
	},
	switchText: {
		paddingTop: 6,
		paddingRight: 5,
		color: "#47896D",
		fontWeight: "bold"
	},
	imageButton: {
		flex: 1,
		backgroundColor: "#FFFFFF",
		borderRadius: 10,
		justifyContent: "center",
		alignItems: "center",
		color: "#47896D",
		flexDirection: "row",
		borderWidth: 1,
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
		elevation: 3
	},
	imageText: {
		color: "#47896D",
		fontSize: 10
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
		fontWeight: "bold"
	},
	input: {
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
		marginTop: 10,
		fontSize: 12,

        // Shadow
		shadowOffset: { width: 0, height: 1 },
		shadowOpacity: 0.2,
		shadowRadius: 3,

		// android (Android +5.0)
		elevation: 3
	  },
	  inputText: {
		color: "#47896D",
		fontSize: 10,
		marginLeft: 10	
	  },
	  textInput: {
		  marginTop: 20,
          marginLeft: 20,
          marginRight: 20
	  },
	  thumbnail: {
		borderRadius: 10,
		height: '100%',
		width: '100%'
	  },
	  imageTouchable: {
		alignItems: 'center',
		marginLeft: 40,
		marginRight: 40
	}
});
