import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from './screens/WelcomeScreen'
import RegisterScreen from './screens/RegisterScreen'
import LoginScreen from './screens/LoginScreen'
import CameraScreen from './screens/CameraScreen'
import BottomTab from './screens/BottomTab'
import TransactionScreen from './screens/TransactionScreen'
import SettingScreen from './screens/SettingScreen'
const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen options={{ headerShown: false}}  name = 'Welcome' component={WelcomeScreen} />
        <Stack.Screen  name = 'Register' component={RegisterScreen} />
        <Stack.Screen  name = 'Login' component={LoginScreen} />
        <Stack.Screen  options={{ headerShown: false}} name = 'Camera' component={CameraScreen} />
        <Stack.Screen  options={{ headerShown: false}} name = 'Transaction' component={TransactionScreen} />
        <Stack.Screen  options={{ headerShown: false}} name = 'Settings' component={CameraScreen} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
