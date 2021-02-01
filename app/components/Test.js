import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';

import Screen from '../components/Screen';
import AppButton from './Button/AppButton';
import ImageInput from './ImageInput';

function Test(props) {
   const [image, setImage] = useState(null);

   return (
     <Screen style={styles.container}>
        <ImageInput 
            imageUri={image} 
            onChangeImage={uri => setImage(uri)}
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