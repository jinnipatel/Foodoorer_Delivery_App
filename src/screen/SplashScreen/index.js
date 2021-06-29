import React from 'react';
import { View, Image } from 'react-native';
import styles from './style';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Routes from '../../routes/routes';
import { Label, Status } from '../../component';
import { Color } from '../../utils/Color';
import { connect } from 'react-redux';
import { resetNavigation } from '../../utils/commonFunctions';

const mapStateToProps = state => {
  console.log("LOGIN Token ------------", state.login.token)
  return {
    token: state.login.token,
    common: state.common,
  };
};

class SplashScreen extends React.Component {
  componentDidMount() {
    this.checkAuthentication();
  }

  checkAuthentication = async () => {

    let _token = this.props.token
    // let _token = await AsyncStorage.getItem('token');
    if (_token != null && _token != undefined && _token != '') {
      this.goTo(true);
    } else this.goTo(false);
  };

  goTo = value => {
    setTimeout(() => {
      let _props = this.props.navigation;
      if (!value) {
        let { boarding } = this.props.common;
        if (boarding) resetNavigation(_props, Routes.NotAuthenticated);
        else resetNavigation(_props, Routes.boarding);
      } else resetNavigation(_props, Routes.Authenticated);
    }, 2000);
  };

  render() {
    return (
      <View style={styles.container}>
        <Status hidden={true} />
        <Image
          source={require('../../assets/Img/foodoorer.jpg')}
          resizeMode="contain"
          style={styles.logo}
        />
        <View style={styles.footer}>
          <Label small color={Color.DARK_GRAYISH_BLUE} ms={10}>
            By Team
          </Label>
          <Label small color={Color.DARK_GRAYISH_BLUE} mt={10} ms={5}>
            Foodoorer
          </Label>
        </View>
      </View>
    );
  }
}

export default connect(mapStateToProps, '')(SplashScreen);
