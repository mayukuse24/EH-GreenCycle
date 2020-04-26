import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'

const TransactionList = ({color}) =>{
    return (
        <View>
            <View style = {styles.container}>
                <Text style ={styles.transactionDetail}>Transaction ID: <Text style ={{color:'gray'}}>1051849</Text></Text>
                <Text style ={styles.transactionDetail}>Time:<Text style ={{color:'gray'}}> Sun, 26 Apr 2020 20:33:26</Text></Text>
                <View style ={styles.pending2}/>
            </View>
            <View style = {styles.container}>
                <Text style ={styles.transactionDetail}>Transaction ID: <Text style ={{color:'gray'}}>1051849</Text></Text>
                <Text style ={styles.transactionDetail}>Time:<Text style ={{color:'gray'}}> Sat, 25 Apr 2020 12:27:26</Text></Text>
                <View style ={styles.pending}/>
            </View>
            <View style = {styles.container}>
                <Text style ={styles.transactionDetail}>Transaction ID: <Text style ={{color:'gray'}}>1051849</Text></Text>
                <Text style ={styles.transactionDetail}>Time:<Text style ={{color:'gray'}}> Sat, 25 Apr 2020 11:57:26</Text></Text>
                <View style ={styles.pending}/>
            </View>
        </View>
        
       
    )
}
const styles = StyleSheet.create({
   
    container:{
        width:'90%',
        height:55,
        marginBottom:7,
        backgroundColor:'white',
        alignSelf:'center',
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.1,
        shadowRadius: 4.65,

        elevation: 6,
        },
    transactionDetail: {
        fontSize:15,
        marginTop:6,
        marginLeft:7,
    },
    pending:{
        width:'10%',
        height:'100%',
        backgroundColor:'hsla(144, 100%, 47%, 1)',
        position:'absolute',
        alignSelf:'flex-end'
    },
    pending2:{
        width:'10%',
        height:'100%',
        backgroundColor:'hsla(74, 100%, 47%, 1)',
        position:'absolute',
        alignSelf:'flex-end'
    }
})
export default TransactionList