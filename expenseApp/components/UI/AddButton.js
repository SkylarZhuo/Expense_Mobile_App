import { View, Text, Pressable,StyleSheet } from 'react-native'
import React from 'react'
import {Ionicons} from "@expo/vector-icons"

export default function AddButton({ onPress,icon,size, color}) {
  return (
<Pressable onPress={onPress} style={({pressed})=>pressed && styles.buttonPressed}>
    <View style={styles.container}>
        <Ionicons name={icon} color={color} size={size}/>
    </View>
</Pressable>
  )
}


const styles = StyleSheet.create({
    container:{
        borderRadius: 24,
        padding: 6,
        marginHorizontal: 8,
        marginVertical: 2,
        fontWeight: 'bold',
    },
    buttonPressed:{
        opacity: 0.75
    }
})