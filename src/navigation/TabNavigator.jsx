// src/navigation/TabNavigator.js
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import AboutStack from './AboutStack';
import Screen2 from '../screens/Screen2';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'AboutTab') {
            iconName = focused ? 'information-circle' : 'information-circle-outline';
          } else if (route.name === 'Menu') {
            iconName = focused ? 'list' : 'list-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'red',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen name="AboutTab" component={AboutStack} options={{ title: 'About' }} />
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Menu" component={Screen2} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
