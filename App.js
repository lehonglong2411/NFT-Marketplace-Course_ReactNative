import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, DefaultTheme, StackActions } from '@react-navigation/native'; 
import { useFonts } from 'expo-font';
import { ImageBackground } from 'react-native';
const Stack = createStackNavigator();
const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "transparent"
  }
}
const App =() => {
  return (
    <NavigationContainer>
      <StackNavigator>
        <Stack.Screen>

        </Stack.Screen>
      </StackNavigator>
    </NavigationContainer>
    
  );
}

export default App;
