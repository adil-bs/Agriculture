import React,{ useRef } from 'react'
import { Animated, Dimensions, FlatList, ImageBackground, StyleSheet, Text, View, } from 'react-native'

const margin = 15
const windowWidth = Dimensions.get("screen").width-margin*2

const NewsPage = ({ item }) => {
  const formattedDate = new Date(item.date)
    .toLocaleDateString(undefined, {year:'numeric',month:'long',day:'numeric'});

  return (
    <ImageBackground
      source={{ uri: item.uri }}
      alt='jin'
      style={styles.img}
    >
      <View style={styles.newsSection}>
        <Text style={{color:"white",fontSize:30,fontWeight:"bold"}}>{item.head}</Text>
        <Text style={{color:"white",fontSize:16,fontWeight:"bold"}}>{item.desc}</Text>
        <Text style={{color:"white"}}> {formattedDate} </Text>
      </View>
    </ImageBackground>
    )
  }
  
  export default function TrendingNews({data}) {
  const scrollX = useRef(new Animated.Value(0)).current

  return (
    <View style={styles.container}>

      <View style={styles.imgContainer} >
        <FlatList
          data={data}
          renderItem={({ item }) => <NewsPage item={item}/>}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onScroll={Animated.event([{
            nativeEvent: {
              contentOffset: {x: scrollX}
            }
          }])}
        />
      </View>

      <View style={styles.dotContainer}>
        {data.map((_, i) => {
          const width = scrollX.interpolate({
            inputRange: [
              windowWidth * (i - 1),
              windowWidth * i,
              windowWidth * (i + 1),
            ],
            outputRange: [10, 30, 10],
            extrapolate: 'clamp',
          });
          return (
            <Animated.View key={i} style={[styles.normalDot, {width}]}/>
          );
        })}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal:margin,
  },
  imgContainer:{
  },
  img: {
    flex:1,
    height:250,
    width:windowWidth,
    padding:20,
    borderRadius:10,    
  },
  newsSection:{
    flex:1,
    justifyContent:"flex-end",
    color:"#FFFFFF",
  },
  dotContainer: {
    margin:12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  normalDot: {
    height: 10,
    width: 10,
    borderRadius: 10,
    backgroundColor:"#7FB682",
    marginHorizontal: 4,
  },
})