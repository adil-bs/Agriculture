import React, { useEffect, useReducer, useState } from 'react';
import { View, Image, FlatList, TouchableOpacity, LayoutAnimation } from 'react-native';
import { Text,makeStyles, useThemeMode } from '@rneui/themed';
import { weatherCode } from '../utility';
import {   weatherData } from './data';
import { LineChart } from 'react-native-gifted-charts';

const reduceCurrentWeather = (state, action) =>{
    switch (action.type) {
      case 'change_day':
        const currentWeatherDay = action.day.split('T')[0]
        return newState = {
          day     : currentWeatherDay,
          summary : action.data.timelines.daily.find(ele => ele.time.startsWith(currentWeatherDay)).values,
          hourly  : action.data.timelines.hourly.filter(ele => ele.time.startsWith(currentWeatherDay))
        }
    }
}

export default function Weather ()  {
    const styles = useStyles()
    const [currentWeather, dispatchCurrentWeather] = useReducer(reduceCurrentWeather, {day:'',summary:{},hourly:[]})
    const [graphData,setGraphData] = useState()
    const {mode} = useThemeMode()

    useEffect(()=> {
        dispatchCurrentWeather({type:"change_day",day:'2023-11-08T',data:weatherData})
    },[])

    const handleGraphData = (parameter) => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        setGraphData({
            parameter,
            data: currentWeather.hourly?.map(ele => ({
                value : ele.values[parameter],
                label : new Date(ele.time).toLocaleTimeString('en-US',{hour:'numeric',hour12:true,timeZone:'UTC'})
            }))
        })
    }
    const handleCurrentWeather = (day) => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        dispatchCurrentWeather({type:"change_day",day:day,data:weatherData})
        setGraphData()
    }

    const chartTheme = {
        light : {
            color:"black",
            xAxisColor : "black",
            xAxisText : "black",
            rulesColor : "#e6e6e6",
        },
        dark : {
            color:"#00b300",
            xAxisColor : "#a6a6a6",
            xAxisText : "white",
            rulesColor : "#003300"
        }
    }

  return (
    weatherData && currentWeather.summary.temperatureAvg &&
  <View  style={{overflow:"hidden"}}>
    <Text h3 style={styles.header}>Weather Forecast</Text>

    <View style={styles.currentWeatherImp}>
        <Image source={weatherCode[currentWeather.summary.weatherCodeMax]?.img} style={{height:140,width:140}}/>
        <Text h1>{currentWeather.summary.temperatureAvg}°C</Text>
        <Text h3>{weatherCode[currentWeather.summary.weatherCodeMax]?.name} </Text>
        <Text h4 style={{color:"gray"}}>feels like {currentWeather.summary.temperatureApparentAvg}°C</Text>
        <Text bold style={{fontSize:17}}>{weatherData.location.name}</Text>
    </View>      

    <View>
    <FlatList
        data={['temperatureAvg','precipitationProbabilityAvg','windSpeedAvg','humidityAvg','uvIndexAvg','visibilityAvg']}
        renderItem={({item}) => 
          <WeatherSpecs 
            spec={item} 
            data={currentWeather.summary}
            onPress ={() => handleGraphData(item.slice(0,-3))}
            current = {item.startsWith(graphData?.parameter)}
          />
        }
        keyExtractor={item => item}
        numColumns={3}
        style={{marginBottom:15,}}
    />

    {graphData&&
    <>
    <LineChart
        areaChart
        data={graphData.data}
        label
        noOfSections={5}
        startOpacity={0.4}
        endOpacity={0.1}
        dataPointsColor={chartTheme[mode].color}
        yAxisThickness={0}
        yAxisTextStyle={{color: 'gray'}}
        xAxisColor={chartTheme[mode].xAxisColor}
        xAxisLabelTextStyle={{color:chartTheme[mode].xAxisText}}
        rulesType="solid"
        color={chartTheme[mode].color}
        rulesColor={chartTheme[mode].rulesColor}
        startFillColor='#00cc44'
        isAnimated
        animationDuration={2000}
        // pointerConfig={{
        //     activatePointersOnLongPress:true,
        //     pointerStripHeight: 160,
        //     pointerStripColor: 'lightgray',
        //     pointerStripWidth: 2,
        //     pointerColor: 'lightgray',
        //     radius: 6,
        //     pointerLabelWidth: 100,
        //     pointerLabelHeight: 90,
        // }}
    />
    <View style={{margin:15}} />
    </>}
    </View>

    <FlatList
        data={weatherData.timelines.daily}
        renderItem={({item}) => (
            <WeatherDays 
              data={item} 
              current = {item.time.startsWith(currentWeather.day)}
              onPress={()=>handleCurrentWeather(item.time)}
            /> 
        )}
        keyExtractor={item => item.time}
        ItemSeparatorComponent={<View style={{padding:5}} />}
        showsHorizontalScrollIndicator={false}
        horizontal
    />

    {/* <Image source={require('../assets/sponsers/TomorrowBlack.png')} style={styles.sponser}/> */}
  </View>
  )
}

export function WeatherSpecs({spec,data,onPress,current}) {
    const styles = useStyles()
    const specText = spec
      .slice(0,-3)
      .split(/(?=[A-Z])|_+/)
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(' ')

    return(
        <TouchableOpacity style={{flex:1}} onPress={onPress}>
        <View style={[styles.weatherSpec,current && styles.pressedWeatherSpec]}>
            <Text h4 style={{color:"#009900"}}>{data[spec]}</Text>
            <Text style={{textAlign:"center"}}>{specText}</Text>
        </View>    
        </TouchableOpacity>
    )
}

export function WeatherDays ({data,current,...props}) {
    const styles = useStyles()
    const day = new Date(data.time).toLocaleDateString('en-US', { weekday: 'short',day:'numeric' })
    return(
        <TouchableOpacity 
          activeOpacity={1}
          style={[styles.weatherDaysContainer,current && styles.pressedWeatherDays]} 
          {...props}
        >
        <View style={{alignItems:"center"}}>
            <Image source={weatherCode[data.values.weatherCodeMax].img} style={{height:30,width:30}}/>
            <Text bold style={styles.weatherDaysFont}>{day}</Text>
        </View>
        </TouchableOpacity>
    )
}


const useStyles= makeStyles((theme) => ({
    header:{
        borderBottomWidth:3,
        borderColor:"gray",
        paddingBottom:15,
        marginVertical:15,
        marginBottom:25,
    },
    weatherSpec:{
        flex:1,
        padding:10,
        borderColor:theme.mode==='light'?"#ccffcc":"#004d00",
        borderWidth:1,
        margin:2,
        alignItems:"center",
    },
    pressedWeatherSpec :{
        backgroundColor: theme.mode === 'light'? "#ccffcc" :"#004d00"
    },
    currentWeatherImp:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        marginBottom:15,
    },
    pressedWeatherDays :{
        borderBottomWidth:6,
        paddingBottom:4,
        backgroundColor:theme.mode==='light' ? "#ebf5ee" : "#003300"
    },
    weatherDaysContainer:{
        padding:10,
        borderColor:'gray',
        borderWidth:1,
        borderRadius:20,
    },
    weatherDaysFont:{
        fontSize:16,
        marginTop:5,
    },
    sponser:{
        height:23,
        width:210,
        marginTop:20,
        marginBottom:-10,
    }
}))