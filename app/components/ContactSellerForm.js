import { Alert, Keyboard } from "react-native";
import * as Notifications from 'expo-notifications';

import messageApi from '../api/messages';

function ContactSellerForm ({ listing }) => {
    const handleSubmit = async ({ message }, { resetForm }) => {
        Keyboard.dismiss();

        const result = await messageApi.send(message, listing.id);

        if (!result.ok) {
            console.log('Error', result);
            return Alert.alert('Error', 'Could not send message to the Seller');
        }

        resetForm();

        Notifications.presentLocalNotificationsAsync({
            title: 'Awesome!',
            body: 'Your message was sent to the seller.'
        });
    };
};

export default ContactSellerForm;