import React from 'react';
import { View, StyleSheet, Image, TouchableHighlight } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import colors from '../config/colors';

import AppText from './AppText';

function ListItem({title, subTitle, image, IconComponent, onPress, renderRightActions}) {
    return (
        <Swipeable renderRightActions={renderRightActions}>
            <TouchableHighlight 
                underlayColor={Colors.light}
                onPress={onPress}>
                <View style={styles.container}>
                    {IconComponent}
                    {image && <Image style={styles.image} source={image} />}
                    <View style={styles.detailsContainer}>
                        <AppText style={styles.title} numberOfLines={1}>{title}</AppText>
                        {subTitle && (
                            <AppText style={styles.subTitle} numberOfLines={2}>
                                {subTitle}
                            </AppText>
                        )}
                    </View>
                    <MaterialCommunityIcons name='chevron-right' color={colors.medium} size={25} />
                </View>
            </TouchableHighlight>
        </Swipeable>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15,
        backgroundColor: colors.white
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 35
    },
    title: {
        fontWeight: '700'
    },
    subTitle: {
        color: colors.medium
    },
    detailsContainer: {
        marginLeft: 10,
        justifyContent: 'center',
        flex: 1
    }
})

export default ListItem;