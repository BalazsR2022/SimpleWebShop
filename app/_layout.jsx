import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import {Slot} from 'expo-router';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { ImageBackground } from 'react-native-web';
import usermanager from './usermanager';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const RootLayout = () => {
  return (
    <>
  <Text>
  <FontAwesome name="user" size={50} color="black" />
  <MaterialIcons name="shopping-basket" size={24} color="black" />
  </Text>

        <Slot />


  <Text>Footer</Text>
  </>
  )
}

export default RootLayout


