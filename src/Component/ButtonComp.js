//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { moderateScale } from '../styles/resposnsiveSize';

// create a component
const ButtonComp = ({
    title = '',
    buttonStyle,
    textStyle,
    onPress = () => { }
}) => {
    return (

        <TouchableOpacity
            style={{ ...styles.container, ...buttonStyle }}
            onPress={onPress}
        >
            <Text style={{...styles.title, ...textStyle }}>{title}</Text>
        </TouchableOpacity>



    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 49,
        borderRadius: 10,
        width: "100%",
        backgroundColor: "#00FFFF",
        marginTop:moderateScale(30)
    },
    title: {
        fontSize: 25,
        color: '#ffff',
        fontWeight:'bold'
    
    }
});

//make this component available to the app
export default ButtonComp;
