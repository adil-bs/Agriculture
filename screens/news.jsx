import React from 'react';
import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native";
import TrendingNews from '../components/trendingNews';
import NewsCard from '../components/newsCard';

export default function News() {
    
const data = [
  {id:1,head:"#News1",desc:"the small description",date:"2000-02-02",uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4nIdDFxoiwmTTuM3QR-vQHILNbrDr6wL-_g&usqp=CAU"},
  {id:2,head:"#News2",desc:"the small description",date:"2001-07-01",uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4nIdDFxoiwmTTuM3QR-vQHILNbrDr6wL-_g&usqp=CAU"},
  {id:3,head:"#News3",desc:"the small description",date:"2002-08-05",uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4nIdDFxoiwmTTuM3QR-vQHILNbrDr6wL-_g&usqp=CAU"},
  {id:4,head:"#News4",desc:"the small description",date:"2003-01-09",uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4nIdDFxoiwmTTuM3QR-vQHILNbrDr6wL-_g&usqp=CAU"},
]
    return (
      <ScrollView>
        <TrendingNews data={data}/>

        <View style={style.cardContainer}>
          <FlatList
            data={data}
            renderItem={({item}) => <NewsCard data={item}/>}
          />
        </View>

      </ScrollView>
    );
}
const style = StyleSheet.create({
  cardContainer:{
  }
})

