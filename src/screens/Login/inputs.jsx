import React from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';
import useAuthStore from '../../store/authStore';

const Inputs = () => {
  const login = useAuthStore((state) => state.login);

  const handleLogin = async () => {
    await login();
  }
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <View style={styles.inputBox}>
          <Text style={styles.label}>
            Email
          </Text>
          <TextInput
            placeholder="gulraiz@company.com"
            // placeholderTextColor="#D6D6D6"
            style={styles.input}
          >
            
          </TextInput>
        </View>
        <View style={styles.inputBox}>
          <Text style={styles.label}>
            Password
          </Text>
          <TextInput
            placeholder="••••••••••••••••••"
            // placeholderTextColor="#D6D6D6"
            style={styles.input}
            secureTextEntry={true}
          >
          </TextInput>
        </View>
      </View>
      <View style={styles.forgetPasswordContainer}>
        <Text style={styles.forgetPassword}>
          Forget Password
        </Text>
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => handleLogin()}
      >
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 16,
  },
  inputContainer: {
    gap: 24,
  },
  inputBox: {
    gap: 6
  },
  label: {
    fontSize: 14,
    color: '#344054',
  },
  input: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderColor: '#D0D5DD',
    fontFamily: 'Inter-Regular',
    fontSize: 16,
    borderWidth: 1,
    borderRadius: 178,
    backgroundColor: '#FFFFFF',
    shadowColor: '#101828',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  forgetPasswordContainer: {
    alignItems: 'flex-end'
  },
  forgetPassword: {
    fontSize: 14,
    color: '#A3A3A3'
  },
  button: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    backgroundColor: '#EF443A',
    borderRadius: 68,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#1018280D',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  buttonText: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 16,
    color: '#FCFCFC',
  }
})
export default Inputs;
