import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, FlatList, Alert } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();

function Tab1(){

    return(
        <View>
            <Text>
                hi i am tab1
            </Text>
        </View>
    )

}
function Tab2(){

    return(
        <View>
            <Text>
                hi i am tab2
            </Text>
        </View>
    )

}

function Apptabs() {

    return (
        <View>
            <Tab.Navigator>
                <Tab.Screen name="Tab1" component={Tab1} />
                <Tab.Screen name="Tab2" component={Tab2} />
            </Tab.Navigator>

        </View>
    )

}

export default Apptabs;