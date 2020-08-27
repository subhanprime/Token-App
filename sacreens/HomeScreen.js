import React ,{useEffect,useState}from 'react';
import { View, Text, StyleSheet,Image, FlatList,Alert} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {Card, FAB} from 'react-native-paper'
import { color } from 'react-native-reanimated';

 const Home =  ({navigation})=>{

    const [data,setData] = useState([])
    const [loading,setLoading] = useState(true)


    const fetchData= ()=>{

        fetch("http://c57b0842f265.ngrok.io/dos")
              .then(res=> res.json())
            .then(result=>{
               // console.log(result)
                setData(result)
                setLoading(false)
                
            }).catch(err=>{
                Alert.alert("some thing went wrong")
            })

    }
      useEffect(()=>{

         fetchData()  
    },[])

    // const data = [
    //     {id:1, number:"Fsd 2611", type:"Car",name:"Usam atta"},
    //     {id:1, number:"Fsd 2612" ,type:"Parado",name:"Subhan ali"},
    //     {id:1, number:"Fsd 2637", type:"Bike", name:"Sohail maqsood"},
     
    //     {_id:1, number:"Fsd 7678", type:"Bike",name:"ali Haider"}
    // ]
    const renderList = ((item,ind)=>{
        return(
  
            <Card style={styles.mycard} key={ind} 
                onPress={()=>navigation.navigate("Profile",{item})}
            >
            <View style={styles.cardview}>
            <Image
            style={{width:60,height:50,borderRadius:30}}
            source={require('./a.jpg')}
            />
            <View style={{marginLeft:10}}>
        <Text style={styles.text}>{item.number}</Text>
        <Text style={styles.text}> {item.type}</Text>

            </View>
            </View>
        </Card>

        ) 
    })
    return(
        

        <View style={{flex:1}}>

{/*             
            <View style={styles.center}>
            { loading?
             <ActivityIndicator size="large" color="#006aff"/>
             :
             <FlatList
             data={data}
             renderItem = {({item})=>{
                 return renderList(item)
             }}
             keyExtractor={item=>item._id}
             
              />
           
          }
           </View> */}


            <FlatList
             data={data}
             renderItem = {({item})=>{
                 return renderList(item)
             }}
             keyExtractor={item=>item._id}
             onRefresh={()=>fetchData()} 
             refreshing={loading}
             
              />    

      
            

                <FAB  onPress={()=> navigation.navigate('Create')}
                    style={styles.fab}
                    
                    small={false}
                    theme=
                        {{colors:{accent:"#006aff"}}}
                    
                    icon="plus"
                    
                />


            
        </View>
       

    )
}

export default Home;

const styles =StyleSheet.create({
    mycard:{
        margin:5,
        padding:5
    },
    cardview:{
        flexDirection:"row"
    },
    text:{
        fontSize:20,
        marginLeft:10
    },
    fab: {
        position: 'absolute',
        margin: 16,
        right: 0,
        bottom: 0,
        
      },

    center:{
        flex: 1,
        justifyContent: "center"
    }
  })
  