import { StyleSheet, Text, View, ImageBackground, StatusBar } from 'react-native';
import React from 'react';
import { Link } from 'expo-router';

const Delivers = () => {
  return (
    <View style={styles.container}>
      <ImageBackground source={require('../assets/image/background.png')} style={styles.image}>
        <Text style={styles.text}>Termék</Text>
        <Text style={styles.text}>Termék</Text>
        <Text style={styles.text}>Termék</Text>
      </ImageBackground>
      <View style={styles.linkContainer}>
        <StatusBar style="auto"/>
        <Link href="/shopping" style={styles.link}>Go to Shopping</Link>
      </View>
    </View>
  );
};

export default Delivers;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  text: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
  linkContainer: {
    position: 'absolute',
    bottom: 20,
    left: 20,
  },
  link: {
    color: 'blue',
    fontSize: 18,
  },
});
