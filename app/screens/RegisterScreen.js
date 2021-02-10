import React from 'react';
import { View, StyleSheet } from 'react-native';
import * as Yup from 'yup';

import routes from '../navigation/routes';

import Screen from '../components/Screen';
import { FadeInView } from '../components/AnimatedComponents';
import { AppForm, AppFormField, SubmitButton } from '../components/forms';

const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label('Email'),
    password: Yup.string().required().min(4).label('Password'),
    name: Yup.string().required().label('Name')
});

function RegisterScreen(props) {
    const handleRegister = (values) => {
        console.log(values);
        navigation.navigate(routes.ACCOUNT, values);
    };

   return (
    <Screen style={styles.container}>
        <FadeInView>
            <AppForm 
                initialValues={{ email: '', password: '' }}
                onSubmit={handleRegister}
                validationSchema={validationSchema}
            >
                <AppFormField 
                    placeholder='Email'
                    icon='email'
                    autoCapitalize='none'
                    autoCorrect={false}
                    keyboardType='email-address'
                    name='email'
                    textContentType='emailAddress' // for IOS to autofill
                />
                <AppFormField 
                    placeholder='Name'
                    icon='account'
                    autoCapitalize='none'
                    autoCorrect={false}
                    keyboardType='text'
                    name='name'
                />
                <AppFormField 
                    icon='lock'
                    placeholder='Password'
                    autoCapitalize='none'
                    autoCorrect={false}
                    name='password'
                    textContentType='password' 
                    secureTextEntry
                />
                <SubmitButton title='Register' />
            </AppForm>   
        </FadeInView>         
    </Screen>
   );
}

const styles = StyleSheet.create({
   container: {

   }
});

export default RegisterScreen;