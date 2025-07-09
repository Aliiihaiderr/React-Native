import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import LogoIcon from '../../assets/icons/logo';
const Content = () => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require('../../assets/images/easy-chef-pro.png')}
          style={styles.image}
          resizeMode="contain"
        />
      </View>
      <View style={styles.contentContainer}>
        <Text style={styles.contentHeading}>
          Continue to access account
        </Text>
        <Text style={styles.contentDescription}>
          If you don’t have an account, we will create one for you.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 48,
  },
  imageContainer: {
    alignItems: 'center'
  },
  contentContainer: {
    alignItems: 'center',
    gap: 8
  },
  contentHeading: {
    fontSize: 24,
    color: '#292929',
  },
  contentDescription: {
    fontSize: 16,
    color: '#A3A3A3',
    textAlign: 'center'
  }
})

export default Content;
