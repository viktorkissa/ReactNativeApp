import React from 'react';
import { Image, View, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'

import colors from '../config/colors';

import img from '../assets/bg.jpg';

function ViewImageScreen(props) {
    return (
        <View style={styles.container}>
            <View style={[styles.closeIcon, styles.btn]}>
                <MaterialCommunityIcons name="close" color="white" size={35} />
            </View>
            <View style={[styles.deleteIcon, styles.btn]}>
                <MaterialCommunityIcons name="trash-can-outline" color="white" size={35} />
            </View>
            <Image style={styles.img} source={img} />
        </View>
    );
};

const styles = StyleSheet.create({
    btn: {
        width: 50,
        height: 50
    },  
    closeIcon: {
        position: 'absolute',
        top: 40,
        left: 30
    },
    container: {
        backgroundColor: colors.black,
        flex: 1
    },
    deleteIcon: {
        position: 'absolute',
        top: 40,
        right: 30
    },
    img: {
        marginTop: 'auto',
        marginBottom: 'auto',
        width: '100%',
        maxHeight: '60%'
    }
})

export default ViewImageScreen;