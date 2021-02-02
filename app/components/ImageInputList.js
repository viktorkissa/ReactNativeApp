import React, { useRef } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';

import checkIndexIsEveryThird from '../config/helpers';

import ImageInput from './ImageInput';

function ImageInputList({ imageUris = [], onRemoveImage, onAddImage }) {
    const scrollView = useRef();

   return (
      <View style={styles.container}>
         <ScrollView ref={scrollView} horizontal onContentSizeChange={() => scrollView.current.scrollToEnd()}>
            {imageUris.map((uri) => (
                <View key={uri} style={styles.image}>
                    <ImageInput                     
                        imageUri={uri} 
                        onChangeImage={() => onRemoveImage(uri)} 
                    />
                </View>
            ))}
            <ImageInput onChangeImage={uri => onAddImage(uri)} />
         </ScrollView>
      </View>
   );
}

const styles = StyleSheet.create({
   container: {
      flexDirection: 'row'
   },
   image: {
       marginRight: 15,
       marginBottom: 15
   }
});

export default ImageInputList;