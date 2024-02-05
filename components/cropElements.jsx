import { Animated, View } from 'react-native'
import React, { useEffect } from 'react'
import { Icon, Text, makeStyles, useThemeMode } from '@rneui/themed'

const cropDetailIconProps = {
    Area:{name:"terrain"},
    pH:{name:"thermometer",type:'material-community'},
    Optimal:{name:"shield-check",type:'material-community'},
    Sowing:{name:"seedling",type:"font-awesome-5"},
    Balcony:{name:'balcony',type:'material-community'},
    Pot:{name:'pot',type:'material-community'},
}
const npk = [
    {name:'Nitrogen',light:'#00A9A5',dark:'#008080',},
    {name:'Phosphorous',light:'#FFD700',dark:'#FFD100',},
    {name:'Potassium',light:'#8FCC5D',dark:'#556B2F',}
]
const getNpkRatio = (values) => {
    const maxValue = Math.max(...values);
    return values.map(value => value / maxValue);
}

export function CropDetail({value,sub,style}) {
    const styles = useStyles()
    return(
        <View style={style}>
            <Icon style={styles.cropDetailIcon} {...cropDetailIconProps[cropDetailIconProps.hasOwnProperty(sub)? sub:value]}/>
            <Text bold style={{fontSize:20}}>{value}</Text>
            <Text style={{color:'gray',fontSize:16}}>{sub}</Text>
        </View>
    )
}

export function NPK({data,style}) {
    const {mode} = useThemeMode()
    const styles = useStyles()
    const npkAnimation = new Animated.Value(0)
    const npkRatio = getNpkRatio(data)

    useEffect(()=>{      
        Animated.timing(npkAnimation, {
            toValue: 1,
            duration: 2000, 
            useNativeDriver: false, 
        }).start()
    },[])

  return (
    <View style={style}>
        <Text h4>NPK Required : {data.join('-')}</Text>

        <View style={styles.npkExpandedView}>
            {npk.map((ele,i) =>{ 

                return (
                <View key={i} style={styles.npkExpandedViewElement}>
                    <Text style={{fontSize:16,flex:2}}>{ele.name}</Text>

                    <View style={[{flex:3},styles.npkExpandedViewElement]}>
                        <Animated.View style={[
                            styles.npkMeasureView,
                            {
                                backgroundColor:ele[mode],
                                width:npkAnimation.interpolate({ inputRange:[0,1], outputRange:[0,150*npkRatio[i]] }) 
                            }
                        ]}/>
                        <Text> {data[i] }%</Text>
                    </View>
                </View>
            )})}   
        </View>
          
    </View>
  )
}

const useStyles = makeStyles(theme => ({  
    cropDetailIcon:{
        alignSelf:"flex-start",
        marginVertical:7
    },
    npkExpandedView:{
      marginVertical:10,
      rowGap:10,
    },
    npkExpandedViewElement:{
      flexDirection:"row",
      alignItems:"center",
    },
    npkMeasureView:{
      height:9,
      borderRadius:20,
      borderColor:theme.mode==='dark'?'gray':'black',
      borderWidth:1,
      elevation:4,
      opacity:0.8,
    },
}))
  
  
  