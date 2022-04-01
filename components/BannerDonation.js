import * as React from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity, Linking } from "react-native";
import { useFonts } from "expo-font";

export default function CardsSwip() {

  const [loaded] = useFonts({
    NunitoBold: require("../assets/fonts/Nunito-Bold.ttf"),
    NunitoRegular: require("../assets/fonts/Nunito-Regular.ttf"),
    NunitoBlack: require("../assets/fonts/Nunito-Black.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <View style={styles.contbanner}>
      <Image
        style={styles.imagebanner}
        source={require("../assets/donate.png")}
      />
      <Text style={styles.subtitle}>Lorem ipsum dolor sit amet</Text>
      <Text style={styles.parrafo}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit
        amet rhoncus eros.
      </Text>
      <TouchableOpacity
          style={styles.button}
          onPress={() =>
            Linking.openURL(
              "https://www.paypal.com/donate/?hosted_button_id=Y4JX6WSVBD3L4"
            )
          }
          title="Donar con Paypal"
        >
          <Text style={styles.textbutton}>Donar con Paypal</Text>
        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  contbanner: {
    textAlign: "center",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    zIndex: 1,
    position: "absolute",
    bottom: 20,
    paddingHorizontal: "10%",
  },
  imagebanner: {
    width: 100,
    resizeMode: "contain",
  },
  subtitle: {
    fontSize: 14,
    fontFamily: "NunitoBold",
    textTransform: "uppercase",
    color: "#2B2B2B",
    textAlign: "center",
  },
  parrafo: {
    fontFamily: "NunitoRegular",
    fontSize: 12,
    marginTop: 5,
    textAlign: "center",
  },
  button: {
    borderColor: "#61ADE0",
    borderWidth: 1,
    width: "80%",
    padding: 10,
    marginTop: 20,
    marginBottom: 20,
    borderRadius: 50,
  },
  textbutton: {
    fontFamily: "NunitoBlack",
    color: "#61ADE0",
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
    textTransform: "uppercase",
  },
});
