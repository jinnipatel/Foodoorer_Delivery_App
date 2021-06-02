import React, {Component} from 'react';
import {TouchableOpacity} from 'react-native';
// import { Modal } from 'react-native';
import {Text, View, Modal, Image} from 'react-native';
import MapView from 'react-native-maps';
import {Marker} from 'react-native-maps';
import {Button, Card, Label, SocialButton} from '../../component';
import Routes from '../../routes/routes';
import {Color, ThemeUtils} from '../../utils';
import RadioButtonRN from 'radio-buttons-react-native';
import { SocialIcon } from 'react-native-elements/dist/social/SocialIcon';
import Icon from 'react-native-vector-icons/FontAwesome';


const data = [
{
  label: 'I am New To The Area'
 },
 {
  label: 'Floor Number Is Missing'
 },
 {
     label:'House/Flat Number Is Missing'
 },
 {
     label:'Tower Number Is Missing'
 }
];


export class CustomerMapScreen extends Component {
  constructor() {
    super();
    this.state = {
      show:true,
      modelshow: false,
      doneModelShow:false
    };
  }

  render() {
    return (
      <View
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          alignItems: 'center',
          justifyContent: 'flex-end',
        }}>
        {/* <Image source={require("../../assets/Img/phone_logo.png")}/> */}

        <MapView
          style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0}}
          showsUserLocation={true}
          zoomEnabled={true}
          zoomControlEnabled={true}
          initialRegion={{
            latitude: 28.57966,
            longitude: 77.32111,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}>
          <Marker coordinate={{latitude: 28.57966, longitude: 77.32111}} />
        </MapView>

        {/* <Image source={require("../../assets/Img/phone_logo.png")}/> */}

        <View>
          <Modal visible={this.state.show} transparent={true} animationType="slide">
            <View
              style={{
                alignSelf: 'center',
                position: 'absolute',
                bottom: 0,
                width: '100%',
                paddingHorizontal: 20,
                paddingVertical: 20,
                // backgroundColor:Color.PRIMARY,
                backgroundColor:this.state.modelshow?Color.DARK_GRAY: Color.BOX_BG,
                borderTopStartRadius: 20,
                borderTopEndRadius: 20,
              }}>
              <View
                style={{
                  flexDirection: 'row',
                }}>
                <Image
                  source={require('../../assets/Img/profile_logo.png')}
                  style={{width: 100, height: 100, alignSelf: 'flex-start'}}
                />
                <View style={{marginStart: 20}}>
                  <Label large color={Color.PRIMARY_DARK}>
                    Vishal Mistry
                  </Label>
                  <View style={{flexDirection: 'row'}}>
                    <Label small color={Color.PRIMARY_DARK}>
                      Location:
                    </Label>
                    <Label small color={Color.DARK_GRAY}>
                      11/B,Vesu surat-396450
                    </Label>
                  </View>
                  <View style={{flexDirection: 'row'}}>
                    <TouchableOpacity onPress={()=>this.setState({modelshow:true,show:true})}>
                      <Image
                        source={require('../../assets/Img/call_logo.png')}
                        style={{width: 40, height: 40, margin: 10}}
                      />
                    </TouchableOpacity>

                    {/* <Modal
                    visible={this.state.modelshow}
                    transparent={true}
                  
                    >
                        <View style={{backgroundColor:"#0000000",flex:1}}>
                            <View style={{margin:50,backgroundColor:"#ffffff",flex:1,borderRadius:10}}>


                            </View>

                        </View>

                    </Modal> */}

             
               <Modal  visible={this.state.modelshow} transparent={true}>
                   <View style={{backgroundColor:"#000000aa",flex:1,justifyContent:'center'}}>
                       <View style={{margin:25,padding:25,backgroundColor:"#ffffff" ,borderRadius:10}}>
                          <Label xlarge>Select Reason For Calling</Label>
                           <View style={{marginTop:10}}>
                            <RadioButtonRN
                            data={data}
                            selectedBtn={(e) => console.log(e)} 
                            />
                            </View>
                       <View style={{marginTop:20}}>
                       <Button name="submit" onPress={()=>{this.setState({modelshow:false})}}/>
                       </View>
                             
                       </View>
                   </View>
               </Modal>
           

                    <SocialButton
                      btntext="Finish"
                      onPress={() =>
                        this.setState({doneModelShow:true})
                      }
                      source={require('../../assets/Img/right_logo.png')}
                    />
                  </View>
                </View>
              </View>
            </View>
          </Modal>


               <Modal  visible={this.state.doneModelShow} transparent={true} >
                   <View style={{backgroundColor:"#000000aa",flex:1,justifyContent:'center',alignItems:'center'}}>
                    <View style={{height:ThemeUtils.relativeHeight(50),backgroundColor:Color.BOX_BG,width:ThemeUtils.relativeWidth(90),alignItems:'center',marginHorizontal:30,borderRadius:14,borderRadius:20}}>
                     <Icon name='thumbs-up' size={65} style={{marginTop:40}} color={Color.PRIMARY}/>       
                     <Label mt={10} xlarge color={Color.PRIMARY_DARK}>Order Delivered Sucessfully</Label>
                     <Label mt={20} large>$50</Label>
                     <Label mt={20} large >Earned by you!</Label>
                     <View style={{marginTop:10}}>
                     <SocialButton  btntext="Done" source={require('../../assets/Img/right_logo.png')} onPress={()=>{this.props.navigation.push(Routes.Home)}} />
                     </View>
                     </View>
                   </View>
               </Modal>

        </View>
      </View>
    );
  }
}

export default CustomerMapScreen;
