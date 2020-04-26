import React , {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faUserCircle, faCamera, faHistory } from '@fortawesome/free-solid-svg-icons'
import { StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function BottomTab({navigation}) {
  const [currentPage, setCurrentPage] = useState('Camera')

  return (
    <View>
    <View style={styles.container}>
        <TouchableOpacity>
        <FontAwesomeIcon style={styles.text} size={40} icon={ faUserCircle } onPress = {()=> navigation.push('Settings')} />
        </TouchableOpacity>
        <TouchableOpacity>
        <FontAwesomeIcon style={styles.text} size={40} icon={ faCamera } onPress = {()=> navigation.push('Camera')}/>
        </TouchableOpacity>
        <TouchableOpacity>
        <FontAwesomeIcon style={styles.text} size={40} icon={ faHistory } onPress = {()=> navigation.push('Transaction')} />
        </TouchableOpacity>
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection:'row',
    backgroundColor: 'hsla(155, 100%, 40%, 1)',
    justifyContent: 'space-between',
    color:'white',
    padding:20
    },
  text:{
    color:'white',
  }
});