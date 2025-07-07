
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Image } from 'react-native';

function InputSection() {
  
  return (
    <View style={styles.container}>
      <View style={styles.inputBox}>
        <Text style={styles.label}>
          Your first name?
        </Text>
        <TextInput
          placeholder="John"
          placeholderTextColor="#D6D6D6"
          style={styles.input}
        >
          
        </TextInput>
      </View>
      <View style={styles.inputBox}>
        <Text style={styles.label}>
          Your last name?
        </Text>
        <TextInput
          placeholder="Doe"
          placeholderTextColor="#D6D6D6"
          style={styles.input}
        >
          
        </TextInput>
      </View>
      <View style={styles.inputBox}>
        <Text style={styles.label}>
          Choose a picture (Optional)
        </Text>
        <TouchableOpacity style={styles.imageBox}>
          <Text style={styles.imageText}>
            +
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.inputBox}>
        <Text style={styles.label}>
          What is your gender?
        </Text>
        <View style={styles.toggle}>
          <TouchableOpacity style={[styles.toggleItem, styles.toggleItemActive]}>
            <Text style={styles.toggleText}>
              Male
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.toggleItem}>
            <Text style={styles.toggleText}>
              Female
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.inputBox}>
        <Text style={styles.label}>
          How old are you?
        </Text>
        <TextInput
          placeholder="16"
          placeholderTextColor="#D6D6D6"
          style={styles.input}
        >
          
        </TextInput>
      </View>
      <View style={styles.inputBox}>
        <Text style={styles.label}>
          What's your height? (cm/ft'in)
        </Text>
        <View style={styles.unitInputBox}>          
          <TextInput
            placeholder="170"
            placeholderTextColor="#D6D6D6"
            style={styles.unitInput}
          >
            
          </TextInput>
          <View style={styles.unitText}>            
            <Text style={styles.unit}>
              cm
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.inputBox}>
        <Text style={styles.label}>
          What's your weight? (kg/lbs)
        </Text>
        <View style={styles.unitInputBox}>          
          <TextInput
            placeholder="155"
            placeholderTextColor="#D6D6D6"
            style={styles.unitInput}
          >
            
          </TextInput>
          <View style={styles.unitText}>            
            <Text style={styles.unit}>
              lbs
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 24,
    gap: 20,
  },
  inputBox: {
    gap: 6
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
  },
  label: {
    fontSize: 14,
    color: '#525252',
    lineHeight: 20,
  },
  input: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderColor: '#D0D5DD',
    fontFamily: 'Inter-Regular',
    fontSize: 16,
    borderWidth: 1,
    borderRadius: 178,
  },
  unitInputBox: {
    borderRadius: 178,
    borderColor: '#D0D5DD',
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center'
  },
  unitInput: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    fontFamily: 'Inter-Regular',
    fontSize: 16,
    width: '85%',
  },
  unitText: {
    borderLeftWidth: 1,
    borderColor: '#D0D5DD',
    height: 40,
    width: '15%',
    backgroundColor: '#E5E5E5',
    borderTopRightRadius: 178,
    borderBottomRightRadius: 178,
    alignItems: 'center',
    justifyContent: 'center',
  },
  unit: {
    fontSize: 16,
    color: '#525252',
    lineHeight: 24,
  },
  imageBox: {
  width: 72,
  height: 72,
  backgroundColor: '#F0F0F0',
  borderRadius: 36,
  justifyContent: 'center',
  alignItems: 'center',
  },
  imageText: {
    fontSize: 32,
    color: '#333',
  },
  toggle: {
    backgroundColor: '#F5F5F5',
    borderRadius: 178,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  toggleItem: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    width: 172,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: '#F5F5F5',
  },
  toggleItemActive: {
    backgroundColor: '#FCFCFC',
    borderColor: '#E5E5E5',
    borderWidth: 2,
  },
  toggleText: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 16,
    lineHeight: 24,
  }
});

export default InputSection;
