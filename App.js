import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import "./config/index"
import Otp from './screens';
import Command from './screens/Command';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      {/* <Command /> */}
      <Otp />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
