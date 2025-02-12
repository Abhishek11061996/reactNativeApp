import * as React from 'react';
import { Pressable, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {
  createStackNavigator,
  HeaderBackButton,
} from '@react-navigation/stack';
import { Home } from '../screens/Home';
import { Dashboard } from '../screens/Dashboard';
import { About } from '../screens/About';
import { Profile } from '../screens/Profile';


const Stack = createStackNavigator();

export const StackNavigation=() =>{
  return (
    <Stack.Navigator
    screenOptions={({ route }) => ({
        initialRouteName: 'Home',
         tabBarStyle: { backgroundColor: '#fff' },
        headerShown: false,
      
      })}
  >
       <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Profile" component={Profile} />
    <Stack.Screen name="About" component={About} />
  </Stack.Navigator>
  );
}

// export default App;
