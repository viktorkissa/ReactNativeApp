import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';

import colors from '../config/colors';

import ListItem from '../components/ListItem';
import Screen from '../components/Screen';
import Icon from '../components/Icon';
import ListItemSeparator from '../components/ListItemSeparator';

import avatar from '../assets/avatar.png';

const menuItems = [
    { 
        title: "My Listings",
        icon: {
            name: 'format-list-bulleted',
            backgroundColor: colors.primary
        }
    },
    { 
        title: "My Messages",
        icon: {
            name: 'email',
            backgroundColor: colors.secondary
        }
    }
];

function AccountScreen({ navigation, route }) {
    const handleLogout = () => {
        navigation.navigate('Login');
    };

    return (
        <Screen style={styles.screen}>
            <View style={styles.container}>
                <ListItem
                    title='Viktor Kyssa'
                    // subTitle='viktorkyssa23021994@gmail.com'
                    subTitle={route.params.email}
                    image={avatar}
                />
            </View>
            <View style={styles.container}>
                <FlatList 
                    data={menuItems}
                    keyExtractor={item => item.title}
                    ItemSeparatorComponent={ListItemSeparator}
                    renderItem={({item}) => 
                      <ListItem 
                        title={item.title}
                        IconComponent={
                            <Icon 
                                name={item.icon.name} 
                                backgroundColor={item.icon.backgroundColor} />
                        }
                      />
                    }
                />
            </View>
            <ListItem 
                title='Log Out'
                IconComponent={
                    <Icon name='logout' backgroundColor='#ffe66d' />
                }
                onPress={handleLogout}
            />
        </Screen>
    );
};

const styles = StyleSheet.create({
   container: {
       marginVertical: 20
   },
   screen: {
       backgroundColor: colors.light
   }
});

export default AccountScreen;