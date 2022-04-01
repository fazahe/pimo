import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default function HeaderScreen() {
  return (
    <View style={styles.contheader}>
      <Image
        style={styles.logo}
        source={require('../assets/logo.png')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  contheader: {
    textAlign: "center",
    backgroundColor: "#fff",
    top: 0,
    left: 0,
    width: "100%",
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: -20,
  },
  logo: {
    width: 100,
    resizeMode: 'contain',
  },
});
