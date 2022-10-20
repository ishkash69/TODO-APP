
import React, { Component, useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native';
import HeaderComp from '../../Component/HeaderComp';
import images from '../../constants/images';
import styles from './Home.style';
import NavigationString from '../../constants/NavigationString';



const Home = ({
    route, navigation
}) => {

    const [data,setData]=useState([])
    const fetchData = ()=>{
        const paramData = route?.params
        setData(paramData)
    console.log(paramData,"pramdataa>>>>>")

    }

 
    useEffect(()=>{
        fetchData();
    },[route?.params])


    const renderItem=({item,index})=>{
        console.log('items',item)
        return(
            
<View style={{height:80,marginTop:14,borderRadius:10,borderColor:"#00FFFF",borderWidth:1,padding:8}}>
                <Text style={{color:"#00FFFF",marginTop:4}}>
                    Title:{item?.title}
                </Text>
                <Text style={{color:"#00FFFF",marginTop:22}}>
                    Description:{item?.desc}
                </Text>
            </View>  
            
          

        )
    }
    const emptyList=()=>{
        return(
            <View style={{flex:1,marginTop:80}}>
                <Text style={{fontSize:18,textAlign:'center',color:"#00FFFF"}}>no! data here</Text>
            </View>
        )
    }
    


    const onFabClick = () => {
        navigation.navigate(NavigationString.AddEvent ,{data:data})
    }
    return (
        <View style={styles.container}>
            <HeaderComp text='HOME'
                textStyle={styles.textStyle}
            />
            <FlatList
            data={data}
            renderItem={renderItem}
            ListEmptyComponent={emptyList}
            

            />



            <View style={styles.fabContainer}>
                <TouchableOpacity style={styles.fab}
                onPress={onFabClick}
                >

                    <Image
                        style={styles.fabImage}
                        source={images.icFab} />

                </TouchableOpacity>
            </View>

        </View>
    );
};

export default Home;
