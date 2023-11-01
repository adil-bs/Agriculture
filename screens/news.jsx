import React,{ useContext } from 'react';
import { FlatList, StyleSheet, View } from "react-native";
import TrendingNews from '../components/trendingNews';
import NewsCard from '../components/newsCard';
import { NewsContext } from '../utility';

export default function News({navigation}) {   
  const {articles} = useContext(NewsContext)
  return (
    <View style={{flex:1}}>
      <FlatList
        data={articles}
        renderItem={({item}) => <NewsCard {...{item,navigation}}/>}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={<TrendingNews data={articles} navigation={navigation}/>}
      />
    </View>
  );
}
const style = StyleSheet.create({})

