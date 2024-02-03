import React, { useState } from 'react';
import { FlatList, StyleSheet } from 'react-native';
import ListItem from '../components/ListItem';
import Screen from '../components/Screen';
import ListItemSeperator from '../components/ListItemSeperator';
import ListItemDeleteActoin from '../components/ListItemDeleteActoin';

const initialMessage = [
    {
        id:1,
        title:"T1",
        description:"D1",
        image:require('../../assets/logo.png')
    },
     {
        id:2,
        title:"T2",
        description:"D2",
        image:require('../../assets/logo.png')
    },
    {
        id:3,
        title:"T3",
        description:"D3",
        image:require('../../assets/logo.png')
    },
    
]

function MessageScreen(props) {

const [messages, setMessages] = useState(initialMessage);
const [refreshing, setRefreshing] =useState(false);

const handleDelete = (message) =>{
    setMessages(messages.filter(m => m.id !== message.id));

}

    return (
        <Screen>
 <FlatList data={messages}
        keyExtractor={message => message.id.toString}
        renderItem={({item }) => 
        <ListItem 
                title ={item.title}
                subTitle={item.description}
                image={item.image}
                onPress={() => console.log("Selected Item - ",item)}
                renderRightActions={<ListItemDeleteActoin onPress={() => handleDelete(item)}/>}
                />}

                ItemSeparatorComponent={<ListItemSeperator/>}
                refreshing = {refreshing}
                onRefresh={() => {
                    setMessages([
                        {
                            id:1,
                            title:"T1",
                            description:"D1",
                            image:require('../../assets/avatar1.png')
                        },
                         {
                            id:2,
                            title:"T2",
                            description:"D2",
                            image:require('../../assets/avatar2.png')
                        },
                        {
                            id:3,
                            title:"T3",
                            description:"D3",
                            image:require('../../assets/avatar3.png')
                        },
                        {
                            id:4,
                            title:"T4",
                            description:"D4",
                            image:require('../../assets/avatar4.png')
                        }
                    ])
                }}
            
        />
        </Screen>
       

      
    );
}
const styles = StyleSheet.create({
    
})

export default MessageScreen;