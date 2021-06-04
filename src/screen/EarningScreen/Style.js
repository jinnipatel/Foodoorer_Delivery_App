import { StyleSheet } from "react-native";
import { Color } from "../../utils";

const Style = StyleSheet.create({
    
    MainContainer:{
        flexDirection: 'row',
        marginHorizontal: 20,
        padding: 20,
        justifyContent: 'space-between',
        marginTop: 20,
        borderWidth:2,
    
        borderRadius:8,
        borderColor:Color.PRIMARY_DARK,
        backgroundColor:Color.WHITE,
        alignItems:'center',
        borderStyle:'dashed',
    }
})

export default Style