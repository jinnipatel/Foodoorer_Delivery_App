import React, {Component} from 'react';
import { TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native';
import {Text, View, Image,Modal} from 'react-native';
import {Button, Card, Header, InputText, Label} from '../../component';
import Routes from '../../routes/routes';
import {Color, CommonStyle, ThemeUtils} from '../../utils';
import Styles from './style';
import Icon from 'react-native-vector-icons/FontAwesome'
import {validation} from '../../utils/ValidationUtils';
import color from 'color';
import LinearGradient from 'react-native-linear-gradient';
import Icons from 'react-native-vector-icons/Ionicons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Feather from 'react-native-vector-icons/Feather'



export class Profile extends Component {
  constructor(props){
    super(props);
    this.state = {
      show:false,
      email: '',
      emailError: '',
      phoneNo: '',
      phoneErrorValidation: '',
    }
  }
  
  check_validate = () => {
    let 
      emailError,
      phoneErrorValidation,
      isValid;
    
    emailError = validation('email', this.state.email);
    phoneErrorValidation = validation('phoneNo', this.state.phoneNo);
    if (
      
      emailError != null ||
      phoneErrorValidation != null 
      
    ) {
      this.setState({
       
        emailError: emailError,
        phoneErrorValidation: phoneErrorValidation,
       
      });
      isValid = false;
    } else {
      this.setState({
       
        emailError: '',
        phoneErrorValidation: '',
       
      });
      isValid = true;
    }
    if (isValid) {
     this.setState({show:!this.state.show})
    }
  };
  render() {
    return (
      // <SafeAreaView>
      <View style={Styles.MainConatiner}>
        {/* <Header
          name="chevron-back"
          // iconName="notifications"
          Edit="edit"
          Headertext="Profile"
          onClick={()=>this.setState({show:true})}
          onPress={() => this.props.navigation.push(Routes.Home)}
        /> */}
        {/* <Modal/> */}
        {/* <Modal
        animationType="slide"
        transparent={true}
        visible={this.state.modalVisible}
        onRequestClose={()=>{
          this.setState({modelVisible:!this.state.modalVisible})
        }}
        /> */}
        <Modal  
        visible={this.state.show} 
        transparent={true}
        animationType="slide">
          <View style={{
            alignSelf:'center',
            position:'absolute',
            bottom:0,
            width:'100%',
            paddingHorizontal:20,
            paddingVertical:20,
            // backgroundColor:Color.PRIMARY,
            backgroundColor:Color.BOX_BG,
            borderTopStartRadius:20,
            borderTopEndRadius:20
          }}>
          <View style={{
            flexDirection:'row',
            // justifyContent:'space-around'
            justifyContent:'space-between',
            // marginHorizontal:50
          }}>
            <Label Color={Color.PRIMARY_DARK } ms={25} mb={12} large >EDIT ACCOUNT</Label>
            <TouchableOpacity onPress={()=>{this.setState({show:false})}}>
              <Icon 
              name="close"
              size={25}
              style={{alignSelf:'center',marginEnd:25}}
              color={Color.PRIMARY_DARK} />
            </TouchableOpacity> 
            </View>  
            <Label color={Color.PRIMARY_DARK} ms={25}  mb={5} small>
              Mobile Number
            </Label>
            <InputText
                    name="email"
                    placeholder="Enter Email"
                    onChangeText={text => this.setState({email: text})}
                    value={this.state.email}
                    error={this.state.emailError}
                    keyboardType="email-address"
                  />
                  <Label small ms={25} color={Color.ERROR}>
                    {this.state.emailError}
                  </Label>
              <Label color={Color.PRIMARY_DARK} ms={25} small mb={5} >
                Email
              </Label>    
                  <InputText
                    name="phone-iphone"
                    placeholder="Enter Number"
                    onChangeText={text => this.setState({phoneNo: text})}
                    value={this.state.phoneNo}
                    error={this.state.phoneErrorValidation}
                    keyboardType="phone-pad"
                  />
                  <Label small ms={25} color={Color.ERROR}>
                    {this.state.phoneErrorValidation}
                  </Label>
                 
                  <Button name="SAVE" onPress={()=>this.check_validate()}/>
                  
        
          </View>

                   {/* <View style={{backgroundColor:"#000000aa",flex:1}}>
                       <View style={{margin:50,backgroundColor:"#ffffff" ,flex:1 ,borderRadius:10}}>
                           <Text style={{fontSize:20,textAlign:'center',marginTop:10 ,padding:40}}>
                               Model Example
                           </Text>
                           <Button title="HIDDEN MODEL" onPress={()=>{this.setState({show:false})}}/>
                       </View>
                   </View> */}
        </Modal>
        <View style={CommonStyle.container}> 
          <View style={{backgroundColor:Color.LIME_Green,width:"100%",height:ThemeUtils.relativeHeight(25),justifyContent:'center',alignItems:'center',marginTop:30}}>
          <LinearGradient
          colors={[Color.GRADIENT3, Color.GRADIENT4]}
          start={{x: 0, y: 1}}
          end={{x: 1, y: 0}}
          // style={CommonStyles.linerGradient}>
          style={{
            width:'100%',
            height:ThemeUtils.relativeHeight(60),
            // height:'100%',
            opacity:0.95,
            justifyContent:'center',
            alignItems:'center'
          }}>
            <View style={{flexDirection:'row',justifyContent:'space-around',marginTop:10,marginBottom:10}}>
              <TouchableOpacity onPress={()=>{this.props.navigation.push(Routes.Home)}}>
              <Fontisto name="angle-left" size={40}   />
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>{this.setState({show:true})}}>
              <Feather name="edit" size={40}/>
              </TouchableOpacity>

            </View>
          <Image
            source={require('../../assets/Img/profile_logo.png')}
           style={Styles.image}
            
          />
          <Label mt={15} mb={15} color={Color.BLACK}>
            JOHN DOE
          </Label>
          </LinearGradient>
          </View>
         
          <View style={{justifyContent:'center',alignSelf:'center',marginTop:20,width:ThemeUtils.relativeWidth(80),}}>
            <View style={{backgroundColor:Color.BOX_BG,padding:25,borderRadius:20}}>
              <Label color={Color.PRIMARY_DARK} large >Name</Label>
              <View style={{flexDirection:'row',marginTop:10,marginHorizontal:10}}>
              <Icons  name="person-outline" size={20} color={Color.PRIMARY_DARK}  />
              <Label  ms={20} small color={Color.DARK_GRAY} >JOHN DON</Label>
              </View>
              
              <Label mt={20} large color={Color.PRIMARY_DARK}>Email Id</Label>
              <View style={{flexDirection:'row',marginTop:10,marginHorizontal:10}}>
              <Fontisto name="email"  size={20} color={Color.PRIMARY_DARK}/>
              <Label ms={20} small color={Color.DARK_GRAY}>XYZ@gmail.com</Label>
              </View>

              <Label mt={20} large color={Color.PRIMARY_DARK} >Phone Number</Label>
              <View style={{flexDirection:'row',marginTop:10,marginHorizontal:10}}>
              <Icons name="md-phone-portrait-outline" size={18} color={Color.PRIMARY_DARK}/>
              <Label ms={20} small color={Color.DARK_GRAY} > +91 98765 43219</Label>
               </View>

              <Label mt={20} large color={Color.PRIMARY_DARK}>Identify Card Number</Label>
              <View style={{flexDirection:'row',marginTop:10,marginHorizontal:10}}>
              <Icons name="md-card-outline" size={18} color={Color.PRIMARY_DARK}/>
              
              <Label ms={20} small color={Color.DARK_GRAY}>12456-12563-8936</Label>
              </View>

              <Label mt={20} large color={Color.PRIMARY_DARK}>Vehicle Number</Label>
              <View  style={{flexDirection:'row',marginTop:10,marginHorizontal:10}}>
              
              <Label ms={20} small color={Color.DARK_GRAY}>GJ21AF5869</Label>
              </View>
            </View>
              
          </View>
          
       
    
          
        </View>
        </View> 
      // {/* // </View> */}
      // </SafeAreaView>
    );
  }
}

export default Profile;
