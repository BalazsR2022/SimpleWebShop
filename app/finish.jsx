import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ImageBackground } from 'react-native-web';

const finish = () => {
  return (
    <View>
<View style={styles.container}>
      <ImageBackground source={'./assets/image/background.png'} style={styles.image}>
        <Text style={styles.text}>Számlázási cím</Text>
        <Text style={styles.text}>Szállítási cím</Text>
        <Text style={styles.text}>Termékek</Text>
        <Text style={styles.text}>Végösszeg</Text>
        <Text style={styles.text}>Megrendelem</Text>
        </ImageBackground>
      <div class="field is-grouped">
        <p class="control">
          <a class="button is-primary">
            Save changes
          </a>
        </p>
        <p class="control">
          <a class="button">
            Cancel
          </a>
        </p>
        <p class="control">
          <a class="button is-danger">
            Delete post
          </a>
        </p>
      </div>
    </View>
    
    </View>
  )
}

export default finish

const styles = StyleSheet.create({})