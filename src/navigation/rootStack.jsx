import { StyleSheet, ActivityIndicator, View, SafeAreaView } from 'react-native';
import HomeStack from './homeStack';
import AuthStack from './AuthStack';
import useAuthStore from '../store/authStore';
import { useEffect, useState } from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

function RootStack() {
  const inset = useSafeAreaInsets()
  const { isLogin, checkLogin, loading } = useAuthStore();
  useEffect(() => {
    checkLogin();
  }, []);

  if (loading) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="large" color="#EF443A" />
      </View>
    );
  }

  return (
    <SafeAreaView style={[styles.container, {paddingTop: inset.top}]}>
      {isLogin ? <HomeStack /> : <AuthStack />}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default RootStack;
