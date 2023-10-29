import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Card} from '@rneui/themed';

export default function CropCard ()  {
  return (
    <Card containerStyle={style.cardContainer} >
        <Card.Image source={require("../assets/icon.png")} style={style.image} />
        <View style={style.desc}>
            <Text style={style.heading}>Crop 1</Text>
            <Text style={style.heading}>Crop 1</Text>
        </View>
    </Card>
  )
}

const style = StyleSheet.create({
    cardContainer:{
        borderRadius:20,
        padding:0,
    },
    image:{
        borderTopLeftRadius:20,
        borderTopRightRadius:20,
        height:200,
    },
    desc:{
        padding:20,
    },
    heading:{
        fontSize:20,
        fontWeight:"bold"
    },

})