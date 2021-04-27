import React from 'react';
import LottieView from 'lottie-react-native';
import { View, StyleSheet } from 'react-native';

function AppActivityIndicator({ visible = false }) {
    if (!visible) return null;

    return (
        <View style={styles.overlay}>
            <LottieView 
            autoPlay
            loop
            source={require('../assets/animations/loading.json')} 
        />
        </View>
    )
}

const styles = StyleSheet.create({
    overlay: {
        position: 'absolute',
        height: '100%',
        width: '100%',
        backgroundColor: 'white',
        opacity: 0.8,
        zIndex: 1
    }
})

export default AppActivityIndicator;