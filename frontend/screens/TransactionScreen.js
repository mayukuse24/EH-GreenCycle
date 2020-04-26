import React from 'react'
import {View, Text, StyleSheet, Image} from 'react-native'
import TransactionList from './TransactionList'
import { FlatList } from 'react-native-gesture-handler'
import bottomTab from './BottomTab'
import BottomTab from './BottomTab'
const TransactionScreen = () =>{
    return (
        <View style = {styles.container}>
            <Text style = {styles.title}>Transaction History</Text>
            <View style = {styles.chartContainer}>
                <Text style = {styles.chartTitle} >Monthly Progress</Text>
                <View style = {{flexDirection:'row', justifyContent:'space-around'}}>
                    <Text style={{color:'gray'}}><Text style = {styles.number}>17 </Text>Items Recycled</Text>
                    <Text style={{color:'gray'}}><Text style = {styles.number}>1 </Text>Items Pending</Text>
                </View> 
                <Image source = {require('../assets/images/graph.png')} style = {styles.image} />
            </View>
            <Text style ={styles.recentText}>Most Recent</Text>
            <TransactionList/>
            <View style ={{marginTop:20}}>
            <BottomTab />
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    recentText: {
        marginTop:10,
        marginLeft:20,
        fontSize:18,
        color: 'hsla(155, 100%, 35%, 1)'
    },
    container :{
        backgroundColor: 'hsla(155, 100%, 48%, 1)',
        height: '32%'
    },
    title: {
        marginTop:30,
        textAlign:'center',
        fontSize:20,
        color:'white'
    },
    chartContainer:{
        width:'90%',
        height:'90%',
        backgroundColor:'white',
        alignSelf:'center',
        borderRadius: 20,
        marginTop: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,

        elevation: 6,
        },
    chartTitle :{
        fontSize:20,
        textAlign:'center',
        margin:5
    },
    number:{
        fontWeight:'bold',
        fontSize:20,
        color:'hsla(155, 100%, 35%, 1)'
    },
    image: {
        width:'90%',
        height:'60%',
        alignSelf:'center'
    }
})
export default TransactionScreen