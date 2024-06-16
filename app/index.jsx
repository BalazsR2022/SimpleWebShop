import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { FontAwesome } from '@expo/vector-icons';
import { Link } from 'expo-router';
import UserManager from './usermanager';


const Stack = createStackNavigator();

const RootLayout = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <FontAwesome.Button
        name="user"
        backgroundColor="#3b5998"
        onPress={() => navigation.navigate('UserManager')}
      >
        Navigate to UserManager
      </FontAwesome.Button>
    </View>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="UserManager" component={UserManager} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const HomeScreen = () => (
  <View style={styles.container}>
    <ImageBackground source={require('../assets/image/background.png')} style={styles.image}>
      <Text style={styles.text}>Üdvözöljük</Text>
      <Text style={styles.text}>csodálatos</Text>
      <Text style={styles.text}>webshopunkban!</Text>
    </ImageBackground>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 42,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#000000a0',
  },
});

export default App;
