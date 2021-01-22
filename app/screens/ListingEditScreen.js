import React from 'react';
import { StyleSheet } from 'react-native';
import * as Yup from 'yup';

import {
    AppForm,
    AppFormField,
    SubmitButton,
    AppFormPicker
} from '../components/forms';
import Screen from '../components/Screen';
import defaultStyles from '../config/defaultStyles';

const validationSchema = Yup.object().shape({
    title: Yup.string().required().min(1).label('Title'),
    price: Yup.number().required().min(1).max(10000).label('Price'),
    description: Yup.string().label('Description'),
    category: Yup.object().required().nullable().nullable().label('Category')
});

const categories = [
    { label: 'Furniture', value: 1 },
    { label: 'Clothing', value: 2 },
    { label: 'Camera', value: 3 }
];

const initialValues ={
    title: '',
    price: '',
    description: '',
    category: ''
}

function ListingEditScreen() {
    const handleSubmit = values => {
        console.log(values);
    };

    return (
        <Screen style={styles.container}>
            <AppForm 
                initialValues={initialValues}
                onSubmit={handleSubmit}
                validationSchema={validationSchema}
            >
                <AppFormField maxLength={255} name='title' placeholder='Title' />
                <AppFormField  
                    keyboardType='numeric'
                    maxLength={8}
                    name='price'
                    placeholder='Price'
                />
                <AppFormPicker 
                    items={categories}
                    name='category'
                    placeholder='Category'
                />
                <AppFormField 
                    maxLength={255}
                    multiline
                    numberOfLines={3}
                    name='description'
                    placeholder='Description'
                />
            </AppForm>
        </Screen>
    )
};

const styles = StyleSheet.create({
    container: {
        padding: 20
    }
})

export default ListingEditScreen;