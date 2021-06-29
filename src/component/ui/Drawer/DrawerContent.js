import { CommonActions } from '@react-navigation/routers';
import { DrawerItem } from '@react-navigation/drawer';
import React from 'react';
import { View, Image } from 'react-native';
import { Avatar, Caption, Drawer, Title } from 'react-native-paper';
import Routes from '../../../routes/routes';
import styles from './style';
import Feather from 'react-native-vector-icons/Feather';
import Icons from 'react-native-vector-icons/FontAwesome5';
import User from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/Ionicons';
import { Color } from '../../../utils/Color';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { logOutAction } from '../../../redux/reducers/common/action';
import { resetNavigation } from '../../../utils/commonFunctions';

export function DrawerContent(props) {
  // const resetStack = CommonActions.reset({
  //   index: 0,
  //   routes: [{ name: Routes.SplashScreen }],
  // });
  // const removeAuthentication = async () => {
  //   try {
  //     console.log('logout');
  //     // await AsyncStorage.removeItem('token');
  //     this.props.logOutAction();
  //     props.navigation.dispatch(resetStack);
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };

  logOut = () => {
    props.logOutAction()
    // resetNavigation(props.navigation, Routes.NotAuthenticated);
    resetNavigation(props.navigation, Routes.NotAuthenticated)
  }


  return (
    <View style={{ flex: 1, backgroundColor: Color.PRIMARY }}>
      <View
        style={{
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Avatar.Image
          source={require('../../../assets/Img/profile_logo.png')}
          resizeMode="contain"
          size={80}
          style={{ marginTop: 75 }}
          backgroundColor={Color.WHITE_SMOKE}
        />

        <Title style={{ fontSize: 20, color: Color.WHITE }}>
          {props.profile.name}
        </Title>
        <Caption style={{ fontSize: 16, color: Color.WHITE }}>
          {props.profile.email}
        </Caption>
      </View>
      <View
        style={{
          flex: 5,
          backgroundColor: Color.WHITE,
          padding: 15,
          borderTopStartRadius: 20,
          borderTopEndRadius: 12,
          marginTop: 70,
        }}>
        <Drawer.Section style={styles.drawerSection}>
          <DrawerItem
            icon={() => (
              <Icon name="home-outline" color={Color.PRIMARY_DARK} size={25} />
            )}
            label="Home"
            labelStyle={{ fontSize: 20, color: Color.PRIMARY_DARK }}
          />
          <DrawerItem
            icon={() => (
              <User name="user-o" color={Color.PRIMARY_DARK} size={25} />
            )}
            label="My Profile"
            labelStyle={{ fontSize: 20, color: Color.PRIMARY_DARK }}
            onPress={() => props.navigation.navigate(Routes.Profile)}
          />
          <DrawerItem
            icon={() => (
              <Icon
                name="fast-food-outline"
                color={Color.PRIMARY_DARK}
                size={25}
              />
            )}
            label="OrderDetails"
            labelStyle={{ fontSize: 20, color: Color.PRIMARY_DARK }}
            onPress={() => props.navigation.navigate(Routes.OderDetails)}
          />
          <DrawerItem
            icon={() => (
              <Icon
                name="documents-outline"
                size={25}
                color={Color.PRIMARY_DARK}
              />
            )}
            label="Documents"
            labelStyle={{ fontSize: 20, color: Color.PRIMARY_DARK }}
            onPress={() => props.navigation.navigate(Routes.DocumentScreen)}
          />
          <DrawerItem
            icon={() => (
              <Icons name="coins" color={Color.PRIMARY_DARK} size={25} />
            )}
            label="Earning"
            labelStyle={{ fontSize: 20, color: Color.PRIMARY_DARK }}
            onPress={() => props.navigation.navigate(Routes.EarningScreen)}
          />
          <DrawerItem
            icon={() => (
              <Icon
                name="notifications-outline"
                size={25}
                color={Color.PRIMARY_DARK}
              />
            )}
            label="Notifications"
            labelStyle={{ fontSize: 20, color: Color.PRIMARY_DARK }}
            onPress={() => props.navigation.navigate(Routes.MapScreen)}
          />
          <DrawerItem
            icon={() => (
              <Feather name="log-out" color={Color.PRIMARY_DARK} size={25} />
            )}
            label="Log-Out"
            labelStyle={{ fontSize: 20, color: Color.PRIMARY_DARK }}
            onPress={() => logOut()}
          />
        </Drawer.Section>
      </View>
    </View>
  );
}

const mapStateToProps = state => {
  return {

    profile: state.login.user,
    token: state.login.token,
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      logOutAction,
    },
    dispatch,
  );

export default connect(mapStateToProps, mapDispatchToProps)(DrawerContent);
