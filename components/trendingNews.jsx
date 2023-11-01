import React,{ useRef } from 'react'
import { Animated, Dimensions, FlatList, ImageBackground, StyleSheet, Text, View, } from 'react-native'
import { getRelativeTime } from '../utility'
import { Icon } from '@rneui/themed'

const margin = 15
const windowWidth = Dimensions.get("screen").width-margin*2

const NewsPage = ({ item, style,navigation }) => {
  const formattedDate = getRelativeTime(item.published_date)
  return (
    <Animated.View 
      style={style} 
      onStartShouldSetResponder = {()=>true}
      onResponderRelease={() => navigation.navigate('NewsDetail',{id:item.id})}
    >
    <ImageBackground
      source={{ uri: item.media }}
      alt='jin'
      style={styles.img}
    >
      <View style={styles.newsSection}>
        <Text style={[styles.newsText,{fontSize:30}]}>{item.title}</Text>
        <Text style={[styles.newsText,{fontSize:16}]}>{item.description}</Text>
        
        <View style={styles.footerContainer}>
          <Text style={[styles.newsText,{fontSize:10}]}>{item.rights}  </Text>
          <Icon name="ellipse" type={"ionicon"} size={6} color={"#F5F5F5"}  />                
          <Text style={[styles.newsText,{fontSize:10}]}>  {formattedDate}</Text>
        </View>
      
      </View>
    </ImageBackground>
    </Animated.View>
    )
  }
  
export default function TrendingNews({data,navigation}) {
  const scrollX = useRef(new Animated.Value(0)).current

  return (
    <View style={styles.container}>

      <Animated.View style={styles.imgContainer} >
        <FlatList
          data={data}
          renderItem={({ item, index }) => {
            const opacity = scrollX.interpolate({
              inputRange: [windowWidth * index, windowWidth * (index + 1)],
              outputRange: [1, 0],
            });
            return <NewsPage item={item} style={{opacity}} navigation={navigation}/>
          }}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          scrollEventThrottle={300}          
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: {x: scrollX} } }],
            {useNativeDriver:false}
          )}
        />
      </Animated.View>

      <View style={styles.dotContainer}>
        {data.map((_, i) => {
          const width = scrollX.interpolate({
            inputRange: [windowWidth * (i - 1), windowWidth * i, windowWidth * (i + 1)],
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
    height:400,
    width:windowWidth,
    resizeMode:"cover", //exp
    padding:20,
    borderRadius: 10, 
    overflow: 'hidden',   
    color:"red"
  },
  newsSection:{
    flex:1,
    justifyContent:"flex-end",
  },
  newsText:{
    color: 'white', 
    fontWeight: 'bold', 
    textShadowColor: 'black',
    textShadowOffset: { width: -1, height: -1 },
    textShadowRadius: 4,
  },
  footerContainer:{
    flexDirection:"row",
    alignItems:"center"
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
    backgroundColor:"#4DB6AC",
    marginHorizontal: 4,
  },
})