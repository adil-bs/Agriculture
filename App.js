import {ThemeProvider,createTheme,Skeleton,} from '@rneui/themed'
import Navigators from './navigators'
import { LogBox, useColorScheme } from 'react-native'
import { useEffect } from 'react'

const App = () => {
  useEffect(()=>{
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
  },[])

  const mode = useColorScheme()
  const theme = createTheme({
    lightColors:{
      primary:"#4DB6AC",
      secondary:"#4BBF19",
      background:"#ECF2F1",
      text:"#000000",
      cardUI:"white",
      divider:"gray",
    },
    darkColors:{
      primary:"#9CCC65",
      secondary:"#4BBF19",
      background:"black",
      text:"#FFFFFF",
      cardUI:"#011516",
      card:"#082422",
    },
    mode:mode ,
    components:{
      Text: (props , theme) => ({
        style:{
          color : theme.colors.text,
          fontWeight : props.bold ? "bold" : "300",
        },
      }),
      Image:(props) => ({
        PlaceholderContent : 
          <Skeleton 
            animation='wave' 
            skeletonStyle={{borderRadius:15}} 
            height={props.height || props.style.height || 'auto'}
            width={props.width || props.style.width || 'auto'}
          />,
        transition:"true",
      }),
      Card:(_,theme) => ({
        containerStyle:{
          borderColor:theme.colors.divider,
          backgroundColor:theme.colors.cardUI,
        },
      }),
    }
  })
  return (
    <ThemeProvider theme={theme}>
      <Navigators/>
    </ThemeProvider>
  )
}

export default App