import React, { useRef, useEffect } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  Image,
  Animated,
  TouchableOpacity,
  Linking,
} from "react-native";
import * as Speech from "expo-speech";
import BannerDonation from "../components/BannerDonation";
import { useFonts } from "expo-font";
import CardsSwip from "../components/CardsSwip";

const DashboardVehicle = ({ navigation }) => {
  const [loaded] = useFonts({
    NunitoBold: require("../assets/fonts/Nunito-Bold.ttf"),
    NunitoRegular: require("../assets/fonts/Nunito-Regular.ttf"),
    NunitoBlack: require("../assets/fonts/Nunito-Black.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity
          style={styles.buttonhome}

          onPress={() => {
            Speech.speak("Selecciona una nueva categoría"),
            navigation.goBack();
          }}
        >
          <Text style={styles.texthome}>🏠 inicio</Text>
        </TouchableOpacity>
      <View style={styles.contheader}>
        <Image style={styles.logo} source={require("../assets/logo.png")} />

        <TouchableOpacity
          style={styles.buttonheader}
          onPress={() =>
            Linking.openURL(
              "mailto:hello@fabiancreativo.com?subject=¿Necesitas ayuda o tienes una sugerencia para Pimo?&body=Hola, te escribo para lo siguiente..."
            )
          }
          title="hello@fabiancreativo.com"
        >
          <Text style={styles.textbuttonheader}>?</Text>
        </TouchableOpacity>

        <Image style={styles.avatar} source={require("../assets/kid-1.png")} />

        
      </View>
      <CardsSwip style={styles.card}></CardsSwip>

      <BannerDonation style={styles.banner}></BannerDonation>
    </View>
  );
};

export default DashboardVehicle;

const styles = StyleSheet.create({
  actionavatar: {
    width: "80%",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  },
  deccard: {
    width: 50,
    resizeMode: "contain",
    position: "absolute",
    top: -45,
    zIndex: 1,
  },
  namecateg: {
    fontSize: 14,
    marginTop: 10,
    fontFamily: "NunitoBold",
  },
  titlecat: {
    fontSize: 16,
    fontFamily: "NunitoBlack",
    marginBottom: 20,
    marginTop: -50,
    textTransform: "uppercase",
  },
  contcategories: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "80%",
    marginVertical: 5,
  },
  emojicatego: {
    fontSize: 40,
    position: "relative",
    zIndex: 3,
  },
  itemscategories: {
    width: 90,
    height: 90,
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  logo: {
    width: 75,
    position: "absolute",
    left: 20,
    top: -30,
    resizeMode: "contain",
  },
  buttonheader: {
    position: "absolute",
    backgroundColor: "#fff",
    right: 20,
    top: 20,
    textAlign: "center",
    fontWeight: "900",
    width: 30,
    height: 30,
    borderRadius: 50,
    textAlignVertical: "center",
    shadowColor: "#000",
    elevation: 4,
    borderColor: "#7CC8C2",
    borderWidth: 1,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.23,
  },
  textbuttonheader: {
    textAlign: "center",
    fontWeight: "500",
    fontSize: 20,
    marginTop: 3,
  },
  head: {
    zIndex: 1,
    position: "relative",
  },
  card: {
    zIndex: 3,
    position: "relative",
  },
  banner: {
    zIndex: 2,
    position: "relative",
  },
  title: {
    fontSize: 25,
    fontFamily: "NunitoBlack",
    textTransform: "uppercase",
    color: "#2B2B2B",
    textAlign: "center",
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 100,
    borderWidth: 3,
    borderColor: "#7CC8C2",
    marginBottom: -20,
    alignItems: "center",
    justifyContent: "center",
  },
  contheader: {
    textAlign: "center",
    backgroundColor: "#fff",
    position: "absolute",
    top: 50,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  buttonhome: {
    borderColor: "#7CC8C2",
    borderWidth: 1,
    padding: 15,
    borderRadius: 50,
    width: 150,
    position: "absolute",
    zIndex: 1,
    top: 150,

  },
  texthome: {
    color: "#7CC8C2",
    textAlign: "center",
    fontSize: 16,
    fontFamily: 'NunitoBlack',
    textTransform: "uppercase",
  },
});
