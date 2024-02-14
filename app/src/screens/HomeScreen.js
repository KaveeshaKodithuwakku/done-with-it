import { View, Text,StyleSheet, FlatList } from 'react-native'
import React, { useState } from 'react'
import Card from '../components/Card'
import Screen from '../components/Screen'
import colors from '../../config/colors'
import AppPicker from '../components/AppPicker'

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
    id:3,
    title: "Red Jacket for sale",
    price:100,
    image : require('../../assets/red-jacket.jpg')
  }

]


const categoryList = [
  {
    id:1,
    categoryName: 'Furniture',
    value: 1,
    image: require('../../assets/sofa.png')
  },
  {
    id:2,
    categoryName: 'Clothing',
    value: 2,
    image: require('../../assets/clothing.png')
  },
  {
    id:3,
    categoryName: 'Foods',
    value: 3,
    image: require('../../assets/food.png')
  },
  {
    id:4,
    categoryName: 'Electric Items',
    value: 4,
    image: require('../../assets/electronics.png')
  }
  ]


export default function HomeScreen() {

  const [category, setCategory] = useState(categoryList[0]);

  return (

    <Screen style={styles.screen}>

<AppPicker
        icon="apps"
        items={categoryList}
        selectedItem = {category}
        onSelectedItem ={item => setCategory(item)}
        placeholder="Category"/>

      <FlatList data={listing}
      keyExtractor={listItem => listItem.id.toString()}
      renderItem={({item}) => 
        <Card 
        title={item.title}
                 subTitle ={"$" + item.price}
                 image = {item.image}
                 imgWidth={"100%"}
                 imgHeight = {200}
                 />
      }/>
    </Screen>
  )
}

const styles = StyleSheet.create({
    screen:{
        backgroundColor: colors.lightGray,
        padding: 10,
        paddingTop: 30,
    
    }
})