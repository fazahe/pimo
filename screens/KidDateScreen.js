import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from "react-native";
import HeaderScreen from "../components/HeaderScreen";
import * as Speech from "expo-speech";
import { useFonts } from 'expo-font';

const KidDateScreen = ({ navigation }) => {

  const [text, onChangeText] = React.useState("");
  const thingToSay = text;

  const [loaded] = useFonts({
    NunitoBold: require('../assets/fonts/Nunito-Bold.ttf'),
    NunitoRegular: require('../assets/fonts/Nunito-Regular.ttf'),
    NunitoBlack: require('../assets/fonts/Nunito-Black.ttf'),
  });
  
  if (!loaded) {
    return null;
  }

  return (
    <View style={styles.globalcont}>
      <HeaderScreen></HeaderScreen>
      <View style={styles.container}>
        <Image
          style={styles.imgdate}
          source={require("../assets/kids-all.png")}
        />
        <Text style={styles.title}>Lorem ipsum dolor sit amet</Text>
        <Text style={styles.parrafo}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit
          amet rhoncus eros.
        </Text>
        {/* <View style={styles.contavatar}>
          <TouchableOpacity style={styles.buttonavatar}>
            <Image
              style={styles.buttonimage}
              source={require("../assets/kid-1.png")}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonavatar}>
            <Image
              style={styles.buttonimage}
              source={require("../assets/kid-2.png")}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonavatar}>
            <Image
              style={styles.buttonimage}
              source={require("../assets/kid-3.png")}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonavatar}>
            <Image
              style={styles.buttonimage}
              source={require("../assets/kid-4.png")}
            />
          </TouchableOpacity>
        </View>*/}
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
          placeholder="¿Cual es el nombre de tu hijo / hija?"
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            Speech.speak("¡Hola!" + thingToSay + "¿Vamos a jugar?"),
              navigation.navigate("DashboardUser", { nombre: thingToSay });
          }}
        >
          <Text style={styles.textbutton}>Finalizar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default KidDateScreen;

const styles = StyleSheet.create({
  imgdate: {
    width: "100%",
    resizeMode: "contain",
    maxWidth: 400,
  },
  globalcont: {
    flex: 1,
    backgroundColor: "#fff",
  },
  container: {
    flex: 3,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
  },
  image: {
    resizeMode: "contain",
    width: 200,
  },
  title: {
    fontSize: 18,
    marginBottom: 10,
    textTransform: "uppercase",
    color: "#2B2B2B",
    fontFamily: 'NunitoBlack',
  },
  parrafo: {
    fontSize: 14,
    marginBottom: 30,
    textAlign: "center",
    width: "80%",
    color: "#2B2B2B",
    fontFamily: 'NunitoRegular',
  },
  button: {
    borderColor: "#7CC8C2",
    borderWidth: 1,
    width: "80%",
    padding: 15,
    borderRadius: 50,
  },
  textbutton: {
    color: "#7CC8C2",
    textAlign: "center",
    fontSize: 16,
    fontFamily: 'NunitoBlack',
    textTransform: "uppercase",
  },
  contavatar: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "80%",
  },
  buttonavatar: {
    borderColor: "#7CC8C2",
    borderWidth: 1,
    width: "24%",
    height: 80,
  },
  buttonimage: {
    width: "100%",
    resizeMode: "contain",
    marginTop: -35,
  },
  input: {
    borderColor: "#ccc",
    borderBottomWidth: 1,
    width: "80%",
    padding: 10,
    textAlign: "center",
    marginTop: 20,
    marginBottom: 20,
    fontSize: 20,
    fontFamily: 'NunitoBlack',

  },
});
