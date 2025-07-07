
import { StyleSheet, View, SafeAreaView, TouchableOpacity, Text } from 'react-native';
import StatusBarSection from './statusbar';
import HeadingSection from './headings';
import InputSection from './inputs';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
function Screen1() {
  const inset = useSafeAreaInsets()
  return (
    <SafeAreaView style={[styles.container, {paddingTop: inset.top}]}>
      <StatusBarSection />
      <HeadingSection />
      <InputSection />
      <TouchableOpacity
        style={styles.button}
        onPress={() => console.log('Custom button pressed')}
      >
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    fontFamily: 'Inter-Medium',
    backgroundColor: '#FFFFFF',
  },
  text: {
    fontSize: 18,
    color: '#333',
  },
  button: {
    marginTop: 35,
    paddingVertical: 12,
    paddingHorizontal: 20,
    backgroundColor: '#EF443A',
    borderRadius: 68,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 16,
    lineHeight: 24,
    color: '#FCFCFC',
  }
});

export default Screen1;
