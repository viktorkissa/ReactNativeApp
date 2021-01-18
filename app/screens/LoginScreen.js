import React, { useState } from 'react';
import { Image, StyleSheet } from 'react-native';

import Screen from '../components/Screen';

import logoImg from '../assets/logo.png';
import AppTextInput from '../components/AppTextInput';
import AppButton from '../components/Button/AppButton';

function LoginScreen(props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <Screen style={styles.container}>
            <Image 
                style={styles.logo}
                source={logoImg} 
            />
            <AppTextInput 
                placeholder='Email'
                icon='email'
                autoCapitalize='none'
                autoCorrect={false}
                keyboardType='email-address'
                onChangeText={text => setEmail(text)}
                textContentType='emailAddress' // for IOS to autofill
            />
            <AppTextInput 
                icon='lock'
                placeholder='Password'
                autoCapitalize='none'
                autoCorrect={false}
                onChangeText={text => setPassword(text)}
                textContentType='password' 
                secureTextEntry
            />
            <AppButton title='Login' onPress={() => console.log(email, password)} />
        </Screen>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 10
    },
    logo: {
        width: 80,
        height: 80,
        alignSelf: 'center',
        marginTop: 50,
        marginBottom: 20
    }
});

export default LoginScreen;