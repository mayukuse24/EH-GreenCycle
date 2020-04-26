import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, KeyboardAvoidingView } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'

const LoginScreen = ({navigation}) =>{
    return (
        <View style ={styles.container}>
            <Text style = {styles.title}>Enter Your Credentials</Text>

            <TextInput 
            label = "Email"
            style = {styles.input}
            placeholder = 'Email'
            autoCorrect = {false}/>

            <TextInput 
            secureTextEntry
            label = "Password"
            style = {styles.input}
            placeholder = 'Password'
            autoCorrect = {false}/>

            <TouchableOpacity style ={styles.button}
                onPress = {()=> navigation.push('Camera')}>
                <Text style = {styles.buttonText}>Login</Text>
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
      }
})

export default LoginScreen