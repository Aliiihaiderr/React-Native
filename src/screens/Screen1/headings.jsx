
import { StyleSheet, View, Text } from 'react-native';

function HeadingSection() {
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Personalize Your Experience
      </Text>
      <Text style={styles.description}>
        Tell us a little about yourself so we can recommend the best recipes for you!
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 24,
    gap: 6,
  },
  title: {
    fontSize: 24,
    color: '#292929',
    lineHeight: 24,
  },
  description: {
    fontSize: 16,
    color: '#A3A3A3',
    lineHeight: 24,
  }
});

export default HeadingSection;
