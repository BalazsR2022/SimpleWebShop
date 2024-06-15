import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { ImageBackground } from 'react-native-web';


export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground source={'./assets/image/background.png'} style={styles.image}>
        <Text style={styles.text}>Üdvözöljük</Text>
        <Text style={styles.text}>csodálatos</Text>
        <Text style={styles.text}>webshopunkban!</Text>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
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
