import React from 'react';
import { StyleSheet, View, Text, SafeAreaView } from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Content from './content';
import Inputs from './inputs';

const Login = () => {
  const inset = useSafeAreaInsets()
  return (
    <SafeAreaView style={[styles.container, {paddingTop: inset.top}]}>
      <View style={styles.container}>
        <Content />
        <Inputs />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    flex: 1,
    gap: 60,
    fontFamily: 'Inter-Medium',
    backgroundColor: '#FFFFFF',
    paddingTop: 24,
  },
  buttonContainer: {
    flexDirection: 'row',
    gap: 15,
  }
})

export default Login;
