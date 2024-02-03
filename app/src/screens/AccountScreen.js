import React from 'react';
import Screen from '../components/Screen';
import ListItem from '../components/ListItem';
import { View, StyleSheet, FlatList } from 'react-native';
import colors from '../../config/colors';
import Icon from '../components/Icon';
import ListItemSeperator from '../components/ListItemSeperator';

const menuItems = [{
   title:"My Listing",
   icon:{
     name:"format-list-bulleted",
     backgroundColor: colors.primary
   },
   title:"My Messages",
   icon:{
     name:"email",
     backgroundColor: colors.secondary
   }
}]

function AccountScreen(props) {
    
    return (
        <Screen style={styles.screen}>
            <View style={styles.container}>
            <ListItem title="Kaveesha Madushani"
            subTitle="k@gmail.com"
            image={require('../../assets/avatar6.png')}
            />
            </View>

            <View style={styles.container}>
                <FlatList data={menuItems}
                    keyExtractor={menuItems => menuItems.title}
                    ItemSeparatorComponent={<ListItemSeperator/>}
                    renderItem={({item}) => 
                    <ListItem title={item.title} 
                    IconComponent={<Icon name={item.icon.name}
                    backgroundColor={item.icon.backgroundColor}/>}/>
                    }/>
                </View>

                <ListItem title="Log Out"
                IconComponent={<Icon name="logout" backgroundColor='#ffe66d'/>}/>
          
        </Screen>
    );
}
const styles = StyleSheet.create({
    screen:{
        backgroundColor:colors.lightGray
    },
    container:{
        marginVertical:20
    }
})

export default AccountScreen;