import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

const WelcomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style = {styles.AppName}>Green Cycle</Text>
      <Text style = {styles.sloganText}>Your Phone. <Text style ={{color:'hsla(155, 100%, 40%, 1)'}}>Greener.</Text></Text>

      <Image source = {require('../assets/images/flowerpot.png')} style = {styles.image} />

      <TouchableOpacity style ={styles.button} 
        onPress = {()=>navigation.push('Login')}>
        <Text style = {styles.buttonText} >Login</Text>
      </TouchableOpacity>

      <TouchableOpacity style ={styles.button}
        onPress = {()=> navigation.push('Register')}>
        <Text style = {styles.buttonText}>Register</Text>
      </TouchableOpacity>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  AppName : {
    fontSize:40,
    color: 'hsla(155, 100%, 40%, 1)',
    fontWeight: 'bold'
  },
  sloganText: {
    fontSize:20,
    color:'gray'
  },
  image: {
    width:250,
    height:250,
    marginVertical:20
  },
  button: {
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
});

export default WelcomeScreen