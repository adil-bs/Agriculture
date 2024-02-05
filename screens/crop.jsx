import { View, StyleSheet, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import HomeUI from '../components/homeUI'
import { Card, Text, Icon, useTheme, ButtonGroup, Tab, TabView, makeStyles, useThemeMode } from '@rneui/themed'
import { camelToCapital } from '../utility'
import Timeline from '../components/timeline'
import {CropDetail, NPK} from '../components/cropElements'

export default function Crop({route}) {
  const {name,area,stage,img} = route.params
  const styles = useStyles()
  const [cropData, setCropData] = useState()
  const [index, setIndex] = useState(0);

  useEffect(()=>{
    setCropData({
      ...{name,area,stage},
      grown:'pot',
      npk:[20,10,5],
      ph:'6.5',
      phStatus:'optimal',
      schedule:[
        { title: 'Watering', description: 'Additional Description', time: '2024-02-05T12:30:45.678Z' },
        { title: 'Watering', description: 'Additional Description', time: '2024-02-05T12:30:45.678Z' },
        { title: 'Fertilizer', description: 'Additional Description', time: '2024-02-05T12:30:45.678Z' },
        { title: 'Watering', description: 'Additional Description', time: '2024-02-05T12:30:45.678Z' },
        { title: 'Watering', description: 'Additional Description', time: '2024-02-05T12:30:45.678Z' },
        // Add more events as needed
      ],
      history:[
        { title: 'Watering', description: 'Additional Description', time: '2024-02-02T12:30:45.678Z' },
        { title: 'Watering', description: 'Additional Description', time: '2024-02-02T12:30:45.678Z' },
        { title: 'Fertilizer', description: 'Additional Description', time: '2024-02-02T12:30:45.678Z' },
        { title: 'Watering', description: 'Additional Description', time: '2024-02-02T12:30:45.678Z' },
        { title: 'Watering', description: 'Additional Description', time: '2024-02-02T12:30:45.678Z' },
        // Add more events as needed
      ],
    })
  },[])
  
  return (
    cropData &&
    <HomeUI heading={name} img={img} >

      <Card containerStyle={styles.card1}>
        <View style={styles.cropDetailContainer}>      
        {['area','stage','grown'].map(ele => <CropDetail  key={ele} value={camelToCapital(cropData[ele])} sub={camelToCapital(ele)} /> )}
        </View>
        <View style={[styles.cropDetailContainer,{marginTop:25}]}>
          <CropDetail value={cropData.ph} sub={'pH'} />
          <CropDetail value={camelToCapital(cropData.phStatus)} sub={'pH Status'} />
        </View>

        <NPK style={{marginTop:35}} data={cropData.npk}/>
      </Card>


      <Card containerStyle={styles.timelineCardContainer}>

        <Tab value={index} onChange={(e) => setIndex(e)} indicatorStyle={{height: 3}}>
          <Tab.Item title={'Schedule'} />
          <Tab.Item title={'History'} />
        </Tab>
    
        <View style={{marginTop:15,height:500}}>
          <TabView value={index} onChange={setIndex} animationType="spring">
            <TabView.Item style={{ width: '100%',marginLeft:15}}>
              <Timeline data={cropData.schedule}/> 
            </TabView.Item>
            <TabView.Item style={{ width: '100%',marginLeft:15}}>
              <Timeline data={cropData.history}/>
            </TabView.Item>
          </TabView>
        </View>

      </Card>

    </HomeUI>
  )
}

const useStyles = makeStyles(theme => ({
  card1:{
    borderRadius:12,
  },
  cropDetailContainer:{ 
    flexDirection: 'row', 
    alignItems: 'center',
    justifyContent:"space-around",
  },
  timelineCardContainer:{
    borderRadius:12,
    overflow:"hidden",
    marginBottom:15
  },
}))


