import React, {useState} from 'react';
import { FlatList, StyleSheet, Switch, Text, TextInput } from 'react-native';

import colors from '../config/colors';

import Screen from '../components/Screen';
import Card from '../components/Card/Card';
import AppTextInput from '../components/AppTextInput';

import img from '../assets/jacket.jpg';

const listings = [
    {
        id: 1,
        title: 'Red jacket for sale',
        price: 100,
        image: img
    },
    {
        id: 2,
        title: 'Couch in great condition',
        price: 1000,
        image: img
    }
];

function ListingsScreen(props) {
    const [firstName, setFirstName] = useState('');
    const [isNew, setIsNew] = useState(false);

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
            <FlatList 
                data={listings}
                keyExtractor={listing => listing.id.toString()}
                renderItem={({item}) => 
                    <Card 
                        title={item.title}
                        subTitle={`$${item.price}`}
                        image={item.image}
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