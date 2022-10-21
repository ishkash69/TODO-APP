import { StyleSheet } from 'react-native'
import { moderateScale, moderateScaleVertical, textScale } from '../../styles/resposnsiveSize';
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal:moderateScale(15),
        backgroundColor:"black"
        

    },
    textStyle: {
        fontSize: textScale(20),
        fontWeight: 'bold',
        color:"#00FFFF",marginBottom:20
    },
    fabContainer:{
        position:'absolute',
        bottom: moderateScaleVertical(20),
        right: moderateScale(0), 
      
    },
    fab: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: moderateScale(24),
        backgroundColor: "#00FFFF",
        height: moderateScale(48),
        width: moderateScale(48),    

    },
    fabImage: {
        height: moderateScale(30),
        width: moderateScale(30),
        tintColor:'black'

    }

});
export default styles