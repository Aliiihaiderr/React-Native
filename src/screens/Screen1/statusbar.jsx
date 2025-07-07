
import { StyleSheet, View } from 'react-native';

function StatusBarSection() {
  
  return (
    <View style={styles.container}>
      <View style={[styles.status, styles.active]}>

      </View>
      <View style={styles.status}>

      </View>
      <View style={styles.status}>

      </View>
      <View style={styles.status}>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    flexDirection: 'row',
    // alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    // padding: 16,
    paddingBottom: 0,
    // borderWidth: 2,
    // borderColor: "red",
  },
  status: {
    width: '23.49%',
    height: 6,
    backgroundColor: '#D9D9D9',
    borderRadius: 80,
  },
  active: {
    backgroundColor: '#EF5350',
  }
});

export default StatusBarSection;
