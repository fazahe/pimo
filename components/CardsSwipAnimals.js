import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import SwipeCards from "react-native-swipe-cards";
import * as Speech from "expo-speech";

class Card extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.card}>
        <TouchableOpacity
          style={styles.iconaudio}
          onPress={() => {
            Speech.speak(this.props.text);
          }}
        >
          <Image
            style={styles.iconaudioimage}
            source={require("../assets/audio.png")}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.contcards}
          onPress={() => {
            Speech.speak(this.props.text);
          }}
        >
          <Text style={styles.iconcard}>{this.props.icon}</Text>
          <Image style={styles.deccard} source={require("../assets/dec.png")} />
          <Text style={styles.textcard}>{this.props.text}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [
        /*Animales*/
        { text: "Perro", icon: "πΆ" },
        { text: "Gato", icon: "π±" },
        { text: "RatΓ³n", icon: "π­" },
        { text: "Caballo", icon: "π" },
        { text: "Camello", icon: "π«" },
        { text: "JabalΓ­", icon: "π" },
        { text: "Conejo", icon: "π°" },
        { text: "Rana", icon: "πΈ" },
        { text: "Pollo", icon: "π" },
        { text: "Oso", icon: "π»" },
        { text: "Oso panda", icon: "πΌ" },
        { text: "Koala", icon: "π¨" },
        { text: "Zorro", icon: "π¦" },
        { text: "Tigre", icon: "π―" },
        { text: "LeΓ³n", icon: "π¦" },
        { text: "Vaca", icon: "π" },
      ],
    };
  }

  render() {
    return (
      <SwipeCards
        cards={this.state.cards}
        loop={true}
        renderCard={(cardData) => <Card {...cardData} />}
        showYup={false}
        showNope={false}
        onClickHandler={false}
      />
    );
  }
}

const styles = StyleSheet.create({
  contcards: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },
  card: {
    justifyContent: "center",
    alignItems: "center",
    width: 300,
    height: 250,
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
  },
  iconcard: {
    fontSize: 150,
    marginBottom: 10,
    marginTop: -20,
    zIndex: 2,
  },
  textcard: {
    fontSize: 22,
    fontFamily: "NunitoBlack",
    textTransform: "uppercase",
    color: "#2B2B2B",
    textAlign: "center",
  },
  iconaudio: {
    position: "absolute",
    top: 15,
    right: 15,
    width: 30,
    height: 30,
    borderRadius: 30,
    backgroundColor: "#FFB900",
    alignItems: "center",
    justifyContent: "center",
  },
  iconaudioimage: {
    width: 15,
    resizeMode: "contain",
  },
  deccard: {
    width: 300,
    resizeMode: "contain",
    position: "absolute",
    top: 40,
    zIndex: 1,
  },
});
