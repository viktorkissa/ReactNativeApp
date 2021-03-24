import React, { useEffect } from 'react';
import { View, StyleSheet, Image, TouchableWithoutFeedback, Alert } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';

import colors from '../config/colors';

function ImageInput({ imageUri, onChangeImage }) {
    const requestPermission = async () => {
        const { granted: libGranted } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        const { granted: cameraGranted } = await ImagePicker.requestCameraPermissionsAsync();
        if (!libGranted || !cameraGranted) 
           alert('You need to enable permission to access the library.');
     };

     const deleteImage = () => {
        Alert.alert('Delete', 'Are you sure you want to delete this image?', [
            { text: 'Yes', onPress: () => onChangeImage(null) },
            { text: 'No' }
        ]);
     };    

    const selectImage = async () => {
        try {
           const result = await ImagePicker.launchImageLibraryAsync({
              mediaTypes: ImagePicker.MediaTypeOptions.Images,
              allowsEditing: true,
              aspect: [4, 7],
              quality: 0.5
           });
  
           if (!result.cancelled) {
              onChangeImage(result.uri);
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
              onChangeImage(result.uri);
           }
        } catch (error) {
           console.log('Error making a photo', error);
        }
     };

     useEffect(() => {
        requestPermission();
     }, []);

   return (
        <View style={styles.container}>
            { !imageUri && <MaterialCommunityIcons onPress={takePhoto} color={colors.medium} name='camera' size={40} /> }
            { !imageUri && <MaterialCommunityIcons onPress={selectImage} color={colors.medium} name='image-area' size={40} /> }
            { imageUri && (
                <TouchableWithoutFeedback onPress={deleteImage}>
                    <Image source={{ uri: imageUri }} style={styles.image} />
                </TouchableWithoutFeedback>
            )}
        </View>
   );
}

const styles = StyleSheet.create({
   container: {
        backgroundColor: colors.light,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        height: 100,
        width: 100,
        overflow: 'hidden'
   },
   image: {
       width: '100%',
       height: '100%'
   }
});

export default ImageInput;