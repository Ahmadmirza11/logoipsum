import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native';

export default function Splash() {
    const navigation=useNavigation()
    useEffect(()=>{
        setTimeout(() => {
            navigation.navigate("onboarding")
        }, 3000);
    },[])
  return (
    <View  style={styles.container}>
      <Text>vsxg</Text>
      <Text>vsxg</Text>
      <Text>vsxg</Text>
      <Text>vsxg</Text>
      <Text>vsxg</Text>
      <Text>vsxg</Text>
      <Text>vsxg</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
    flex: 1,
  }
})
