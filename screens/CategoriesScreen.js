import { View, Text, FlatList } from 'react-native'
import React from 'react'
import { CATEGORIES } from '../data/dummyData';
import CategoryGridTile from '../components/CategoryGridTile';




const CategoriesScreen = ({navigation}) => {


    const renderCategoryItem = (itemData) => {
        const pressHandler = () => {
            navigation.navigate('MealsOverview');
        }

        return <CategoryGridTile 
            title={itemData.item.title} 
            color={itemData.item.color} 
            onPress={pressHandler} />
    }
  
    return (
    <FlatList 
        data={CATEGORIES} 
        keyExtractor={(item) => item.id} 
        renderItem={renderCategoryItem} 
        numColumns={2}    
    />
  )
}

export default CategoriesScreen