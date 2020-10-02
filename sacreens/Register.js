import React, { useState } from 'react';
import { View, Text, StyleSheet, Modal, Alert, KeyboardAvoidingView, Picker } from 'react-native';
import { TextInput, Button } from 'react-native-paper';

import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';
import { color } from 'react-native-reanimated';


const RegisterVehicle = ({ navigation }) => {
    const [Number, SetNumber] = useState("")
    const [Name, SetName] = useState("")
    const [picture, SetPicture] = useState("")
    const [Desc, SetDesc] = useState("")
    const [modal, SetModal] = useState(false)
    const [selectedValue, setSelectedValue] = useState("bike");


<<<<<<< HEAD
    const submitData = () =>{
        fetch ("http://c57b0842f265.ngrok.io/send",{
=======
    const submitData = () => {
        fetch("http://302a8333e064.ngrok.io/send", {
>>>>>>> team
            method: "post",
            headers: {
                'Content-type': 'application/json'
            },
<<<<<<< HEAD
            body:JSON.stringify({
                name:Name,
                number:Number,
                picture 
                
=======
            body: JSON.stringify({
                name: Name,
                number: Number,
                picture

>>>>>>> team
            })


        }).then(res => res.json())
            .then(data => {
                Alert.alert(`${data.number} is saved succesfully`)
                navigation.navigate("Home")
            })

    }

    const pickFromGallery = async () => {
        const { granted } = await Permissions.askAsync(Permissions.CAMERA_ROLL)
        if (granted) {
            let data = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                allowsEditing: true,
                aspect: [1, 1],
                quality: 0.5
            })
            if (!data.cancelled) {
                let newfile = {
                    uri: data.uri,
                    type: `test/${data.uri.split(".")[1]}`,
                    name: `test.${data.uri.split(".")[1]}`
                }
                handleUpload(newfile)
            }
        } else {
            Alert.alert("you need to give up permission to work")

        }
    }


<<<<<<< HEAD
    const pickFromCamera= async ()=>{
        const {granted}= await Permissions.askAsync(Permissions.CAMERA)
         if(granted){
             let data = await ImagePicker.launchCameraAsync({
                 mediaTypes:ImagePicker.MediaTypeOptions.Images,
                 allowsEditing:true,
                 aspect:[1,1],
                 quality:0.5
             })
             if(!data.cancelled){
                 let newfile = {
                     uri:data.uri,
                     type:`test/${data.uri.split(".")[1]}`,
                     name:`test.${data.uri.split(".")[1]}`
                 }
                 handleUpload(newfile)
             }
         }else{
             Alert.alert("you need to give up permission to work")
             
         }
     }
 
     const handleUpload = (image)=>{

         const data = new FormData()
         data.append('file',image)
         data.append('upload_preset','tokenapp')
         data.append('cloud_name','dfp9rww7e')

         fetch("https://api.cloudinary.com/v1_1/dfp9rww7e/image/upload",{
             method:"post",
             body:data
         }).then(res=>res.json()).
         then(data=>{
             console.log(data)
             SetPicture(data.url)
             SetModal(false)
         })

     }
    
=======
    const pickFromCamera = async () => {
        const { granted } = await Permissions.askAsync(Permissions.CAMERA)
        if (granted) {
            let data = await ImagePicker.launchCameraAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                allowsEditing: true,
                aspect: [1, 1],
                quality: 0.5
            })
            if (!data.cancelled) {
                let newfile = {
                    uri: data.uri,
                    type: `test/${data.uri.split(".")[1]}`,
                    name: `test.${data.uri.split(".")[1]}`
                }
                handleUpload(newfile)
            }
        } else {
            Alert.alert("you need to give up permission to work")

        }
    }

    const handleUpload = (image) => {

        const data = new FormData()
        data.append('file', image)
        data.append('upload_preset', 'tokenapp')
        data.append('cloud_name', 'dfp9rww7e')

        fetch("https://api.cloudinary.com/v1_1/dfp9rww7e/image/upload", {
            method: "post",
            body: data
        }).then(res => res.json()).
            then(data => {
                console.log(data)
                SetPicture(data.url)
                SetModal(false)
            })

    }

>>>>>>> team

    return (

        <View style={styles.root}>
            <KeyboardAvoidingView>
                <TextInput
                    label='Vehicle Number'
                    style={styles.inputstyle}
                    maxLength={7}
                    // pattern={[
                    //     '^[A-Z]{3}[ -]{0,1}[0-9]{1,4}$', // uppercase letter
                    //   ]}
                    value={Number}
                    theme={theme}
                    mode="outlined"
                    onChangeText={text => SetNumber(text)}
                />
                    <TextInput
                        label='Description'
                        style={styles.inputstyle}
                        value={Desc}
                        theme={theme}
                        mode="outlined"
                        onChangeText={text => SetDesc(text)}
                    />
                <Picker
                    
                    selectedValue={Name}
                    style={{ height: 50, width:"100%", color:"red", backgroundColor:"#8EA2A4",marginLeft:10,marginRight:10,borderRadius:5, }}
                    onValueChange={(itemValue, itemIndex) => SetName(itemValue)}
                >
                    <Picker.Item label="select" value="Bike" />
                    <Picker.Item label="Bike" value="Bike" />
                    <Picker.Item label="Car" value="Car" />
                    <Picker.Item label="Bus" value="Bus" />
                </Picker>

                {/* <Picker selectedValue={SetName(value)}>
                <Picker.Item label="Bike" value="Bike"/>
                <Picker.Item label="Car/jeep" value="Car"/>
                <Picker.Item label="Bus" value="Bus"/>
            </Picker> */}

                {/* <TextInput
                    label='Name'
                    style={styles.inputstyle}
                    value={Name}
                    theme={theme}
                    mode="outlined"
                    onChangeText={text => SetName(text)}
                /> */}

                {/* <TextInput

                label='Picture'
                style={styles.inputstyle}
                value={Number}
                theme={theme}
                mode="outlined"
                onChangeText={text => SetPicture(text)}
            /> */}

                <Button style={styles.inputstyle}
                    icon={picture == "" ? "upload" : "check"}
                    mode="contained"
                    theme={theme}
                    onPress={() => SetModal(true)}>
                    Upload image
            </Button>
                <Button style={styles.inputstyle}
                    icon="content-save"
                    mode="contained"
                    theme={theme}
                    onPress={() => submitData()}>
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
            </KeyboardAvoidingView>
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
    modelbuttonview: {
        flexDirection: "row",
        justifyContent: "space-around",
        padding: 10
    },
    modelview: {
        position: "absolute",
        bottom: 2,
        width: "100%",
        backgroundColor: "white"
    }
})