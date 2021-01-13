import React from 'react';
import { View, StyleSheet } from 'react-native';

import logo from '../../assets/logo.png';

import Card from '../Card/Card';

function Cards(props) {
    return (
        <View style={styles.cards}>
            <Card
                title="Red jacket for sale"
                subTitle="100$"
                image={logo}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    cards: {
        backgroundColor: '#f8f4f4',
        padding: 20,
        paddingTop: 100
    }
})

export default Cards;