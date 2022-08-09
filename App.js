import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { useFont } from './screen';


const Stack = createStackNavigator();
const theme = {
  ...DefaultTheme,
  color: {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: "transparent"

    }
  }
}

const App = () => {
  return (
    <NavigationContainer theme={theme} >
      <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName = "Home">
        <Stack.Screen name = "Home" component = {Home} />

        <Stack.Screen name = ""/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
