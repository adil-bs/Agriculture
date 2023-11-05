import React from 'react'
import { StyleSheet, View } from 'react-native'
import {Text, Icon} from '@rneui/themed';

export function CropHeader() {
    return(
        <View style={[style.inline,style.header]}>
            <Text h3>Your Crops</Text>
            <Icon name="edit" size={20} />
        </View>
    )
}
export function CropList (props)  {
    const phaseIndicator = {preparation:"yellow",sowing:"#FFB300",irrigaton:"#F57C00",harvest:"red"}
    const conditionIndicator = {normal:"green",sowing:"#FFB300",irrigaton:"#F57C00",critical:"red"}
  return (
    <View style={style.cardContainer}>
        <View style={style.inline}>
            <Text h4>{props.name.toUpperCase()}</Text>

            <View style={style.inline}>
                <Icon name="ellipse" size={12} type={"ionicon"} color={phaseIndicator[props.stage]}  />
                <Text> {props.stage}</Text>        
            </View>    
        </View>
        <View style={[style.inline,{justifyContent:"flex-start"}]}>
            <Text>Conditon : </Text>
            <Text bold style={{color:conditionIndicator[props.condition]}}>{props.condition}  </Text>
        </View>
        
    </View>
  )
}

const style = StyleSheet.create({
    header:{
        borderBottomWidth:3,
        borderColor:"gray",
        paddingBottom:15,
        marginBottom:15,
    },
    cardContainer:{
        borderRadius:20,
    },
    inline:{
        justifyContent:"space-between",
        flexDirection:"row",
        alignItems:"center"
    }
})