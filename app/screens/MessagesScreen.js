import React, { useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';

import ListItem from '../components/ListItem';
import Screen from '../components/Screen';
import ListItemSeparator from '../components/ListItemSeparator';
import ListItemDeleteAction from '../components/ListItemDeleteAction';

import messagesImage from '../assets/avatar.png';

const initialMessages = [
    {
        id: 1,
        title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur neque lorem, bibendum vel metus eget, facilisis blandit arcu. Duis ut risus eu massa hendrerit aliquam. Cras accumsan at elit nec efficitur. Quisque ultricies, metus consequat ullamcorper ultricies, dolor nunc viverra nisl, nec tristique dolor nisl nec tellus. Curabitur sed maximus leo. Duis pharetra neque ut magna rhoncus, ut aliquam urna pellentesque. Nulla vulputate lacus nulla, id blandit mauris hendrerit eget. Nunc non imperdiet sem. Curabitur consequat scelerisque ipsum, vel bibendum justo faucibus id. Sed volutpat tempus mi, non convallis nisi rhoncus et.',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur neque lorem, bibendum vel metus eget, facilisis blandit arcu. Duis ut risus eu massa hendrerit aliquam. Cras accumsan at elit nec efficitur. Quisque ultricies, metus consequat ullamcorper ultricies, dolor nunc viverra nisl, nec tristique dolor nisl nec tellus. Curabitur sed maximus leo. Duis pharetra neque ut magna rhoncus, ut aliquam urna pellentesque. Nulla vulputate lacus nulla, id blandit mauris hendrerit eget. Nunc non imperdiet sem. Curabitur consequat scelerisque ipsum, vel bibendum justo faucibus id. Sed volutpat tempus mi, non convallis nisi rhoncus et.',
        image: messagesImage
    },
    {
        id: 2,
        title: 'T2',
        description: 'D2',
        image: messagesImage
    }
];

function MessagesScreen(props) {
    const [messages, setMessages] = useState(initialMessages);
    const [refreshing, setRefreshing] = useState(false);

    const handleDelete = message => {
        setMessages(messages.filter(m => m.id !== message.id));
    };

    return (
        <Screen>
            <FlatList
                data={messages}
                keyExtractor={message => message.id.toString()}
                renderItem={({item}) => <ListItem 
                                            title={item.title}
                                            subTitle={item.description}
                                            image={item.image}
                                            onPress={() => console.log('Message selected', item)}
                                            renderRightActions={() => <ListItemDeleteAction onPress={() => handleDelete(item)} />}
                                        />}
                ItemSeparatorComponent={() => <ListItemSeparator />}
                refreshing={refreshing}
                onRefresh={() => {
                    setMessages([
                        {
                            id: 2,
                            title: 'T2',
                            description: 'D2',
                            image: messagesImage
                        }
                    ]);
                }}
             />
        </Screen>
    );
};

const styles = StyleSheet.create({
   
});

export default MessagesScreen;