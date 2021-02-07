import React from 'react';
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';

import colors from '../config/colors';
import routes from '../navigation/routes';

import AppButton from '../components/Button/AppButton';

import bgImage from '../assets/bg.jpg';
import logo from '../assets/logo.png';

function WelcomeScreen({ navigation }) {
    return (
        <ImageBackground style={styles.background} source={bgImage} blurRadius={3}>            
            <View style={styles.logoContainer}>
                <Image source={logo} style={styles.logo} />
                {/* <AppText>Sell What You Don't Need</AppText> */}
                <Text style={styles.logoText}>Sell What You Don't Need</Text>
            </View>
            <View style={styles.buttonContainer}>
                <AppButton title="Login" customStyles={styles.loginButton} onPress={() => navigation.navigate(routes.LOGIN)} />
                <AppButton title="Register" customStyles={styles.registerButton} onPress={() => navigation.navigate(routes.REGISTER)} />       
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
    buttonContainer: {
        marginTop: 'auto',
        paddingHorizontal: 20
    },
    loginButton: {   
              
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
        // backgroundColor: 'blue',
        shadowColor: 'grey', // works just for IOS
        shadowOffset: { width: 10, height: 10 },
        shadowOpacity: 1,
        shadowRadius: 10,
        // elevation: 20 // for Android
    },
    logoText: {
        color: colors.secondary,
        fontSize: 25,
        fontStyle: 'italic',
        fontWeight: '600',
        paddingVertical: 20
    }
})

export default WelcomeScreen;