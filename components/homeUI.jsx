import { View, ScrollView, Dimensions } from 'react-native'
import React from 'react'
import { Text, makeStyles } from '@rneui/themed'

export default function HomeUI({heading,sub,children}) {
    const [widthOffset, setWidthOffset] = React.useState(0);
    const styles = useStyles()

    React.useEffect(() => {
        const {width} = Dimensions.get('window');
        setWidthOffset(width * -0.52 );
    }, []);
  return (
    <ScrollView>
        <View style={[styles.bg,{right:widthOffset}]}>
            <Text style={{color:"white"}} h3>{heading}</Text>
            <Text style={{color:"white",marginTop:10,fontSize:17}} bold>{sub}</Text>
        </View>  

        <View style={{marginTop:110}}>
            {children}  
        </View>
    </ScrollView>  
  )
}

const useStyles = makeStyles(theme => ({
    bg:{
        backgroundColor:theme.colors.secondary+'BF',
        height:800,
        width:800,
        borderRadius:1000,
        position:'absolute',
        top:-600,
        paddingBottom:100,
        justifyContent: 'flex-end', 
        alignItems: 'center',
    },
}))