import { StyleSheet, Text, View, ImageBackground, StatusBar } from 'react-native'
import React from 'react'
import {Slot} from 'expo-router';
import { Link } from 'expo-router';


const usermanager = () => {
  return (
    <View style={styles.container}>
    <ImageBackground source={'./assets/image/background.png'} style={styles.image}>
      <Text style={styles.text}>Név</Text>
      <Text style={styles.text}>Szállítási cím</Text>
      <Text style={styles.text}>Számlázási cím</Text>
    </ImageBackground>
      <View>
        <StatusBar style="auto"/>
        <Link href="/shopping" style={{color: 'blue'}}>Go to Shopping</Link>
    
      </View>
  </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    color: 'white',
  },
});

export default usermanager

