import React from 'react';
import { StyleSheet, View, Text, SafeAreaView, Button, TouchableOpacity } from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import useAuthStore from '../../store/authStore';

const About = ({navigation}) => {
  const inset = useSafeAreaInsets()
  const logout = useAuthStore((state) => state.logout);
  const handleLogOut = async () => {
    await logout();
  }
  return (
    <SafeAreaView style={[styles.container, {paddingTop: inset.top}]}>
      <TouchableOpacity style={styles.logout} onPress={() => handleLogOut()} >
        <Text>
          Log Out
        </Text>
      </TouchableOpacity>
      <View style={styles.container}>
        <Text>
          This is About..................................
        </Text>
        <Button
          title="Go to Info Screen"
          onPress={() => navigation.navigate('Info')}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    gap: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    gap: 15,
  },
  logout: {
    position: 'absolute',
    top: 50,
    right: 30,
    borderWidth: 1,
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 10
  }
})

export default About;
