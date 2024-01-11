import { View, StyleSheet } from 'react-native'
import React from 'react'
import HomeUI from '../components/homeUI'
import { Card, Text, Icon, useTheme } from '@rneui/themed'

export default function Crop({route}) {
  const {name,area,stage} = route.params
  const { theme } = useTheme()
  const events = [
    { title: 'Event 1', description: 'Description for Event 1', time: '10:00 AM' },
    { title: 'Event 2', description: 'Description for Event 2Description for Event 2Description for Event 2', time: '01:00 PM' },
    { title: 'Event 2', description: 'Description for Event 2', time: '01:00 PM' },
    { title: 'Event 2', description: 'Description for Event 2', time: '01:00 PM' },
    { title: 'Event 2', description: 'Description for Event 2', time: '01:00 PM' },
    // Add more events as needed
  ];
  return (
    <HomeUI heading={name} sub={area + ' | ' + stage}>
      <Card containerStyle={{borderRadius:12}}>
      {events.map((event, index) => (
        <View key={index} style={styles.timelineItem}>
          {index !== events.length-1 && <View style={styles.line} />}
          <View style={[styles.circle,{borderColor:theme.colors.primary,}]}>
            <Icon name="circle" type="font-awesome" color={theme.colors.primary} size={16} />
          </View>
          <View style={styles.contentContainer}>
            <Text style={styles.title}>{event.title}</Text>
            <Text>{event.description}</Text>
            <Text style={styles.time}>{event.time}</Text>
          </View>
        </View>
      ))}
      </Card>
    </HomeUI>
  )
}

const styles = StyleSheet.create({
  timelineContainer: {
    flex: 1,
    padding: 10,
    flexDirection: 'column',
  },
  timelineItem: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative',
  },
  line: {
    height: '100%',
    width: 2,
    backgroundColor: 'gray',
    position: 'absolute',
    top:"50%",
    left: 7,
    zIndex: -1,
  },
  circle: {
    backgroundColor: 'white',
    borderRadius: 8,
    borderWidth: 2,
    width: 16,
    height: 16,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1,
  },
  contentContainer: {
    flex: 1,
    marginLeft: 20,
    paddingVertical: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  time: {
    color: 'gray',
  },
});
