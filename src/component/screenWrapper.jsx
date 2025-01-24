import React from 'react'
import { StatusBar, StyleSheet, View, Platform, Dimensions } from 'react-native'
import { heightPercentageToDP } from 'react-native-responsive-screen'
import { SafeAreaView } from 'react-native-safe-area-context'

const { width, height } = Dimensions.get('window')

export default function ScreenWrapper({ children, backgroundColor = '#000000' }) {
  return (
    <SafeAreaView style={[styles.container, { backgroundColor }]}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle={Platform.OS === 'ios' ? 'dark-content' : 'light-content'}
      />
      {children}
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal:heightPercentageToDP(2),
    paddingTop:heightPercentageToDP(1)
  },
})
