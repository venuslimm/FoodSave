import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import TitleValueText from "./TitleValueText";
import Icon from "react-native-vector-icons/MaterialIcons";

export default function Item() {
  return (
    <View style={styles.container}>
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
            <TouchableOpacity style={styles.itemButton}>
              <Icon name={"edit"} size={20} color="#FFFFFF" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.itemButton}>
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
});
