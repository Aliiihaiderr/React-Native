import React from 'react';
import ChevronLeft from '../../assets/icons/ChevronLeft';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const BackNavigation = ({}) => {
  const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <View style={styles.headingBox}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <ChevronLeft size={31} color="#424242" />
        </TouchableOpacity>
        <Text style={styles.content}>
          By Cuisine
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    borderBottomWidth: 2,
    borderColor: '#F0F0F0'
  },
  headingBox: {
    flexDirection: 'row',
    gap: 8,
    alignItems: 'center'
  },
  content: {
    fontSize: 24,
    color: '#424242',
    fontFamily: 'Inter-SemiBold',
  }
})

export default BackNavigation;
