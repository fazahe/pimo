import React, { useRef, useEffect } from "react";
import { Text, View, StyleSheet, Image, Animated, TouchableOpacity } from "react-native";
import * as Speech from "expo-speech";


export default function HeaderUser() {

  const anim = useRef(new Animated.Value(1));

  useEffect(() => {
    // makes the sequence loop
    Animated.loop(
      // runs given animations in a sequence
      Animated.sequence([
        // increase size
        Animated.timing(anim.current, {
          toValue: -2,
          duration: 500,
        }),
        // decrease size
        Animated.timing(anim.current, {
          toValue: 2,
          duration: 500,
        }),
      ])
    ).start();
  }, []);

  return (
    <View style={styles.contheader}>
      
        <Image style={styles.avatar} source={require("../assets/kid-1.png")} />
        <Animated.View style={{ transform: [{ translateX: anim.current }] }}>
          <Text style={styles.title}>👋</Text>
        </Animated.View>
        
        <Text style={styles.title}>Renato</Text>

    </View>
  );
}

const styles = StyleSheet.create({
  contheader: {
    textAlign: "center",
    backgroundColor: "#fff",
    position: "absolute",
    top: 80,
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    textTransform: "uppercase",
    color: "#2B2B2B",
    textAlign: "center",
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 100,
    borderWidth: 3,
    borderColor: "#7CC8C2",
    marginBottom: -20,
  },
});
