import React from 'react';
import {  FlatList, ScrollView, SectionList} from "react-native";
import { Card, Divider, Text } from '@rneui/themed'
import { CropHeader, CropList} from '../components/cropElements';
import { StyleSheet } from 'react-native';
import Weather from '../components/weather';


export default function Home() {
  
  return (
    <SectionList
      sections={[{data:[1]}]}           //dummy
      renderItem={()=><></>}    //dummy
      ListHeaderComponent={<CropSection/>}
      ListFooterComponent={<Card containerStyle={styles.container}><Weather/></Card>}
      showsVerticalScrollIndicator={false}
    />
  )
}

function CropSection() {
  const data = [
    {id:1,name:"rice",stage:"sowing",condition:"critical"},
    {id:2,name:"rice",stage:"sowing",condition:"critical"},
    {id:3,name:"rice",stage:"sowing",condition:"critical"},
    {id:4,name:"rice",stage:"sowing",condition:"critical"},
  ]
  return(
    <Card containerStyle={styles.container}>
      <FlatList
        data={data}
        renderItem={({item})=><CropList {...item} />} 
        ListHeaderComponent={<CropHeader/>}
        ItemSeparatorComponent={<Card.Divider style={styles.separator}/>}
      />
    </Card>
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
