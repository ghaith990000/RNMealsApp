import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { MEALS } from '../data/dummyData'



const MealsOverviewScreen = () => {
  return (
    <View style={styles.container}>
      <Text>MealsOverviewScreen</Text>
    </View>
  )
}

export default MealsOverviewScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16
    }
})