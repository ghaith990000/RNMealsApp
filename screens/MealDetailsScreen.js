import { View, Text } from 'react-native'
import React from 'react'

const MealDetailsScreen = ({route}) => {
    const mealId = route.params.mealId;
  return (
    <View>
      <Text>MealDetailsScreen ({mealId})</Text>
    </View>
  )
}

export default MealDetailsScreen