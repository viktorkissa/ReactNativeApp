import React from 'react';
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';

import colors from '../config/colors';

import bgImage from '../assets/bg.jpg';
import logo from '../assets/logo.png';

function WelcomeScreen(props) {
    return (
        <ImageBackground style={styles.background} source={bgImage}>
            <View style={styles.logoContainer}>
                <Image source={logo} style={styles.logo} />
                <Text style={styles.logoText}>Sell What You Don't Need</Text>
            </View>
            <View style={[styles.btn, styles.loginButton]}>

            </View>
            <View style={[styles.btn, styles.registerButton]}>

            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1
    },
    btn: {
        width: '100%',
        height: 70,
    },
    loginButton: {   
        marginTop: 'auto',     
        backgroundColor: colors.primary
    },
    registerButton: {
        backgroundColor: colors.secondary
    },
    logo: {     
        marginLeft: 'auto',
        marginRight: 'auto',  
        width: 100,
        height: 100
    },
    logoContainer: {
        marginTop: 70,
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    logoText: {
        color: 'purple'
    }
})

export default WelcomeScreen;