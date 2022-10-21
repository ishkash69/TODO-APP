
import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import ButtonComp from '../../Component/ButtonComp';
import HeaderComp from '../../Component/HeaderComp';
import TextInputComp from '../../Component/TextInputComp';
import images from '../../constants/images';
import NavigationString from '../../constants/NavigationString';
import { moderateScale } from '../../styles/resposnsiveSize';
import styles from './AddEvent.styles';

const AddEvent = ({navigation, route}) => {
    let prevData = route.params.data
    console.log(prevData,"routs")

    const[todo, setToDo]=useState([{
        title: '',
        desc: ''
}])

    const onSave=()=>{
        let currentData = [{title:todo.title,desc:todo.desc}]
        let mergedData = [...currentData,...prevData]
        if(todo.title==''&& todo.desc==""){
            alert('please enter full details')
            return
        }
        if(todo.title==""){
            alert('enter your title')
            return
        }if(todo.desc==''){
            alert('enter description')
            return
        }
        else{
            navigation.navigate(NavigationString.HOME,mergedData)
        }
        
        

    }
    return (
        <View style={styles.container}>
            <HeaderComp text='ADD TODO'
                textStyle={styles.textStyle}
                icon={images.icBack}
                imageStyle={styles.imageStyle} />
                <View style={{flex:0.6,marginTop:moderateScale(50)}}>
                <Text
                style={[styles.textStyle,
                {
                   
                    fontSize: 25
                }
                ]}>Add Your ToDo</Text>
            <View style={styles.underline}/>

            <TextInputComp
            placeholder={'Enter Title'}
            placholderTextColor={"#00FFFF"}
            onChangeText={(title)=>{
            setToDo({...todo,title:title})
            console.log(title,">>>>>>>title")
            }}
            />
            <TextInputComp
            multiline={true}
            placeholder={'Description'}
            placholderTextColor={"#00FFFF"}
            inputStyle={styles.inputStyle}
            onChangeText={(desc)=>{
                setToDo({...todo,desc:desc})
                console.log(desc,">>>>>>>desc")
                }}
            />
            <View style={styles.underline}/>
            <ButtonComp
            title='SAVE'
            onPress={onSave}
            />
            </View>
          

        </View>
    );
};





export default AddEvent;
