import React from 'react';
import {  FlatList, ScrollView} from "react-native";
import { Card, Text } from '@rneui/themed'
import {CropHeader, CropList} from '../components/cropElements';
import { StyleSheet } from 'react-native';
import Weather from '../components/weather';


export default function Home() {
  const data = [
    {name:"rice",stage:"sowing",condition:"critical"},
    {name:"rice",stage:"sowing",condition:"critical"},
    {name:"rice",stage:"sowing",condition:"critical"},
    {name:"rice",stage:"sowing",condition:"critical"},
  ]

    return (
      <ScrollView style={{flex:1}} showsVerticalScrollIndicator={false}>
        <Card containerStyle={styles.container}>
          <FlatList
            data={data}
            renderItem={({item})=><CropList {...item} />} 
            ListHeaderComponent={<CropHeader/>}
            ItemSeparatorComponent={<Card.Divider style={styles.separator}/>}
          />
        </Card>

        <Card containerStyle={styles.container}>
          <Weather/>
        </Card>
      </ScrollView>
    )
}

const styles = StyleSheet.create({
  container:{
    borderRadius:15,
  },
  separator:{
    marginTop:10,
  }
})
