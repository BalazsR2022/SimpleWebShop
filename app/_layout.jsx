// _layout.jsx

import React from 'react';
import { StyleSheet, Text, View, ImageBackground, StatusBar, TouchableOpacity } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';
import { Link } from 'expo-router';
import { useMediaQuery } from 'react-responsive';

const RootLayout = ({ navigation }) => {
  const isSmallScreen = useMediaQuery({ maxWidth: 600 });

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.safeArea}>
        <View style={[styles.header, isSmallScreen && styles.headerSmall]}>
          <TouchableOpacity onPress={() => navigation.navigate('UserManager')} style={styles.icon}>
            <FontAwesome name="user" size={isSmallScreen ? 24 : 30} color="black" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Basket')} style={styles.icon}>
            <MaterialIcons name="shopping-basket" size={isSmallScreen ? 24 : 30} color="black" />
          </TouchableOpacity>
        </View>
        <ImageBackground source={require('../assets/image/background.png')} style={styles.image}>
          <View style={styles.overlay}>
            <FontAwesome name="smile-o" size={isSmallScreen ? 50 : 80} color="white" style={styles.productIcon} />
            <Text style={styles.welcomeText}>Üdvözöljük honlapunkon!</Text>
          </View>
        </ImageBackground>
        <View style={styles.footer}>
          <Link href="/delivery" style={styles.link}>Go to Delivery</Link>
        </View>
        <StatusBar style="auto" />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
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
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 20,
  },
  welcomeText: {
    color: 'white',
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    width: '100%',
    position: 'absolute',
    top: 0,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
  },
  headerSmall: {
    flexDirection: 'column',
  },
  footer: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingVertical: 10,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  link: {
    color: 'blue',
  },
  icon: {
    marginHorizontal: 10,
  },
  productIcon: {
    marginBottom: 10,
  },
});

export default RootLayout;
