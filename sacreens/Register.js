import React, { useState } from 'react';
import { View, Text, StyleSheet, Modal, Alert } from 'react-native';
import { TextInput, Button } from 'react-native-paper';

import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';


const RegisterVehicle = () => {
    const [Number, SetNumber] = useState("")
    const [Name, SetName] = useState("")
    const [Picture, SetPicture] = useState("")
    const [Desc, SetDesc] = useState("")
    const [modal, SetModal] = useState(false)

    const pickFromGallery= async ()=>{
       const {granted}= await Permissions.askAsync(Permissions.CAMERA_ROLL)
        if(granted){
            let data2 = await ImagePicker.launchImageLibraryAsync({
                mediaTypes:ImagePicker.MediaTypeOptions.Images,
                allowsEditing:true,
                aspect:[1,1],
                quality:0.5
            })
            console.log(data2)
        }else{
            Alert.alert("you need to give up permission to work")
            
        }
    }


    const pickFromCamera= async ()=>{
        const {granted}= await Permissions.askAsync(Permissions.CAMERA)
         if(granted){
             let data1 = await ImagePicker.launchCameraAsync({
                 mediaTypes:ImagePicker.MediaTypeOptions.Images,
                 allowsEditing:true,
                 aspect:[1,1],
                 quality:0.5
             })
             console.log(data1)
         }else{
             Alert.alert("you need to give up permission to work")
             
         }
     }
 
    

    return (
        <View style={styles.root}>
            <TextInput
                label='Vehicle Number'
                style={styles.inputstyle}
                value={Number}
                theme={theme}
                mode="outlined"
                onChangeText={text => SetNumber(text)}
            />

            <TextInput
                label='Name'
                style={styles.inputstyle}
                value={Name}
                theme={theme}
                mode="outlined"
                onChangeText={text => SetName(text)}
            />
            <TextInput
                label='Description'
                style={styles.inputstyle}
                value={Desc}
                theme={theme}
                mode="outlined"
                onChangeText={text => SetDesc(text)}
            />

            <TextInput

                label='Picture'
                style={styles.inputstyle}
                value={Number}
                theme={theme}
                mode="outlined"
                onChangeText={text => SetPicture(text)}
            />

            <Button style={styles.inputstyle} 
            icon="upload" 
            mode="contained" 
            theme={theme}
            onPress={() => SetModal(true)}>
                Upload image
            </Button>
            <Button style={styles.inputstyle} 
            icon="content-save" 
            mode="contained" 
            theme={theme}
            onPress={() => console.log("pressed")}>
                save
            </Button>
            <Modal
                animationType="slide"
                transparent={false}
                visible={modal}
                onRequestClose={() => {
                    SetModal(false)
                }}
            >

                <View style={styles.modelview}>
                    <View style={styles.modelbuttonview}> 
                    <Button
                     icon="camera" 
                     mode="contained" 
                     theme={theme}
                     onPress={() => pickFromCamera()}>
                        camera
            </Button>
            <Button 
            icon="image-area" 
            mode="contained"
            theme={theme}
            onPress={() => pickFromGallery()}
            >
                Gallery
            </Button>


            </View>
                    <Button
                    
                    mode="contained"
                    theme={theme}   
                    onPress={() => SetModal(false)}>
                        Cancell
                   </Button>
                   

 </View>

            </Modal>
        </View>

    )

}
const theme = {
    colors: {
        primary: 'green'
    }
}

export default RegisterVehicle;

const styles = StyleSheet.create({
    root: {
        flex: 1,
    },
    inputstyle: {
        margin: 5
    },
    modelbuttonview:{
      flexDirection:"row",
      justifyContent:"space-around",
      padding:10
    },
    modelview:{
        position:"absolute",
        bottom:2,
        width:"100%",
        backgroundColor:"white"
    }
})