import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import Card from '../components/Card'
import ListingDeatilsScreen from './ListingDeatilsScreen'

export default function HomeScreen() {
  return (
    <View style={{backgroundColor:"#F9F6F7",  padding: 10,
    paddingTop: 100}}>
{/*       
      <Card
        title="Frock for sale"
        subTitle = "$100"
        image = {require("../../assets/dev-asangbam-CAo-CL-6a3M-unsplash.jpg")}
      />
       */}

       <ListingDeatilsScreen/>


    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#CDCDCD',
        padding: 10,
        paddingTop: 100,
    
    }
})