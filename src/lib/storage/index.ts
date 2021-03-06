import AsyncStorage from '@react-native-async-storage/async-storage';

export const storage = () => {
  const store = async (key: string, value: string) => {
    try {
      await AsyncStorage.setItem(key, value);
    } catch (e) {
      console.log(e);
    }
  };

  const getStore = async (key: string) => {
    try {
      const value = await AsyncStorage.getItem(key);
      return value;
    } catch (e) {
      console.log(e);
    }
  };

  return {store, getStore};
};
