import React, { useEffect } from 'react'
import {View, ScrollView, StyleSheet, Text} from 'react-native'
import Pie from 'react-native-pie'
import { Colors } from 'react-native/Libraries/NewAppScreen'

  
const DashboardScreen= ()=> {

    useEffect(async()=> {
        // Fetch data from server
        // const data = await fetch

        // Parse json data to chart pie
        // const {label, percentage}
    })


    const pieSections = [
        {
          label: "סך כל התקציב",
          percentage: 30,
          color: '#44CD40',
        },
        {
            label: "סך הכל הכנסות אחרי תקציב",
          percentage: 70,
          color: '#404FCD',
        }
      ]

    return (
        <View style={styles.container}>
            <Text style={styles.header}>תקציב לחודש הנוכחי</Text>
            <View style={styles.chartContainer}>
                <Pie
                radius={80}
                sections={pieSections}
                strokeCap={'butt'}
                />
                {/* <View> */}
                    {pieSections.map((item) => 
                        <Text style={{color: item.color, fontSize: 25, marginVertical: 5}}>
                         {item.percentage}% {item.label} 
                        </Text>)}
                {/* </View> */}
            </View>
            <View style={{alignItems: 'center'}}>
                <Text style={styles.footer}>יתרת התקציב</Text>
                <Text style={{fontSize: 25}}>22,000₪</Text>
            </View>
        </View>
    );
  }

  export default DashboardScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: Colors.white,
    justifyContent: 'space-between',
    paddingVertical: 20
  },
  chartContainer: {
    width: '100%',
    alignItems: 'center',
    // flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginVertical: 50
  },
  title: {
    fontSize: 24,
    margin: 10
  },
  header: {
      fontSize: 45
  },
  footer: {
    fontSize: 30,
    color: '#6020f0'
  }
  });