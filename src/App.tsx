/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { CartScreen } from 'screens/cart';
import { HomeScreen } from 'screens/home';
const Tab = createMaterialBottomTabNavigator();

function App(): JSX.Element {
  return (
    // <SafeAreaView style={backgroundStyle}>
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Cart" component={CartScreen} />
        {/*<Tab.Screen name="Settings" component={SettingsScreen} />*/}
      </Tab.Navigator>
    </NavigationContainer>
    // </SafeAreaView>
  );
}
export default App;
