import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {Slot} from 'expo-router';

const delivers = () => {
  return (
    <View style={styles.container}>
    <ImageBackground source={'./assets/image/background.png'} style={styles.image}>
      <Text style={styles.text}>Termék</Text>
      <Text style={styles.text}>Termék</Text>
      <Text style={styles.text}>Termék</Text>
    </ImageBackground>
  </View>
  )
}

export default delivers

const styles = StyleSheet.create({})