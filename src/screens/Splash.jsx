import { Image, StatusBar, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native';

export default function Splash() {
    const navigation=useNavigation()
    useEffect(()=>{
        setTimeout(() => {
            navigation.navigate("Onboard")
        }, 3000);
    },[])
  return (
    <View  style={styles.container}>
      <StatusBar translucent backgroundColor="transparent" barStyle="light-content" />
      <View style={{justifyContent:'center',alignItems:'center',flex:1}}>
        <Image source={require("../images/Logo.png")}/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#739877',
    flex: 1,
  }
})
