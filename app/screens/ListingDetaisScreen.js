import React from 'react';
import { Image, View, StyleSheet } from 'react-native';

import colors from '../config/colors';

import AppText from '../components/AppText';
import ListItem from '../components/ListItem';

import avatar from '../assets/avatar.png';

function ListingDetaisScreen({ route }) {
    const { image, title, price } = route.params;

    return (
        <View>
            <Image source={image} style={styles.image} />
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
            </View>
        </View>
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