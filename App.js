import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Home from './screens/home';
import News from './screens/news';
import NewsDetail from './screens/newsDetail';
import { Icon } from '@rneui/themed'

function NewsStack() {
  const Stack = createStackNavigator()
  return(
    <Stack.Navigator initialRouteName='NewsDetail' screenOptions={{headerShown:false}}>
      <Stack.Screen name="NewsIndex" component={News} />
      <Stack.Screen name="NewsDetail" component={NewsDetail} />
    </Stack.Navigator>

  )
}

export default function App() {
  const Tab = createBottomTabNavigator()
  return (
    <SafeAreaProvider>
    <NavigationContainer>

      <Tab.Navigator screenOptions={ ({route}) =>({
        tabBarIcon: ({size,color}) => {
          const iconName = {Home:'home',News:'newspaper'}
          return <Icon name={iconName[route.name]} size={size} type="ionicon" color={color} />;
        },
        tabBarLabelStyle:{
          fontWeight:"bold",
          marginBottom:3,
        },
        tabBarActiveTintColor : "#66BB6A",
      })}>
        <Tab.Screen name='Home' component={Home}/>
        <Tab.Screen name='News' component={NewsStack}/>
      </Tab.Navigator>

    </NavigationContainer>
    </SafeAreaProvider> 
  );
}