import { StateStorage } from 'zustand/middleware';
import * as SecureStore from 'expo-secure-store';

export const zustandStorage: StateStorage = {
    setItem: (name, value) => {
        return SecureStore.setItemAsync(name, value);
    },
    getItem: (name) => {
        const value = SecureStore.getItemAsync(name);
        return value ?? null;
    },
    removeItem: (name) => {
        return SecureStore.deleteItemAsync(name);
    },
};