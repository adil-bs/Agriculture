import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Card, Icon } from '@rneui/themed'
import { getRelativeTime } from '../utility'

export default function NewsCard({item,navigation}) {
    const formattedDate = getRelativeTime(item.published_date)

  return (
    <Card 
        containerStyle={styles.container} 
        wrapperStyle={styles.containerWrap}
        onStartShouldSetResponder = {()=>true}
        onResponderRelease={() => navigation.navigate('NewsDetail',{id:item.id})}
    >
        <View style={{flex:1}}>
            <Text style={styles.header}>{item.title}</Text>

            <View style={styles.footerContainer} >
                <Text style={styles.footer}>{item.rights}  </Text>
                <Icon name="ellipse" type={"ionicon"} size={6} color={"gray"}  />
                <Text style={styles.footer}>  {formattedDate}</Text>
            </View>
        </View>
        <Card.Image source={{uri:item.media}} style={styles.img}/>
    </Card>
  )
}

const styles = StyleSheet.create({
    container:{
        borderRadius:20,
    },
    containerWrap:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
    },
    header:{
        flex:1,
        textAlignVertical:"center",
        fontWeight:"bold",
        fontSize:20,
    },
    footerContainer:{
        flexDirection:"row",
        alignItems:"center"
    },
    footer:{
        color:"gray",
        fontSize:10,
    },
    img:{
        width:100,
        height:100,
        borderRadius:20,
        resizeMode:"center",
    },
})