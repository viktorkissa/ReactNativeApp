import React, { useState, useEffect } from 'react';
import { FlatList, StyleSheet } from 'react-native';

import colors from '../config/colors';
import routes from '../navigation/routes';
import listingsAPI from '../api/listings';

import Screen from '../components/Screen';
import Card from '../components/Card/Card';
import AppButton from '../components/Button/AppButton';
import AppText from '../components/AppText';
import AppActivityIndicator from '../components/AppActivityIndicator';
import useApi from '../hooks/useApi';

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
    const { data: listings, error, loading, request: loadListings } = useApi(listingsAPI.getListings);

    useEffect(() => {
        loadListings();
    }, []);

    return (
        <Screen style={styles.screen}>
            {error && (
                <>
                    <AppText>Couldn't retrieve the listings.</AppText>
                    <AppButton title='Retry' onPress={loadListings} />
                </>
            )}
            <AppActivityIndicator visible={loading} />
            <FlatList 
                data={listings}
                keyExtractor={listing => listing.id.toString()}
                renderItem={({item}) => 
                    <Card 
                        title={item.title}
                        subTitle={`$${item.price}`}
                        imageUrl={item.images[0].url}
                        onPress={() => navigation.navigate(routes.LISTINGS_DETAILS, item)}
                        thumbnailUrl={item.images[0].thumbnailUrl}
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