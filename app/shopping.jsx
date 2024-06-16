import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Slot, Link } from 'expo-router';
import { StatusBar } from 'react-native-web';
import 'expo-router'; 

const shopping = () => {
  return (
    <View style={styles.container}>
      <ImageBackground source={'./assets/image/background.png'} style={styles.image}>
        <Text style={styles.text}>Termék</Text>
        <Text style={styles.text}>Termék</Text>
        <Text style={styles.text}>Termék</Text>
        </ImageBackground>
        <View>
        <StatusBar style="auto"/>
        <Link href="/delivery" style={{color: 'blue'}}>Go to Delivery</Link>
        </View>
        
      
    </View>
  )
}

export default shopping

const styles = StyleSheet.create({})