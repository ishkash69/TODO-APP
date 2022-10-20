//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NavigationString from '../constants/NavigationString';
import * as Screens from '../screens'
const Stack = createNativeStackNavigator();

// create a component
const Routs
    = () => {
        return (
            <NavigationContainer>
                <Stack.Navigator initialRouteName={NavigationString.HOME}
                    screenOptions={{ headerShown: false }}>
                    <Stack.Screen name={NavigationString.HOME} component={Screens.Home} />
                    <Stack.Screen name={NavigationString.AddEvent} component={Screens.AddEvent} />
                </Stack.Navigator>
            </NavigationContainer>
        );
    };

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
});

//make this component available to the app
export default Routs
    ;
