//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { moderateScale } from '../styles/resposnsiveSize';

// create a component
const TextInputComp = ({
    inputStyle,
    placholderTextColor,
    placeholder,
    onChangeText=()=>{},
    value,
    multiline

}) => {
    return (
        <View style={{...styles.container,...inputStyle}}>
            <TextInput
            style={{...styles.input
            }}
            multiline={multiline}
            placeholder={placeholder}
            placeholderTextColor={placholderTextColor}
            value={value}
            onChangeText={onChangeText}
            />
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    input: {
     width:'100%',
      height:54,
      borderColor:"#00FFFF",
      borderWidth:1,
      borderRadius:10,
      color:"#00FFFF",
      fontSize:16,
      paddingLeft:10
    },
    container:{
        marginTop:moderateScale(30)
    }

});

//make this component available to the app
export default TextInputComp;
