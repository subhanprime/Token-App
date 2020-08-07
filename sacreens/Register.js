import React, { useState } from 'react';
import { View, Text, StyleSheet, Modal } from 'react-native';
import { TextInput, Button } from 'react-native-paper';


const RegisterVehicle = () => {
    const [Number, SetNumber] = useState("")
    const [Name, SetName] = useState("")
    const [Picture, SetPicture] = useState("")
    const [Desc, SetDesc] = useState("")
    const [modal, SetModal] = useState(false)

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
                     onPress={() => console.log("pressed")}>
                        camera
            </Button>
            <Button 
            icon="image-area" 
            mode="contained"
            theme={theme}
            onPress={() => console.log("pressed")}>
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