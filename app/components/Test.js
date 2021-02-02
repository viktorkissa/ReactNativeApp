import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';

import Screen from '../components/Screen';
import AppButton from './Button/AppButton';
import ImageInput from './ImageInput';
import ImageInputList from './ImageInputList';

function Test(props) {
   const [images, setImages] = useState([]);

   const handleAdd = uri => {
      setImages([...images, uri]);
   };

   const handleRemove = uri => {
      setImages(images.filter(image => image !== uri));
   };

   return (
     <Screen style={styles.container}>
        <ImageInputList 
            imageUris={images}
            onAddImage={handleAdd}
            onRemoveImage={handleRemove}
        />
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