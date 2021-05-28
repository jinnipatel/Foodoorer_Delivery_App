import React, {Component} from 'react';
import {View, KeyboardAvoidingView, Keyboard} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Button, ImageComp, InputText, Label, Status} from '../../component';
import Routes from '../../routes/routes';
import {Color} from '../../utils/Color';
import {PasswordValidate, validation} from '../../utils/ValidationUtils';
import styles from './style';
import CommonStyles from '../../utils/CommonStyles';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

export class ResetPassword extends Component {
  constructor() {
    super();
    this.state = {
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

  check_Validation = () => {
    let passwordError, confirmpasswordError, isValid;

    passwordError = validation('password', this.state.password);
    confirmpasswordError = PasswordValidate(
      this.state.password,
      this.state.confirmPassword,
    );

    if (passwordError != null || confirmpasswordError != null) {
      console.log('error');
      this.setState({
        passwordError: passwordError,
        confirmpasswordError: confirmpasswordError,
      });
      isValid = false;
    } else {
      console.log('done');
      this.setState({
        passwordError: '',
        confirmpasswordError: '',
      });
      isValid = true;
    }
    if (isValid) {
      this.props.navigation.navigate(Routes.Login);
    }
  };

  IconToggle = () => {
    this.state.isSecurePassword
      ? this.setState({isSecurePassword: false, toggleIcon: 'eye'})
      : this.setState({isSecurePassword: true, toggleIcon: 'eye-closed'});
  };

  conformToggle = () => {
    this.state.isConformPassword
      ? this.setState({isConformPassword: false, toggleIcon1: 'eye'})
      : this.setState({isConformPassword: true, toggleIcon1: 'eye-closed'});
  };

  render() {
    return (
      <View style={CommonStyles.conatiner}>
        <LinearGradient
          colors={[Color.GRADIENT3, Color.GRADIENT4]}
          start={{x: 0, y: 1}}
          end={{x: 1, y: 0}}
          style={CommonStyles.linerGradient}>
          <KeyboardAwareScrollView
            style={{flex: 1}}
            resetScrollToCoords={{x: 0, y: 0}}
            scrollEnabled={true}
            enableResetScrollToCoords={false}
            keyboardVerticalOffset={0}
            enableOnAndroid={true}
            keyboardShouldPersistTaps="always">
            <Status hidden={true} />
            <View style={{marginBottom: 20,marginTop:150}}>
              <ImageComp />
            </View>
            <View style={CommonStyles.content_container}>
              <Label
                xlarge
                bolder
                align="center"
                mb={10}
                mt={10}
                color={Color.PRIMARY_DARK}>
                Reset Password
              </Label>
              <Label small lighter ms={25} mb={10} color={Color.DARK_GRAY}>
                Set the new password for your account so you can login and
                access all feature.
              </Label>
              <InputText
                name="lock"
                placeholder="Enter Password"
                secureTextEntry={this.state.isSecurePassword}
                onChangeText={text => {
                  this.setState({password: text});
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
                  this.setState({confirmPassword: text});
                }}
                closeColor={Color.PRIMARY_DARK}
                IconName={this.state.toggleIcon1}
                onToggle={() => this.conformToggle()}
              />

              <Label small color={Color.ERROR} ms={30}>
                {this.state.confirmpasswordError}
              </Label>

              <View style={styles.bottomButton}>
                <Button name="Reset Password" onPress={this.check_Validation} />
              </View>
            </View>
          </KeyboardAwareScrollView>
        </LinearGradient>
      </View>
    );
  }
}

export default ResetPassword;
