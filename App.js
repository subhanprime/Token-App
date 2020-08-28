import * as React from 'react';
import { View, Text ,StyleSheet,TouchableOpacity} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Contants from 'expo-constants'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import RegisterVehicle from './sacreens/Register'
import Profile from './sacreens/Profile'
import Home from './sacreens/HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack'
import { Fontisto } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

//import { Icon } from 'react-native-paper/lib/typescript/src/components/Avatar/Avatar';
//import Apptabs from './sacreens/Ap


const myoption= {
        title:"List",
         headerTintColor:"white",
         headerStyle:{
           backgroundColor:"#006aff"
         }
}


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
 function Appstack(){
  return(
    <View style={styles.container}>


   <Stack.Navigator>

      <Stack.Screen
       name="Home" 
       component={Home} 
       options={myoption}
         
       
       />
      <Stack.Screen
       name="Create"
        component={RegisterVehicle} 
        options={{...myoption, title:"Enter Vehicle"}}
        />
      <Stack.Screen
       name="Profile" 
       component={Profile} />
    
    </Stack.Navigator>
        
        
    </View>
  );
}

const Tab1 =()=>{
  return(
    <View>
      <Text>
        Tab1
      </Text>
    </View>
  )
}
 
const Tab2 =()=>{
  return(
    <View style={{alignItems:"center", justifyContent:"center"}}>
      <Text>
        Tab2
      </Text>
    </View>
  )
}

const AppTabs = ()=>{
  return(
    <Tab.Navigator
    initialRouteName="Tab1" 
    tabBarOptions={{
      activeTintColor: 'red',
    }}
    
    
    >
      <Tab.Screen name="Tab1" 
      component={Tab1} 
      options={{
        tabBarLabel: 'Tab1',
        tabBarColor:'#009387@',
        tabBarIcon:()=>(
          //<MaterialCommunityIcons name="home" size={26} color="blue"/>
          <AntDesign name="home" size={24} color="black" />
        )
      }}
      />
      <Tab.Screen name="Tab2" 
      component={Tab2} 
      options={{
        //tabBarLabel: 'updates',
        tabBarIcon:()=>(
          //<MaterialCommunityIcons name="bell" size={26} color="blue"/>
          <MaterialCommunityIcons name="file-chart" size={24} color="black" />
        )
      }}
      />
      <Tab.Screen name="List" 
      component={Appstack}
      options={{
        //tabBarLabel: 'updates',
        tabBarIcon:()=>(
         // <MaterialCommunityIcons name="account" size={26} color="blue"/>
         <Fontisto name="list-2" size={24} color="black" />

        )
      }}
      />
    </Tab.Navigator>
  )

}
const App = () =>{
  return(
    <NavigationContainer>
      <AppTabs/>
    </NavigationContainer>
  )
}
  
const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#e0e0e0',
     
  },
})

export default App;