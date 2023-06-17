/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import FoundationIcons from 'react-native-vector-icons/Foundation';
import { CartScreen } from 'screens/cart';
import { DetailScreen } from 'screens/detail/DetailScreen';
import { HomeScreen } from 'screens/home';
import { store } from 'state/store';

type RootStackParamList = {
  Home: undefined;
  Details: undefined;
  Cart: undefined;
};
export type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

const Tab = createMaterialBottomTabNavigator();
const Stack = createNativeStackNavigator();

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="Main"
            screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Main">
              {() => (
                <Tab.Navigator>
                  <Tab.Screen
                    options={{
                      tabBarLabel: 'Home',
                      tabBarIcon: ({ color }) => (
                        <FoundationIcons name="home" color={color} size={26} />
                      ),
                    }}
                    name="Home"
                    component={HomeScreen}
                  />
                  <Tab.Screen
                    options={{
                      tabBarLabel: 'Cart',
                      tabBarIcon: ({ color }) => (
                        <FoundationIcons
                          name={'shopping-cart'}
                          color={color}
                          size={26}
                        />
                      ),
                    }}
                    name="Cart"
                    component={CartScreen}
                  />
                </Tab.Navigator>
              )}
            </Stack.Screen>
            <Stack.Screen name="Details" component={DetailScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </Provider>
  );
}
export default App;
