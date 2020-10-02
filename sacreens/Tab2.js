import * as React from 'react';
import {ImageBackground, View, Text ,StyleSheet,TouchableOpacity} from 'react-native';

const Tab2 = ()=>{
    return(
            <ImageBackground source={require('./i.webp')} style={styles.image}>
        <View style={{flex:1,alignItems:"center", justifyContent:"center",}}>

            <Text>
                Tabs 2
            </Text>

            <Text>
                Eat 33
            </Text>
            <Text>
                delete
            </Text>
  
        </View>
            </ImageBackground>
    )
}

const styles = StyleSheet.create({
    image: {
      flex: 1,
      resizeMode: "cover",
      justifyContent: "center"
    },
  })
export default Tab2;