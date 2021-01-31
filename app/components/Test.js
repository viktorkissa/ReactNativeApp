import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';

import Screen from '../components/Screen';
import AppButton from './Button/AppButton';

function Test(props) {
   const [image, setImage] = useState(null);

   const requestPermission = async () => {
      const { granted } = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (!granted) 
         alert('You need to enable permission to access the library.');
   };

   useEffect(() => {
      requestPermission();
   }, []);

   const selectImage = async () => {
      try {
         const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 7],
            quality: 1
         });

         if (!result.cancelled) {
            setImage(result.uri);
         }                    
      } catch (error) {
         console.log('Error reading an image', error);
      }
   };

   const takePhoto = async () => {
      try {
         const result = await ImagePicker.launchCameraAsync({
            allowsEditing: true
         });

         if (!result.cancelled) {
            setImage(result.uri);
         }
      } catch (error) {
         console.log('Error making a photo', error);
      }
   };

   return (
     <Screen style={styles.container}>
        <View style={styles.imageBtns}>
            <AppButton style={styles.imageBtn} title='Select Image' onPress={selectImage} />
            <AppButton style={styles.imageBtn} title='Take Photo' onPress={takePhoto} />
        </View>
        {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
     </Screen>
   );
}

const styles = StyleSheet.create({
   container: {
      paddingHorizontal: 15
   },
   imageBtns: {
      display: 'flex'
   },
   imageBtn: {
      display: 'flex',
      marginBottom: 15
   }
});

export default Test;