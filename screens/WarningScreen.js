import React from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import HeaderScreen from "../components/HeaderScreen";
import { useFonts } from 'expo-font';

import * as Localization from 'expo-localization';
import i18n from 'i18n-js';

// Set the key-value pairs for the different languages you want to support.
i18n.translations = {
  es: { alerttitle: '¡Padres recuerden!', alertbody: 'La OMS dicta que los niños menores de 2 años deben estar alejados de cualquier tipo de pantalla.', btnnext: 'Siguiente' },
  en: { alerttitle: 'Parents remember!', alertbody: 'The OMS dictates that children under 2 years of age should be kept away from any type of screen.', btnnext: 'Next' },
  ja: { alerttitle: '守護者は覚えている' },
  zh: { alerttitle: '你好' },
  ru: { alerttitle: 'Привет' },
  fr: { alerttitle: 'Bonjour' },
};
// Set the locale once at the beginning of your app.
i18n.locale = Localization.locale;
// When a value is missing from a language it'll fallback to another language with the key present.
i18n.fallbacks = true;


const WarningScreen = ({ navigation }) => {

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
      <HeaderScreen/>
      <View style={styles.container}>
        <Image style={styles.image} source={require("../assets/padres.png")} />
        <Text style={styles.title}>{i18n.t('alerttitle')}</Text>
        <Text style={styles.parrafo}>
          {i18n.t('alertbody')}
        </Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("KidDateScreen")}
        >
          <Text style={styles.textbutton}>{i18n.t('btnnext')}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default WarningScreen;

const styles = StyleSheet.create({
  globalcont: {
    flex: 1,
    backgroundColor: "#fff",
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    resizeMode: "contain",
    width: 200,
  },
  title: {
    fontFamily: 'NunitoBlack',
    fontSize: 18,
    marginBottom: 10,
    textTransform: "uppercase",
    color: "#2B2B2B",
  },
  parrafo: {
    fontFamily: 'NunitoRegular',
    fontSize: 14,
    marginBottom: 50,
    textAlign: "center",
    width: "80%",
    color: "#2B2B2B",
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
});
