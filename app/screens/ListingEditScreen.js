import React from 'react';
import { StyleSheet } from 'react-native';
import * as Yup from 'yup';

import useLocation from '../hooks/useLocation';

import {
    AppForm,
    AppFormField,
    AppFormPicker
} from '../components/forms';
import Screen from '../components/Screen';
import CategoryPickerItem from '../components/CategoryPickerItem';
import FormImagePicker from '../components/forms/FormImagePicker';

const validationSchema = Yup.object().shape({
    title: Yup.string().required().min(1).label('Title'),
    price: Yup.number().required().min(1).max(10000).label('Price'),
    description: Yup.string().label('Description'),
    category: Yup.object().required().nullable().nullable().label('Category'),
    images: Yup.array().min(1, 'Please select at least one image.')
});

const categories = [
    { label: 'Furniture', value: 1, backgroundColor: 'red', icon: 'apps' },
    { label: 'Clothing', value: 2, backgroundColor: 'green', icon: 'email' },
    { label: 'Camera', value: 3, backgroundColor: 'blue', icon: 'lock' }
];

const initialValues ={
    title: '',
    price: '',
    description: '',
    category: '',
    images: []
}

function ListingEditScreen() {
    const location = useLocation();

    const handleSubmit = values => {
        console.log(location);
    };

    return (
        <Screen style={styles.container}>
            <AppForm 
                initialValues={initialValues}
                onSubmit={handleSubmit}
                validationSchema={validationSchema}
            >
                <FormImagePicker name='images' />
                <AppFormField maxLength={255} name='title' placeholder='Title' />
                <AppFormField  
                    keyboardType='numeric'
                    maxLength={8}
                    name='price'
                    placeholder='Price'
                    width={120}
                />
                <AppFormPicker 
                    items={categories}
                    name='category'
                    numberOfColumns={3}
                    placeholder='Category'
                    width='50%'
                    PickerItemComponent={CategoryPickerItem}
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