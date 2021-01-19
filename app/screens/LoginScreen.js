import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';

import Screen from '../components/Screen';
import AppTextInput from '../components/AppTextInput';
import AppButton from '../components/Button/AppButton';
import ErrorMessage from '../components/ErrorMessage';

import logoImg from '../assets/logo.png';

const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label('Email'),
    password: Yup.string().required().min(4).label('Password')
});

function LoginScreen({ navigation, route }) {

    const handleLogin = (values) => {
        console.log(values);
        navigation.navigate('Account', values);
    };

    return (
        <Screen style={styles.container}>
            <Image 
                style={styles.logo}
                source={logoImg} 
            />
            <Formik 
                initialValues={{ email: '', password: '' }}
                onSubmit={handleLogin}
                validationSchema={validationSchema}
            >
                { ({ handleChange, handleSubmit, errors }) => (
                    <>
                        <AppTextInput 
                            placeholder='Email'
                            icon='email'
                            autoCapitalize='none'
                            autoCorrect={false}
                            keyboardType='email-address'
                            onChangeText={handleChange('email')}
                            textContentType='emailAddress' // for IOS to autofill
                        />
                        <ErrorMessage error={errors.email} />
                        <AppTextInput 
                            icon='lock'
                            placeholder='Password'
                            autoCapitalize='none'
                            autoCorrect={false}
                            onChangeText={handleChange('password')}
                            textContentType='password' 
                            secureTextEntry
                        />
                        <ErrorMessage error={errors.password} />
                        <AppButton title='Login' onPress={handleSubmit} />
                    </>
                ) }
            </Formik>            
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