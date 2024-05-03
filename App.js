import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CategoriesScreen from './screens/CategoriesScreen';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import MealDetailsScreen from './screens/MealDetailsScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import FavoritesScreen from './screens/FavoritesScreen';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();


const DrawerNavigator = () =>  {
  return <Drawer.Navigator 
  screenOptions={{
    headerStyle: { backgroundColor: '#351401'},
    headerTintColor: 'white',
    sceneContainerStyle: {backgroundColor: '#3f2f25'}
   }} 
  >
    <Drawer.Screen name="Categories" component={CategoriesScreen} options={{
      title: 'All Catgories'
    }} />
    <Drawer.Screen name="Favorites" component={FavoritesScreen} />
  </Drawer.Navigator>
}

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator 
          screenOptions={{
           headerStyle: { backgroundColor: '#351401'},
           headerTintColor: 'white',
           contentStyle: {backgroundColor: '#3f2f25'}
          }} 
          >
          <Stack.Screen 
            name="Drawer" 
            component={DrawerNavigator} 
            options={{
              headerShown: false
            }}
          />
          <Stack.Screen 
            name="MealDetail" 
            component={MealDetailsScreen} 
            options={{
              title: 'About the Meal'
            }}
            
          /> 
          <Stack.Screen 
            name="MealsOverview" 
            component={MealsOverviewScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
