import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Buttong } from 'react-native-web'

const finish = () => {
  return (
    <View>
      <Text>számlázási cím</Text>
      <Text>szállítási cím</Text>
      <Text>termékek</Text>
      <Text>végösszeg</Text>
      <Text>finish</Text>
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
  )
}

export default finish

const styles = StyleSheet.create({})