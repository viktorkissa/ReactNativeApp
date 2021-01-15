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

import WelcomeScreen from './app/screens/WelcomeScreen';
import Cards from './app/components/Cards/Cards';
import ListingDetaisScreen from './app/screens/ListingDetaisScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';
import MessagesScreen from './app/screens/MessagesScreen';

export default function App() {
  //console.log(Dimensions.get('screen')); // screen - entire display width, window - visible window
  //console.log(useDimensions()); // give u dimesions on rotate
  //console.log(Platform.Version, 'Version'); // for Android
  // const majorVersionIOS = parseInt(Platform.Version, 10);
  // console.log(majorVersionIOS, 'Version'); // for IOS and Android
  const { landscape, portrait} = useDeviceOrientation();

  const handlePress = () => {
    console.log('Pressed!');
  }

  const hanldeImagePress = () => {
    console.log('Image tapped!');
  }

  const handleButtonPress = () => {
    Alert.alert("My title", "My message", [
      {
        text: "Yes",
        onPress: () => console.log("Yes")
      },
      {
        text: "No",
        onPress: () => console.log("No")
      }
    ]);

    // Works only on IOS
    // Alert.prompt("My title", "My message", text => console.log(text)); 
  }

  return (
    <>
      <MessagesScreen />
      {/* <ListingDetaisScreen /> */}
      {/* <ViewImageScreen /> */}
      {/* <Cards /> */}
      {/* <WelcomeScreen />  */}
      <SafeAreaView style={styles.container}>
        <View style={styles.state1}>
          <Text numberOfLines={1} onPress={handlePress}>Lorem Ipsum adalah text contoh digunakan didalam industri pencetakan dan typesetting. Lorem Ipsum telah menjadi text contoh semenjak tahun ke 1500an, apabila pencetak yang kurang terkenal mengambil sebuah galeri cetak dan merobakanya menjadi satu buku spesimen. Ia telah bertahan bukan hanya selama lima kurun, tetapi telah melonjak ke era typesetting elektronik, dengan tiada perubahan ketara. Ia </Text>
          <StatusBar style="auto" />
          {/* <Image source={require('./assets/icon.png')} /> */}
          <TouchableHighlight onPress={hanldeImagePress}> 
            <Image 
              source={{ 
                width: 200,
                height: 300,
                uri: "https://picsum.photos/200/300" 
              }} 
              blurRadius={1}
              fadeDuration={1000} />
          </TouchableHighlight>
          <TouchableNativeFeedback>
            <View style={[styles.customBtn, styles.center]}><Text>Click me</Text></View>
          </TouchableNativeFeedback>
          <Button title="Click me" color="orange" onPress={handleButtonPress} />
        </View>
        <View style={styles.state2} style={{
          flex: 1
        }}>
          <View style={{
            backgroundColor: 'dodgerblue',
            width: '100%',
            height: landscape ? '100%' : '30%'
          }}></View>
        </View>           
      </SafeAreaView>
    </>
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
