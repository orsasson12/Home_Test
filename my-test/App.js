import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, } from 'react-native';
import HomeScreen from './screens/homeScreen/HomeScreen.jsx';
import { Provider } from 'react-redux';
import { Store } from './reducers/index.js';
export default function App() {

  return (
    <Provider store={Store}>
      <View>
        <HomeScreen />
      </View>
    </Provider>

  );
}

