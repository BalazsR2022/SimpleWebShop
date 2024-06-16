// App.jsx

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import RootLayout from './_layout';
import UserManager from './usermanager'; // Példa, ha szükséges

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={RootLayout} />
        <Stack.Screen name="UserManager" component={UserManager} />
        {/* További képernyők itt */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
