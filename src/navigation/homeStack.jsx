import React from 'react';
import { StyleSheet, View } from 'react-native';
import Home from '../screens/Home';
import Screen2 from '../screens/Screen2';
import About from '../screens/About';
import TabNavigator from './TabNavigator';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false, animation: 'default', }}>
        <Stack.Screen name="Tabs" component={TabNavigator} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({})

export default HomeStack;
