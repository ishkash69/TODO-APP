//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import images from '../constants/images';

// create a component
const HeaderComp = ({
    text,
    textStyle,
    icon,
    imageStyle
}) => {
    return (
        <View style={{ ...styles.container }}>
            <Image source={icon} style={imageStyle} />
            <Text style={{ ...textStyle }} >{text}</Text>
            <Text>  </Text>

        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {

        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: 'center',
    },
});

//make this component available to the app
export default HeaderComp;
