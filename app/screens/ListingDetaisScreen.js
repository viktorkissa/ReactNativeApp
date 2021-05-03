import React from 'react';
import { View, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native';
import { Image } from 'react-native-expo-image-cache';

import colors from '../config/colors';

import AppText from '../components/AppText';
import ListItem from '../components/ListItem';
import ContactSellerForm from '../components/ContactSellerForm';

import avatar from '../assets/avatar.png';

function ListingDetaisScreen({ route}) {
    const { images, title, price } = route.params;

    return (
        <KeyboardAvoidingView 
            behavior="position"
            keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 100}
        >
            <Image 
                uri={ images[0].url } 
                preview={{ uri: images[0].thumbnailUrl }} 
                tint="light"
                style={ styles.image } 
            />
            <View style={styles.detailsContainer}>
                <AppText style={styles.title}>{title}</AppText>
                <AppText style={styles.price}>${price}</AppText>
                <View style={styles.userContainer}> 
                    <ListItem 
                        image={avatar}
                        title="Viktor Kyssa"
                        subTitle="5 Listings"
                    />
                </View>
                <ContactSellerForm listing={route.params.listing} />
            </View>
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    detailsContainer: {
        padding: 20
    },
    image: {
        width: '100%',
        height: 300
    },
    title: {
        fontSize: 24,
        fontWeight: '500'
    },
    price: {
        color: colors.secondary,
        fontWeight: 'bold',
        fontSize: 20,
        marginVertical: 10
    },
    userContainer: {
        marginVertical: 40
    }
})

export default ListingDetaisScreen;