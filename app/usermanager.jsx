import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {Slot} from 'expo-router';

const usermanager = () => {
  return (
    <View style={styles.container}>
    <ImageBackground source={'./assets/image/background.png'} style={styles.image}>
      <Text style={styles.text}>Név</Text>
      <Text style={styles.text}>Szállítási cím</Text>
      <Text style={styles.text}>Számlázási cím</Text>
    </ImageBackground>
  </View>
  )
}

export default usermanager

const styles = StyleSheet.create({})