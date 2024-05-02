import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomeClose from './src/screens/homeClose';
import Login from './src/screens/login';
import CriarConta from './src/screens/criarConta'

export default function App() {
  return (
    <View>
      <CriarConta/>
    </View>
  );
}


