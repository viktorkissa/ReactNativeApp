import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import routes from './routes';

import ListingEditScreen from '../screens/ListingEditScreen';
import FeedNavigator from './FeedNavigator';
import AccountNavigator from './AccountNavigator';
import NewListingButton from './NewListingButton';

const Tab = createBottomTabNavigator();

const AppNavigator = () => (
    <Tab.Navigator>
        <Tab.Screen 
            name={routes.FEED} 
            component={FeedNavigator} 
            options={{
                tabBarIcon: ({ color, size }) => <MaterialCommunityIcons name='home' color={color} size={size} />
            }}
        />
        <Tab.Screen 
            name={routes.LISING_EDIT} 
            component={ListingEditScreen} 
            options={({ navigation, route }) => ({
                tabBarButton: () => <NewListingButton onPress={() => navigation.navigate(routes.LISING_EDIT)} />,
                tabBarIcon: ({ color, size }) => <MaterialCommunityIcons name='plus-circle' color={color} size={size} />
            })}
        />
        <Tab.Screen 
            name={routes.ACCOUNT} 
            component={AccountNavigator} 
            options={{
                tabBarIcon: ({ color, size }) => <MaterialCommunityIcons name='account' color={color} size={size} />
            }}
        />
    </Tab.Navigator>
);

export default AppNavigator;