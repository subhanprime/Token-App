import * as React from 'react';
import { View, Text, StyleSheet,Image, FlatList } from 'react-native';
import {LinearGradient} from 'expo-linear-gradient'
import {Title, Card, Button} from 'react-native-paper'
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Profile = ()=>{
    return(
        <View style={styles.root }>
         <LinearGradient
         colors={["#0033ff","#6bc1ff"]}
         style={{height:"20%"}}
         />
         <View style={{alignItems:"center"}}>

         <Image
         style={{width:150, height:150, borderRadius:150/2 , marginTop:-50}}
         source={require('./a.jpg')}
         />

         </View>
         <View style={{alignItems:"center"}}>
             <Title>Subhan Ali</Title>
             <Text style={{fontSize:18}}>Employee</Text>
         </View>
        
        <Card style={styles.mycard}>
           <View style={styles.cardcontent}>  
           {/* <MaterialIcons name="description" size={24} color="black" /> */}
           <MaterialCommunityIcons size={24} color="black" />
           <Title style={styles.mytext}>FSD 6758</Title>
           </View>     
        </Card>

        <Card style={styles.mycard}>
           <View style={styles.cardcontent}>  
           {/* <MaterialIcons name="description" size={24} color="black" /> */}
           <MaterialCommunityIcons size={24} color="black" />
           <Title style={styles.mytext}>Bike</Title>
           </View>     
        </Card>

        <Card style={styles.mycard} >
           <View style={styles.cardcontent}>  
           {/* <MaterialIcons name="description" size={24} color="black" /> */}
           <MaterialCommunityIcons size={24} color="black" />
           <Title style={styles.mytext}>Description</Title>
           </View>     
        </Card>
        
        <View style={styles.buttonstyle}>

        <Button
         icon="account-edit" 
        mode="contained"
        theme={theme}
         onPress={() => console.log('Pressed')}>
           edit
        </Button>
        <Button 
        icon="delete"
         mode="contained" 
         theme={theme}
         onPress={() => console.log('Pressed')}>
           exit
        </Button>
        </View>
        </View>
    )
}
export default Profile;
const theme = {
    colors: {
        primary: 'green'
    }
}

const styles = StyleSheet.create({
    root:{
        flex:1
    },
    mycard:{
        margin:3
    },
    cardcontent:{
        flexDirection:"row"
    },
    mytext:{
        fontSize:20,
        marginTop:4,
        marginLeft:10
    },
    buttonstyle:{
        flexDirection:"row",
        justifyContent:"space-around",
        bottom:-50,
        marginTop:10,
        padding:5
        
    }
})