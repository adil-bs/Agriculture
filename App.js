import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Home from './screens/home';
import News from './screens/news';

export default function App() {
  const Tab = createBottomTabNavigator()
  return (
    <SafeAreaProvider>
    <NavigationContainer>

      <Tab.Navigator>
        <Tab.Screen name='Home' component={Home}/>
        <Tab.Screen name='News' component={News}/>
      </Tab.Navigator>

    </NavigationContainer>
    </SafeAreaProvider> 
  );
}