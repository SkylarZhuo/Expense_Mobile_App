import { View, Text,StyleSheet } from 'react-native';
import React from 'react';
import { GlobalStyles } from "../../constants/color"

export default function ExpensesSummary({expenses,periodName}) {
    const expensesSum = expenses.reduce((sum,expense)=>{
        return sum + expense.amount;
    }, 0);

  return (
    <View style={styles.container}>
    <View><Text>{periodName}</Text></View>
    <View><Text>${expensesSum.toFixed(2)}</Text></View>
    
  </View>
  )
}


const styles = StyleSheet.create({
    container:{
        margin: 12,
        padding: 8,
        backgroundColor: GlobalStyles.colors.LightColor50,
        borderRadius: 6,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    period:{
        fontSize: 12,
        color:GlobalStyles.colors.LightColor80,
    },
    sum:{
        fontSize: 16,
        fontWeight:'bold',
        color: 'white'
    }
    
})