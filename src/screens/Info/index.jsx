import React from 'react';
import { StyleSheet, View, Text, SafeAreaView, Button } from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
const Info = ({navigation}) => {
  const inset = useSafeAreaInsets()
  return (
    <SafeAreaView style={[styles.container, {paddingTop: inset.top}]}>
      <View style={styles.container}>
        <Text>
          This is Info
        </Text>
        <Button
          title="Go Back"
          onPress={() => navigation.navigate('Home')}
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
  }
})

export default Info;
