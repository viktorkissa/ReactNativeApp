import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { 
  Dimensions,
  StyleSheet, 
  Text, 
  View, 
  Image, 
  TouchableWithoutFeedback, 
  TouchableOpacity,
  TouchableHighlight,
  TouchableNativeFeedback,
  SafeAreaView, 
  Button,
  Alert,
  Platform,
  StatusBar as StatusBarAPI
} from 'react-native';
import { useDimensions, useDeviceOrientation } from '@react-native-community/hooks';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import WelcomeScreen from './app/screens/WelcomeScreen';
import Cards from './app/components/Cards/Cards';
import ListingDetaisScreen from './app/screens/ListingDetaisScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';
import MessagesScreen from './app/screens/MessagesScreen';
import Screen from './app/components/Screen';
import Icon from './app/components/Icon';
import ListItem from './app/components/ListItem';
import AccountScreen from './app/screens/AccountScreen';
import ListingsScreen from './app/screens/ListingsScreen';
import LoginScreen from './app/screens/LoginScreen';
import ListingEditScreen from './app/screens/ListingEditScreen';
import Test from './app/components/Test';
import AuthNavigator from './app/navigation/AuthNavigator';
import navigationTheme from './app/navigation/navigationTheme';
import AppNavigator from './app/navigation/AppNavigator';

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
      {/* <ListingsScreen /> */}
      {/* <AccountScreen /> */}
      {/* <MessagesScreen /> */}
      {/* <ListingDetaisScreen /> */}
      {/* <ViewImageScreen /> */}
      {/* <Cards /> */} 
      {/* <WelcomeScreen />  */}          
  </Stack.Navigator>
);

export default function App() {
  //console.log(Dimensions.get('screen')); // screen - entire display width, window - visible window
  //console.log(useDimensions()); // give u dimesions on rotate
  //console.log(Platform.Version, 'Version'); // for Android
  // const majorVersionIOS = parseInt(Platform.Version, 10);
  // console.log(majorVersionIOS, 'Version'); // for IOS and Android
  const { landscape, portrait} = useDeviceOrientation();

  // const handleButtonPress = () => {
  //   Alert.alert("My title", "My message", [
  //     {
  //       text: "Yes",
  //       onPress: () => console.log("Yes")
  //     },
  //     {
  //       text: "No",
  //       onPress: () => console.log("No")
  //     }
  //   ]);

    // Works only on IOS
    // Alert.prompt("My title", "My message", text => console.log(text)); 
  // }

  return (
    <NavigationContainer theme={navigationTheme}>
      <AppNavigator />
    </NavigationContainer>
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

{/* <SafeAreaView style={styles.container}> */}
            {/* <View style={styles.state1}> */}
              {/* <Text numberOfLines={1} onPress={handlePress}>Lorem Ipsum adalah text contoh digunakan didalam industri pencetakan dan typesetting. Lorem Ipsum telah menjadi text contoh semenjak tahun ke 1500an, apabila pencetak yang kurang terkenal mengambil sebuah galeri cetak dan merobakanya menjadi satu buku spesimen. Ia telah bertahan bukan hanya selama lima kurun, tetapi telah melonjak ke era typesetting elektronik, dengan tiada perubahan ketara. Ia </Text> */}
              {/* <StatusBar style="auto" /> */}
              {/* <Image source={require('./assets/icon.png')} /> */}
              {/* <TouchableHighlight onPress={hanldeImagePress}>  */}
                // <Image 
                //   source={{ 
                //     width: 200,
                //     height: 300,
                //     uri: "https://picsum.photos/200/300" 
                //   }} 
                //   blurRadius={1}
                //   fadeDuration={1000} />
              {/* </TouchableHighlight> */}
              {/* <TouchableNativeFeedback> */}
                {/* <View style={[styles.customBtn, styles.center]}><Text>Click me</Text></View> */}
              {/* </TouchableNativeFeedback> */}
              {/* <Button title="Click me" color="orange" onPress={handleButtonPress} /> */}
            {/* </View> */}
            // <View style={styles.state2} style={{
            //   flex: 1
            // }}>
            //   <View style={{
            //     backgroundColor: 'dodgerblue',
            //     width: '100%',
            //     height: landscape ? '100%' : '30%'
            //   }}></View>
            {/* </View>            */}
          {/* </SafeAreaView> */}