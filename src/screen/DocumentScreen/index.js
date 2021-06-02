import React, { Component } from 'react'
import { SafeAreaView } from 'react-native'
import { Text, View ,Image} from 'react-native'
import { Card, Header, Label } from '../../component'
import Routes from '../../routes/routes'
import { Color, CommonStyle, ThemeUtils } from '../../utils'
import Icon1 from 'react-native-vector-icons/Ionicons';


export class DocumentScreen extends Component {
    render() {
        return (
            <SafeAreaView>
             {/* import Icon1 from 'react-native-vector-icons/Ionicons'; */}
             {/* <View style={{justifyContent:'center',alignItems:'center'}}>
                 <Label mt={20} xxlarge color={Color.PRIMARY_DARK}>Document Verificaion</Label>
              
             </View> */}
           
             <Label ms={55} mt={50} xlarge  color={Color.PRIMARY_DARK}>Driving Licence </Label> 
            
            <View style={{alignSelf:'center',flexDirection:'row',
                    marginHorizontal: 20,
                    padding: 20,
                    justifyContent: 'space-between',
                    marginTop: 20,
                    borderWidth:2,
                  
                    borderRadius:8,
                    borderColor:Color.PRIMARY_DARK,
                    backgroundColor:Color.WHITE,
                    alignItems:'center',
                    borderStyle:'dashed'}}>
            <Image source={require('../../assets/Img/Lincence_logo.jpeg')}/>
                    <View style={{
                        marginTop: 4,
            width: 40,
            height: 40,
            backgroundColor: Color.PRIMARY,
            borderRadius: 20,
            justifyContent: 'center',
            alignItems: 'center',bottom:25,right:25
                    }}>
                    <Icon1 name="checkmark-done" color={Color.WHITE} size={25}/>
                </View>
         </View>

         <Label ms={55} mt={20}  xlarge  color={Color.PRIMARY_DARK}>National ID </Label> 
            
            <View style={{alignSelf:'center',flexDirection:'row',
                    marginHorizontal: 20,
                    padding: 20,
                    justifyContent: 'space-between',
                    marginTop: 20,
                    borderWidth:2,
                  
                    borderRadius:8,
                    borderColor:Color.PRIMARY_DARK,
                    backgroundColor:Color.WHITE,
                    alignItems:'center',
                    borderStyle:'dashed'}}>
            <Image source={require('../../assets/Img/id_logo.png')} style={{width:ThemeUtils.relativeWidth(58),height:ThemeUtils.relativeHeight(25)}}/>
                    <View style={{
                        marginTop: 4,
            width: 40,
            height: 40,
            backgroundColor: Color.PRIMARY,
            borderRadius: 20,
            justifyContent: 'center',
            alignItems: 'center',bottom:25,right:25
                    }}>
                    <Icon1 name="checkmark-done" color={Color.WHITE} size={25}/>
                </View>
         </View>
               
           
            </SafeAreaView>
           
           
        )
    }
}

export default DocumentScreen
