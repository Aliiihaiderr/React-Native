import React from 'react';
import { StyleSheet, View } from 'react-native';
import About from '../screens/About';
import Info from '../screens/Info';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
const AboutStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false, animation: 'default', }}>
        <Stack.Screen name="About" component={About} />
        <Stack.Screen name="Info" component={Info} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({})

export default AboutStack;
