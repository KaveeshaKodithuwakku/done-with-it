import { View, Text,StyleSheet, FlatList } from 'react-native'
import React from 'react'
import Card from '../components/Card'
import ListingDeatilsScreen from './ListingDeatilsScreen'
import Screen from '../components/Screen'
import colors from '../../config/colors'
import AppTextInput from '../components/AppTextInput'

const listing = [
  {
    id:1,
    title: "White T-Shirt for sale",
    price:100,
    image : require('../../assets/white-T.jpg')
  },
  {
    id:2,
    title: "Frock for sale",
    price:100,
    image : require('../../assets/blue-top.jpg')
  },
  {
    id:2,
    title: "Red Jacket for sale",
    price:100,
    image : require('../../assets/red-jacket.jpg')
  }

]

export default function HomeScreen() {
  return (

    <Screen style={styles.screen}>

      <AppTextInput icon="email" placeholder="User Name"/>

      <FlatList data={listing}
      keyExtractor={listItem => listItem.id.toString()}
      renderItem={({item}) => 
        <Card 
        title={item.title}
                 subTitle ={"$" + item.price}
                 image = {item.image}
                 />
      }/>
    </Screen>
  )
}

const styles = StyleSheet.create({
    screen:{
        backgroundColor: colors.lightGray,
        padding: 10,
        paddingTop: 100,
    
    }
})