import React from 'react';
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import colors from '../config/colors';

import AppText from '../components/AppText';

import bgImage from '../assets/bg.jpg';
import logo from '../assets/logo.png';

function WelcomeScreen(props) {
    return (
        <ImageBackground style={styles.background} source={bgImage}>
            <View style={styles.logoContainer}>
                <Image source={logo} style={styles.logo} />
                <AppText>Sell What You Don't Need</AppText>
            </View>
            <View style={[styles.btn, styles.loginButton]}>
                <MaterialCommunityIcons name="email" size={60} color="blue" />
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
        backgroundColor: 'blue',
        shadowColor: 'grey', // works just for IOS
        shadowOffset: { width: 10, height: 10 },
        shadowOpacity: 1,
        shadowRadius: 10,
        elevation: 20 // for Android
    },
    logoText: {
        color: 'purple',
        fontSize: 20,
        fontStyle: 'italic',
        fontWeight: '700'
    }
})

export default WelcomeScreen;