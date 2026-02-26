import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import RootStackNavigation from './src/navigations/RootStackNavigation'

const App = () => {
  return (
    <NavigationContainer>
      <RootStackNavigation />
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})