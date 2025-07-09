// src/store/authStore.js
import { create } from 'zustand';
import AsyncStorage from '@react-native-async-storage/async-storage';

const useAuthStore = create((set) => ({
  isLogin: false,
  loading: true,

  checkLogin: async () => {
    const value = await AsyncStorage.getItem('login');
    set({ isLogin: value === 'true', loading: false });
  },

  login: async () => {
    await AsyncStorage.setItem('login', 'true');
    set({ isLogin: true });
  },

  logout: async () => {
    await AsyncStorage.removeItem('login');
    set({ isLogin: false });
  }
}));

export default useAuthStore;
