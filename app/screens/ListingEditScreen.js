import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import * as Yup from 'yup';
import { useNavigation } from '@react-navigation/native';

import useLocation from '../hooks/useLocation';
import listingsApi from '../api/listings';

import {
    AppForm,
    AppFormField,
    AppFormPicker
} from '../components/forms';
import Screen from '../components/Screen';
import CategoryPickerItem from '../components/CategoryPickerItem';
import FormImagePicker from '../components/forms/FormImagePicker';
import { SubmitButton } from '../components/forms';
import UploadScreen from './UploadScreen';

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
    const [uploadVisible, setUploadVisible] = useState(false);
    const [progress, setProgress] = useState(0);
    const location = useLocation();
    const navigation = useNavigation();

    const handleSubmit = async (listing) => {
        setProgress(0);
        setUploadVisible(true);
        const { ok } = await listingsApi.addListing(
            { ...listing, location },
            progress => setProgress(progress)
        );

        if (!ok) {
            setUploadVisible(false);
            return alert('Could not save the listing.');
        } 
    };  

    return (
        <Screen style={styles.container}>
            <UploadScreen progress={progress} visible={uploadVisible} onDone={() => setUploadVisible(false) } />
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
                <SubmitButton title='Submit' />
            </AppForm>
        </Screen>
    )
};

const styles = StyleSheet.create({
    container: {
        padding: 20
    }
});

export default ListingEditScreen;