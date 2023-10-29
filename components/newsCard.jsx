import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Card } from '@rneui/themed'
import { Image } from 'react-native'

export default function NewsCard({data}) {
  return (
    <Card containerStyle={styles.container} wrapperStyle={styles.container}>
        <View style={styles.container}>
            <Card.Title>{data.head}</Card.Title>
            <Card.Image source={{uri:data.uri}} style={styles.img}/>
        </View>
    </Card>
  )
}

const styles = StyleSheet.create({
    container:{
        display:"flex",
        borderRadius:20,
        alignContent:"space-between"
    },
    img:{
        width:100,
        height:100,
        borderRadius:20,
        resizeMode:"center",
    },
})