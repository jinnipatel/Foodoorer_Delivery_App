import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native';
import { View, Image, Modal } from 'react-native';
import { Button, InputText, Label, Status } from '../../component';
import { Color, ThemeUtils } from '../../utils';
import Styles from './style';
import Icon from 'react-native-vector-icons/FontAwesome';
import { validation } from '../../utils/ValidationUtils';
import Icons from 'react-native-vector-icons/Ionicons';
import Fontisto from 'react-native-vector-icons/Fontisto';




export class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      email: '',
      emailError: '',
      phoneNo: '',
      phoneErrorValidation: '',
    };
  }

  check_validate = () => {
    let emailError, phoneErrorValidation, isValid;
    emailError = validation('email', this.state.email);
    phoneErrorValidation = validation('phoneNo', this.state.phoneNo);
    if (emailError != null || phoneErrorValidation != null) {
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
      this.setState({ show: !this.state.show });
    }
  };
  render() {
    return (
      <SafeAreaView>
        <Status hidden={true} />
        <View style={Styles.MainConatiner}>
          <Modal
            visible={this.state.show}
            transparent={true}
            animationType="slide">
            <View
              style={{
                alignSelf: 'center',
                position: 'absolute',
                bottom: 0,
                width: '100%',
                paddingHorizontal: 20,
                paddingVertical: 20,
                backgroundColor: Color.BOX_BG,
                borderTopStartRadius: 20,
                borderTopEndRadius: 20,
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <Label Color={Color.PRIMARY_DARK} ms={25} mb={12} large>
                  EDIT ACCOUNT
                </Label>
                <TouchableOpacity
                  onPress={() => {
                    this.setState({ show: false });
                  }}>
                  <Icon
                    name="close"
                    size={25}
                    style={{ alignSelf: 'center', marginEnd: 25 }}
                    color={Color.PRIMARY_DARK}
                  />
                </TouchableOpacity>
              </View>
              <Label color={Color.PRIMARY_DARK} ms={25} mb={5} small>
                Mobile Number
              </Label>
              <InputText
                name="email"
                placeholder="Enter Email"
                onChangeText={text => this.setState({ email: text })}
                value={this.state.email}
                error={this.state.emailError}
                keyboardType="email-address"
              />
              <Label small ms={25} color={Color.ERROR}>
                {this.state.emailError}
              </Label>
              <Label color={Color.PRIMARY_DARK} ms={25} small mb={5}>
                Email
              </Label>
              <InputText
                name="phone-iphone"
                placeholder="Enter Number"
                onChangeText={text => this.setState({ phoneNo: text })}
                value={this.state.phoneNo}
                error={this.state.phoneErrorValidation}
                keyboardType="phone-pad"
              />
              <Label small ms={25} color={Color.ERROR}>
                {this.state.phoneErrorValidation}
              </Label>
              <Button name="SAVE" onPress={() => this.check_validate()} />
            </View>
          </Modal>
          <View
            style={{
              justifyContent: 'center',
              alignSelf: 'center',
              width: ThemeUtils.relativeWidth(100),
            }}>
            <Image
              source={require('../../assets/Img/profile_logo.png')}
              resizeMode="contain"
              style={{ width: ThemeUtils.relativeWidth(30), height: ThemeUtils.relativeHeight(16), alignSelf: 'center', marginTop: 10 }}
            />
            <View
              style={Styles.labelText}>
              <Icons
                name="person-outline"
                size={25}
                color={Color.PRIMARY_DARK}
              />
              <Label ms={20} small color={Color.BLACK}>
                JOHN DON
              </Label>
            </View>
            <View
              style={Styles.sectionline}
            />
            <View
              style={Styles.labelText}>
              <Fontisto name="email" size={20} color={Color.PRIMARY_DARK} />
              <Label ms={20} small color={Color.BLACK}>
                XYZ@gmail.com
              </Label>
            </View>

            <View
              style={Styles.sectionline}
            />
            <View
              style={Styles.labelText}>
              <Icons
                name="md-phone-portrait-outline"
                size={18}
                color={Color.PRIMARY_DARK}
              />
              <Label ms={20} small color={Color.BLACK}>
                {' '}
                +91 98765 43219
              </Label>
            </View>
            <View
              style={Styles.sectionline}
            />
            <View
              style={Styles.labelText}>
              <Icons
                name="md-card-outline"
                size={18}
                color={Color.PRIMARY_DARK}
              />
              <Label ms={20} small color={Color.BLACK}>
                12456-12563-8936
              </Label>
            </View>
            <View
              style={Styles.sectionline}
            />
            <View
              style={Styles.labelText}>
              <Icons
                name="md-card-outline"
                size={18}
                color={Color.PRIMARY_DARK}
              />
              <Label ms={20} small color={Color.BLACK}>
                GJ21AF5869
              </Label>
            </View>
            <View
              style={Styles.sectionline}
            />
          </View>
          <View style={{ marginTop: 20 }}>
            <Button
              name="Edit"
              onPress={() => {
                this.setState({ show: true });
              }}
            />
          </View>
        </View>
      </SafeAreaView>

    );
  }
}

export default Profile;
