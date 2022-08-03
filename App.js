import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { useFont } from './screen';

const Stack = createStackNavigator();

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "transparent"
  }
}
const App = () => {
  return (
    <NavigationContainer theme = {theme}>
      <Stack.Navigator screenOptions = {{headerShown: false} initialRouteName = "Home"}>
        <Stack.Screen name = "Home" component = {Home} />

        <Stack.Screen name = "Details" component = {Details} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

