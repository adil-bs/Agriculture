import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useContext } from 'react'
import { NewsContext } from '../utility'
import { Image } from 'react-native'

export default function NewsDetail({route}) {
    const {articles} = useContext(NewsContext)
    const id = route.params.id
    const news = articles.find(article => article.id === id)

  return (
    <ScrollView style={styles.container}>
        <Text style={styles.title}>{news.title}</Text>
        <Image source={{uri:news.media,height:300}} style={styles.img} />
        <Text style={styles.desc}>{news.description}</Text> 
        <Text>{news.content}</Text>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    container:{
        padding:20,
    },
    title:{
        fontSize:27,
        fontWeight:"bold",
    },
    img:{
        borderRadius:20,
        marginVertical:20,
    },
    desc:{
        marginBottom:10,
        fontStyle:"italic"
    }
})