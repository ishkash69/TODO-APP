import { StyleSheet } from "react-native";
import { height, moderateScale, moderateScaleVertical, textScale } from '../../styles/resposnsiveSize';

export default styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'black',
        paddingHorizontal:moderateScale(24)
       
    },
    textStyle: {
        fontSize: textScale(20),
        fontWeight: 'bold',
        color:"#00FFFF",
        
    },
    imageStyle:{
        height:moderateScale(18),
        width:moderateScale(18),   
        tintColor:"#00FFFF"
    },
    underline:{
        height:1,
        backgroundColor:"#00FFFF",
        marginTop:moderateScale(10),
        
    },
    inputStyle:{
        marginTop:20,
        marginBottom:24,

    }
});