import React, {useState} from 'react';
import { FlatList, StyleSheet, Switch, Text, TextInput } from 'react-native';

import colors from '../config/colors';
import routes from '../navigation/routes';
import listingsAPI from '../api/listings';

import Screen from '../components/Screen';
import Card from '../components/Card/Card';
import AppTextInput from '../components/TextInput';
import AppPicker from '../components/AppPicker';

import img from '../assets/jacket.jpg';
import { useEffect } from 'react';

const categories = [
    {
        label: 'Furniture',
        value: 1
    },
    {
        label: 'Clothing',
        value: 2
    },
    {
        label: 'Cameras',
        value: 3
    }
];

function ListingsScreen({ navigation }) {
    const [firstName, setFirstName] = useState('');
    const [isNew, setIsNew] = useState(false);
    const [category, setCategory] = useState(false);
    const [listings, setListings] = useState([]);

    useEffect(() => {
        loadListings();
    }, []);

    const loadListings = async () => {
        const res = await listingsAPI.getListings();
        console.log(res);
        setListings(res.data);
    };

    return (
        <Screen style={styles.screen}>
            <Text>{firstName}</Text>
            <TextInput 
                secureTextEntry
                clearButtonMode='while-editing'
                keyboardType='numeric'
                maxLength={5}
                placeholder="First Name" 
                onChangeText={text => setFirstName(text)} 
                style={{
                    marginVertical: 20,
                    borderBottomColor: '#ccc',
                    borderBottomWidth: 1
                }} 
            />
            <AppTextInput placeholder='Username' icon='email' />
            <Switch value={isNew} onValueChange={newValue => setIsNew(newValue)} />
            <AppPicker 
                selectedItem={category}
                onSelectItem={item => setCategory(item)}
                items={categories} 
                placeholder='Category' 
                icon='apps' 
            />
            <FlatList 
                data={listings}
                keyExtractor={listing => listing.id.toString()}
                renderItem={({item}) => 
                    <Card 
                        title={item.title}
                        subTitle={`$${item.price}`}
                        imageUrl={item.images[0].url}
                        onPress={() => navigation.navigate(routes.LISTINGS_DETAILS, item)}
                    />
                }
            />
        </Screen>
    );
};

const styles = StyleSheet.create({
    screen: {
        padding: 20,
        backgroundColor: colors.light
    }
});

export default ListingsScreen;