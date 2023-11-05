import React from 'react';
import {  FlatList, View} from "react-native";
import { Card, Text } from '@rneui/themed'
import {CropHeader, CropList} from '../components/cropElements';
import { StyleSheet } from 'react-native';



export default function Home() {
  const data = [
    {name:"rice",stage:"sowing",condition:"critical"},
    {name:"rice",stage:"sowing",condition:"critical"},
    {name:"rice",stage:"sowing",condition:"critical"},
    {name:"rice",stage:"sowing",condition:"critical"},
  ]

    return (
      <View>
        <Card containerStyle={styles.cropContainer}>
          <FlatList
            data={data}
            renderItem={({item})=><CropList {...item} />} 
            ListHeaderComponent={<CropHeader/>}
            ItemSeparatorComponent={<Card.Divider style={styles.separator}/>}
          />
        </Card>

      </View>
    )
}

const styles = StyleSheet.create({
  cropContainer:{
    borderRadius:15,
  },
  separator:{
    marginTop:10,
  }
})
