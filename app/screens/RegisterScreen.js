import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import * as Yup from 'yup';

import usersApi from '../api/users';
import useAuth from '../auth/useAuth';
import authApi from '../api/auth';
import useApi from '../hooks/useApi';

import Screen from '../components/Screen';
import { FadeInView } from '../components/AnimatedComponents';
import { AppForm, AppFormField, SubmitButton } from '../components/forms';
import AppActivityIndicator from '../components/AppActivityIndicator';

const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label('Email'),
    password: Yup.string().required().min(4).label('Password'),
    name: Yup.string().required().label('Name')
});

function RegisterScreen(props) {
    const registerApi = useApi(usersApi.register);
    const loginApi = useApi(authApi.login);
    const auth = useAuth();
    const [error, setError] = useState();

    const handleRegister = async (values) => {
        const result = await registerApi.request(values);
 
        if (!result.ok) {
            if (result.data) setError(result.data.error);
            else {
                setError('An unexpected error occurred.');
                console.log(result);
            }
            return;
        }
        
        const { data: authToken } = await loginApi.request(
            values.email,
            values.password
        );
        auth.logIn(authToken);
    };

   return (
    <>
        <AppActivityIndicator visible={registerApi.loading || loginApi.loading} />
        <Screen style={styles.container}>        
            <FadeInView>
                <AppForm 
                    initialValues={{ name: '', email: '', password: '' }}
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
    </>
   );
}

const styles = StyleSheet.create({
   container: {

   }
});

export default RegisterScreen;