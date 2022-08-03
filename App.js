import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { useFont } from './screen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StackNavigator>

      </StackNavigator>
    </NavigationContainer>
  );
}


