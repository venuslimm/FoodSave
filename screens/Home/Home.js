import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  Platform,
  StatusBar,
} from "react-native";
import React from "react";
import Item from "./Item";
import Icon from "react-native-vector-icons/MaterialIcons";

const axios = require("axios").default;

export default function Home({ navigation }) {
  return (
    <>
      <View
        style={[
          {
            paddingTop:
              Platform.OS === "ios" ? 10 : StatusBar.currentHeight + 10,
            height: Platform.OS === "ios" ? 68 : StatusBar.currentHeight + 68,
          },
          styles.header,
        ]}
      >
        <Image
          style={{
            width: 380,
            height: 50,
            resizeMode: "contain",
            marginHorizontal: 10,
          }}
          source={require("../../assets/logo.png")}
        />
      </View>

      <View style={styles.divider}></View>

      <View style={styles.container}>
        <ScrollView>
          <View style={styles.topTools}>
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
              <Text style={styles.saveText}>Saved</Text>
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
    </>
  );
}

const styles = StyleSheet.create({
  header: {
    alignItems: "center",
    backgroundColor: "#FFFFFF",

    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,

    elevation: 3,
  },
  divider: {
    height: 1.5,
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    elevation: 3,
  },
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  topTools: {
    flexDirection: "row",
    flex: 1,
    marginHorizontal: 20,
    marginVertical: 15,
    alignItems: "center",
    justifyContent: "space-between",
  },
  icon: {
    fontSize: 15,
    marginRight: 5,
  },
  filterButton: {
    backgroundColor: "#47896D",
    borderRadius: 10,
    height: 25,
    width: 74,
    justifyContent: "center",
    alignItems: "center",
    color: "#FFFFFF",
    flexDirection: "row",
    paddingHorizontal: 17,
    paddingVertical: 3,
  },
  filterText: {
    color: "#FFFFFF",
    fontSize: 12,
  },
  saveButton: {
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    height: 25,
    width: 74,
    justifyContent: "center",
    alignItems: "center",
    color: "#FFFFFF",
    flexDirection: "row",
    paddingHorizontal: 17,
    paddingVertical: 3,
    borderWidth: 1,
    borderColor: "#47896D",
  },
  saveText: {
    color: "#47896D",
    fontSize: 12,
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
