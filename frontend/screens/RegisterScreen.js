import React, {useState} from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import * as Google from 'expo-google-app-auth';
import { TextInput } from 'react-native-gesture-handler'

const RegisterScreen = ({navigation}) =>{

    const [name,setName]= useState("")
    const [photoUrl, setPhotoUrl]= useState("")

    const signIn = async () => {
        try {
          const result = await Google.logInAsync({
            iosClientId: "90183731463-a4emt6gceti1qc085fnvl0p69apstjn6.apps.googleusercontent.com",
            scopes: ["profile", "email"]
          })
      
          if (result.type === "success") {
            setName(result.user.name)
            console.log("name", result.user.name)
            setPhotoUrl(result.user.photoUrl)
            props.successLogin()
            props.getUserInfo(result.user.name,result.user.photoUrl)
          }
          else {
            console.log("cancelled")
          }
        }
         catch (e) {
          console.log("error", e)
        }
      }

    return (
        <View style ={styles.container}>
            <Text style = {styles.title}>Create An Account</Text>

            <TextInput 
            label = "Name"
            style = {styles.input}
            placeholder = 'Name'
            autoCorrect = {false}/>

            <TextInput 
            secureTextEntry
            label = "Password"
            style = {styles.input}
            placeholder = 'Password'
            autoCorrect = {false}/>

            <TextInput 
            label = "Email"
            style = {styles.input}
            placeholder = 'Email'
            autoCorrect = {false}/>

            <TouchableOpacity style ={styles.button}
                onPress = {()=> navigation.push('Camera')}>
                <Text style = {styles.buttonText}>Sign Up</Text>
            </TouchableOpacity>

            <TouchableOpacity style ={styles.googleButton}
                onPress = {()=> navigation.push('Camera')}>
                <Text style = {styles.buttonText} onPress={signIn}>Sign Up With Google</Text>
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        alignItems:'center'
    },
    title: {
        fontSize:25,
        padding:35,
        color: 'hsla(155, 100%, 35%, 1)',

    },
    input: {
        borderBottomColor:'hsla(155, 100%, 40%, 1)',
        borderBottomWidth:1,
        paddingTop:30,
        fontSize:20,
        width: '80%',
        marginTop:10
    },
    button: {
        marginTop:50,
        padding: 12,
        width:250,
        backgroundColor: 'hsla(155, 100%, 48%, 1)',
        margin:5,
        borderRadius:10,
        shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 5,
    
    elevation: 6,
      },
      
      buttonText: {
        fontSize:20,
        color:'white',
        alignSelf:'center',
      },
      googleButton: {
        marginTop:10,
        padding: 12,
        width:250,
        backgroundColor: 'hsla(206, 100%, 55%, 1)',
        margin:5,
        borderRadius:10,
        shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 5,
    
    elevation: 6,
      },
      buttonText: {
        fontSize:20,
        color:'white',
        alignSelf:'center',
      }
})

export default RegisterScreen