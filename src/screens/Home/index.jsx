import React from 'react';
import { StyleSheet, View, Text, SafeAreaView, Button } from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
const Home = ({navigation}) => {
  const inset = useSafeAreaInsets()
  return (
    <SafeAreaView style={[styles.container, {paddingTop: inset.top}]}>
      <View style={styles.container}>
        <Text>
          This is Home
        </Text>
        <View style={styles.buttonContainer}>
          <Button
            title="Go to About Screen"
            onPress={() => navigation.navigate('About')}
          />
          <Button
            title="Go to Menu Screen"
            onPress={() => navigation.navigate('Menu')}
          />
        </View>
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
  }
})

export default Home;
