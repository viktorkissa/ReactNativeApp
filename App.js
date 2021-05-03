import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { 
  StyleSheet, 
  Platform,
  StatusBar as StatusBarAPI
} from 'react-native';
import { useDeviceOrientation } from '@react-native-community/hooks';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import AppLoading from 'expo-app-loading';

import AuthContext from './app/auth/context';
import AppNavigator from './app/navigation/AppNavigator';
import authStorage from './app/auth/storage';
import { navigationRef } from './app/navigation/rootNavigation';

import AccountScreen from './app/screens/AccountScreen';
import LoginScreen from './app/screens/LoginScreen';
import AuthNavigator from './app/navigation/AuthNavigator';
import navigationTheme from './app/navigation/navigationTheme';
import OfflineNotice from './app/components/OfflineNotice';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const TabNavigator = () => (
  <Tab.Navigator
    tabBarOptions={{
      activeBackgroundColor: 'tomato',
      activeTintColor: 'white',
      inactiveBackgroundColor: '#eee',
      inactiveTintColor: 'black'
    }}
  >
    <Tab.Screen 
      name='Login' 
      component={LoginScreen} 
      options={{
        tabBarIcon: ({ size, color }) => <MaterialCommunityIcons name='login' size={size} color={color} />
      }}
    />
    <Tab.Screen 
      name="Account" 
      component={AccountScreen} 
      options={{
        tabBarIcon: ({ size, color }) => <MaterialCommunityIcons name='account' size={size} color={color} />
      }}
    />
  </Tab.Navigator>
);

const StackNavigator = () => (
  <Stack.Navigator 
    screenOptions={{
      headerStyle: {
        backgroundColor: 'tomato'
      },
      headerTintColor: 'white'
    }}
  >
    <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{ 
          title: 'Welcome to Login',
          // headerStyle: {
          //   backgroundColor: 'tomato'
          // },
          // headerTintColor: 'white',
          // headerShown: false
        }}
      />
    <Stack.Screen 
      name="Account" 
      component={AccountScreen} 
      options={({ route }) => ({ title: `Welcome ${route.params.email}` })}
    />       
  </Stack.Navigator>
);

export default function App() {
  const [user, setUser] = useState();
  const [isReady, setIsReady] = useState(false);
  const { landscape, portrait} = useDeviceOrientation();

  const restoreUser = async () => {
    const user = await authStorage.getUser();
    if (user) setUser(user);
  }

  if (!isReady) {
    return <AppLoading startAsync={restoreUser} onFinish={() => setIsReady(true)} onError={console.warn} />
  }
    

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <OfflineNotice />
      <NavigationContainer ref={navigationRef} theme={navigationTheme}>
        {user ? <AppNavigator /> : <AuthNavigator />}
      </NavigationContainer>
    </AuthContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'none',
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === "android" ? StatusBarAPI.currentHeight : 0 // 'cause SafeArea is not working on Android
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  customBtn: {
    width: 200,
    height: 70,
    backgroundColor: 'blue'
  },
  state1: {
    display: 'none'
  },
  state2: {
    display: 'none'
  }
});
