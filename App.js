import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import {createStackNavigator, HeaderTitle} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Screen1 from './Screens/Screen1.js';
import Screen2 from './Screens/Screen2.js';

const Stack = createStackNavigator();

const App = props => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="ScreenOne" component={Screen1}/>
        <Stack.Screen name="ScreenTwo" component={Screen2}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row'
  },
  searchBox: {
    flex: 1,
    borderBottomWidth: 1,
  },
  titleText: {
    flex: 1,
    fontSize: 16,
    color: 'blue',
    fontWeight: 'bold'
  },
});
export default App;

// API KEY: http://www.omdbapi.com/?apikey=1fa1c6bb&