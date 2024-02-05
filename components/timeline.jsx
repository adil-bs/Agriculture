import {View,StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import { Icon, useTheme, Text } from '@rneui/themed';
import { getRelativeTime } from '../utility';

export default function Timeline({data}) {
  const { theme } = useTheme()

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
    {data.map((event, index) => (
        <View key={index} style={styles.timelineItem}>
            {index !== data.length-1 && <View style={styles.line} />}
            <View style={[styles.circle,{borderColor:theme.colors.primary,}]}>
                <Icon name="circle" type="font-awesome" color={theme.colors.primary} size={16} />
            </View>
            <View style={styles.contentContainer}>
                <Text style={styles.title}>{event.title}</Text>
                <Text>{event.description}</Text>
                <Text style={styles.time}>{getRelativeTime( new Date(event.time ) )}</Text>
            </View>
        </View>
    ))}
    </ScrollView>
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