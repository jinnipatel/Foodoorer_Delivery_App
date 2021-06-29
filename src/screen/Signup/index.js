import React, { Component } from 'react';
import { View, SafeAreaView } from 'react-native';
import { ImageComp, InputText, Label, Status } from '../../component/index';
import { Button } from '../../component/index';
import * as Animatable from 'react-native-animatable';
import Routes from '../../routes/routes';
import { validation } from '../../utils/ValidationUtils';
import { Color } from '../../utils/Color';
import LinearGradient from 'react-native-linear-gradient';
import { TouchableOpacity } from 'react-native-gesture-handler';
import CommonStyles from '../../utils/CommonStyles';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { registerUserAction } from '../../redux/reducers/Signup/action';

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      firstnamerror: '',
      email: '',
      emailError: '',
      phoneNo: '',
      phoneErrorValidation: '',
      password: '',
      passwordError: '',
      confirmPassword: '',
      ConfirmPasswordError: '',
      toggleIcon1: 'eye-closed',
      toggleIcon: 'eye-closed',
      isSecurePassword: true,
      isConformPassword: true,
    };
  }

  SignUpUserRequest = async () => {
    this.setState({ visibility: true }, () => {
      let user = {
        name: this.state.name,
        email: this.state.email,
        contact_no: this.state.phoneNo,
        password: this.state.password,
        password_confirmation: this.state.confirmPassword,
      };
      debugger;
      this.props.registerUserAction(user, this.props);
    });
  };
  check_validate = () => {
    let firstnamerror,
      emailError,
      phoneErrorValidation,
      passwordError,
      confirmpasswordError,
      isValid;
    firstnamerror = validation('name', this.state.name);
    emailError = validation('email', this.state.email);
    phoneErrorValidation = validation('phoneNo', this.state.phoneNo);
    passwordError = validation('password', this.state.password);
    // confirmpasswordError = PasswordValidate(this.state.password, this.state.confirmPassword);
    if (
      firstnamerror != null ||
      emailError != null ||
      phoneErrorValidation != null ||
      passwordError != null ||
      confirmpasswordError != null
    ) {
      this.setState({
        firstnamerror: firstnamerror,
        emailError: emailError,
        phoneErrorValidation: phoneErrorValidation,
        passwordError: passwordError,
        confirmpasswordError: confirmpasswordError,
      });
      isValid = false;
    } else {
      this.setState({
        firstnamerror: '',
        emailError: '',
        phoneErrorValidation: '',
        passwordError: '',
        confirmpasswordError: '',
      });
      isValid = true;
    }
    if (isValid) {
      this.SignUpUserRequest();
    }
  };

  IconToggle = () => {
    this.state.isSecurePassword
      ? this.setState({ isSecurePassword: false, toggleIcon: 'eye' })
      : this.setState({ isSecurePassword: true, toggleIcon: 'eye-closed' });
  };

  conformToggle = () => {
    this.state.isConformPassword
      ? this.setState({ isConformPassword: false, toggleIcon1: 'eye' })
      : this.setState({ isConformPassword: true, toggleIcon1: 'eye-closed' });
  };
  render() {
    return (
      <SafeAreaView style={CommonStyles.container}>
        <LinearGradient
          colors={[Color.GRADIENT3, Color.GRADIENT4]}
          start={{ x: 0, y: 1 }}
          end={{ x: 1, y: 0 }}
          style={CommonStyles.linerGradient}>
          <KeyboardAwareScrollView
            style={{ flex: 1 }}
            resetScrollToCoords={{ x: 0, y: 0 }}
            scrollEnabled={true}
            enableResetScrollToCoords={false}
            keyboardVerticalOffset={0}
            showsVerticalScrollIndicator={false}
            enableOnAndroid={true}
            keyboardShouldPersistTaps="always">
            <View>
              <Status hidden={true} />
              <ImageComp />
              <Label xxlarge align="center" mb={10} bolder color={Color.WHITE}>
                Welcome To All
              </Label>

              <Animatable.View
                style={CommonStyles.content_container}
                animation="fadeInUpBig"
                iterationDelay={400}>
                <View style={CommonStyles.login_signup_container}>
                  <TouchableOpacity
                    onPress={() => {
                      this.props.navigation.push(Routes.Login);
                    }}>
                    <Label
                      large
                      align="center"
                      bolder
                      color={Color.INACTIVE_COLOR}>
                      SignIn
                    </Label>
                  </TouchableOpacity>

                  <View style={CommonStyles.bottom_border}>
                    <Label
                      large
                      bolder
                      align="center"
                      color={Color.ACTIVE_COLOR}>
                      SignUp
                    </Label>
                  </View>
                </View>

                <View>
                  <InputText
                    name="person"
                    placeholder="Enter Name"
                    onChangeText={text => this.setState({ name: text })}
                    value={this.state.name}
                  />
                  <Label small ms={25} color={Color.ERROR}>
                    {this.state.firstnamerror}
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

                  <InputText
                    name="lock"
                    placeholder="Enter Password"
                    secureTextEntry={this.state.isSecurePassword}
                    onChangeText={text => {
                      this.setState({ password: text });
                    }}
                    closeColor={Color.PRIMARY_DARK}
                    IconName={this.state.toggleIcon}
                    onToggle={() => this.IconToggle()}
                  />

                  <Label small color={Color.ERROR} ms={30}>
                    {this.state.passwordError}
                  </Label>
                  <InputText
                    placeholder="Re-type Password"
                    secureTextEntry={this.state.isConformPassword}
                    name="lock"
                    onChangeText={text => {
                      this.setState({ confirmPassword: text });
                    }}
                    closeColor={Color.PRIMARY_DARK}
                    IconName={this.state.toggleIcon1}
                    onToggle={() => this.conformToggle()}
                  />

                  <Label small color={Color.ERROR} ms={30}>
                    {this.state.confirmpasswordError}
                  </Label>
                </View>
                <View style={{ marginTop: 10, paddingBottom: 10 }}>
                  <Button name="SignUp" onPress={() => this.check_validate()} />
                </View>
              </Animatable.View>
            </View>
          </KeyboardAwareScrollView>
        </LinearGradient>
      </SafeAreaView>
    );
  }
}
function mapStateToProps(state) {
  return {
    signup: state.signup,
  };
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      registerUserAction,
    },
    dispatch,
  );
export default connect(mapStateToProps, mapDispatchToProps)(Signup);
