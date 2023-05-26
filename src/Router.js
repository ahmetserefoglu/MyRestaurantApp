import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import SignInScreen from './SignInScreen';
import DishesScreen from './DishesScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="SignIn"
          component={SignInScreen}
          options={{ title: 'Sign In' }}
        />
        <Stack.Screen
          name="Dishes"
          component={DishesScreen}
          options={{ title: 'Dishes' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
