import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import routes from '../navigation/routes';

import ListingsScreen from '../screens/ListingsScreen';
import ListingDetaisScreen from '../screens/ListingDetaisScreen';

const Stack = createStackNavigator();

const FeedNavigator = () => (
    <Stack.Navigator mode='modal' screenOptions={{ headerShown: false }}>
        <Stack.Screen name={routes.LISTINGS} component={ListingsScreen} />
        <Stack.Screen name={routes.LISTINGS_DETAILS} component={ListingDetaisScreen} />
    </Stack.Navigator>
);

export default FeedNavigator;