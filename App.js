import * as React from 'react';
import { View, Text ,StyleSheet} from 'react-native';
import Contants from 'expo-constants'
import RegisterVehicle from './sacreens/Register'
import Profile from './sacreens/Profile'
import Home from './sacreens/HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack'

const Stack = createStackNavigator();
const myoption= {
        title:"List",
         headerTintColor:"white",
         headerStyle:{
           backgroundColor:"#006aff"
         }
}
 function App(){
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

export default () =>{
  return(
    <NavigationContainer>
      <App/>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#e0e0e0',
     
  },
})
