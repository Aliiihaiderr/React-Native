
import { StyleSheet, View, SafeAreaView, TouchableOpacity, Text } from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import BackNavigation from './backNavigation';
import FilersSection from './filersSection';
import CardsSection from './cardsSection';
function Screen2({navigation}) {
  const inset = useSafeAreaInsets()
  return (
    <SafeAreaView style={[styles.container, {paddingTop: inset.top, marginBottom: 30}]}>
      <BackNavigation navigation={navigation} />
      <FilersSection />
      <CardsSection />
    {/* <TouchableOpacity
      style={styles.button}
      onPress={() => console.log('Custom button pressed')}
    >
      <Text style={styles.buttonText}>Next</Text>
    </TouchableOpacity> */}

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // padding: 16,
    fontFamily: 'Inter-Medium',
    backgroundColor: '#FFFFFF'
  },
  // text: {
  //   fontSize: 18,
  //   color: '#333',
  // },
  // button: {
  //   marginTop: 35,
  //   paddingVertical: 12,
  //   paddingHorizontal: 20,
  //   backgroundColor: '#EF443A',
  //   borderRadius: 68,
  //   alignItems: 'center',
  //   justifyContent: 'center'
  // },
  // buttonText: {
  //   fontFamily: 'Inter-SemiBold',
  //   fontSize: 16,
  //   lineHeight: 24,
  //   color: '#FCFCFC',
  // }
});

export default Screen2;
