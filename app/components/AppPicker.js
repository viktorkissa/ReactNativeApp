import React, { useState } from 'react';
import { View, StyleSheet, TouchableWithoutFeedback, Modal, Button, FlatList } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import colors from '../config/colors';

import AppText from './AppText';
import PickerItem from './PickerItem';

function AppPicker({ 
    icon, 
    items, 
    onSelectItem, 
    PickerItemComponent = PickerItem, 
    placeholder, 
    selectedItem, 
    width='100%', 
    numberOfColumns = 1
}) {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <TouchableWithoutFeedback onPress={() => setShowModal(true)}>
                <View style={[styles.container, { width }]}>
                    {icon && <MaterialCommunityIcons name={icon} size={20} color={colors.medium} style={styles.icon} />}
                    {selectedItem ? (
                        <AppText style={styles.text}>{selectedItem.label}</AppText>
                    ) : (
                        <AppText style={styles.placeholder}>{placeholder}</AppText>
                    )}
                    <MaterialCommunityIcons name='chevron-down' size={20} color={colors.medium} />
                </View>
          </TouchableWithoutFeedback>
          <Modal visible={showModal} animationType='slide'>
             <Button title='Close' onPress={() => setShowModal(false)}/>
             <FlatList 
                data={items}
                keyExtractor={item => item.value.toString()}
                numColumns={numberOfColumns}
                renderItem={({ item }) => 
                   <PickerItemComponent 
                        item={item}
                        label={item.label} 
                        onPress={() => {
                            setShowModal(false);
                            onSelectItem(item);
                        }} 
                />}
             />
          </Modal>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: colors.light,
        borderRadius: 25,
        flexDirection: 'row',
        padding: 15,
        marginVertical: 10,
        borderColor: colors.medium,
        borderWidth: 1
    },
    icon: {
        marginRight: 10
    },
    text: {
        color: colors.medium,
        flex: 1
    },
    placeholder: {
        color: colors.medium,
        flex: 1
    }
});

export default AppPicker;