import {CommonActions} from '@react-navigation/routers';
import {DrawerItem} from '@react-navigation/drawer';
import React from 'react';
import {View} from 'react-native';
import {Avatar, Caption, Drawer, Title} from 'react-native-paper';
import Routes from '../../../routes/routes';
import styles from './style';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import Icons from 'react-native-vector-icons/MaterialIcons';
import {Color} from '../../../utils/Color';
import AsyncStorage from '@react-native-async-storage/async-storage';


export function DrawerContent(props) {


  resetStack = CommonActions.reset({
    index: 0,
    routes: [{name: Routes.SplashScreen}],
  });
  removeAuthentication = async () => {
    try {
      console.log('logout');
      await AsyncStorage.clear();
      this.props.navigation.dispatch(this.resetStack);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <View style={{flex: 1, backgroundColor: Color.PRIMARY}}>
      <View
        style={{flex: 1, flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
        <Avatar.Image
          source={require('../../../assets/Img/profile_logo.png')}
          size={80}
          style={{marginTop:75}}
        />
        {/* <View style={{marginLeft: 10}}> */}
          <Title style={{fontSize: 20, color: Color.WHITE}}>JOHN DOE</Title>
          <Caption style={{fontSize: 16, color: Color.WHITE}}>
            driverone@gmail.com
          </Caption>
        {/* </View> */}
      </View>

      <View
        style={{
          flex: 5,
          backgroundColor: Color.WHITE,
          padding: 15,
          borderTopStartRadius: 20,
          borderTopEndRadius: 12,
          marginTop:70
        }}>
        <Drawer.Section style={styles.drawerSection}>
          <DrawerItem
            icon={() => (
              <Icon name="home-outline" color={Color.PRIMARY_DARK} size={30} />
            )}
            label="Home"
            labelStyle={{fontSize: 20, color: Color.PRIMARY_DARK}}
          />
          <DrawerItem
            icon={() => (
              <Icon name="face-profile" color={Color.PRIMARY_DARK} size={30} />
            )}
            label="My Profile"
            labelStyle={{fontSize: 20, color: Color.PRIMARY_DARK}}
            onPress={() => props.navigation.navigate(Routes.Profile)}
          />
          <DrawerItem 
           icon = {()=>(
             <Icon name="file-document-edit-outline" color={Color.PRIMARY_DARK} size={30}/>
           )} 
           label="OrderDetails"
           labelStyle = {{fontSize:20,color:Color.PRIMARY_DARK}}
           onPress={()=>props.navigation.navigate(Routes.OderDetails)}/>
          
          <DrawerItem
            icon={() => (
              <Icon
                name="file-document-edit-outline"
                color={Color.PRIMARY_DARK}
                size={30}
              />
            )}
            label="Documents"
            labelStyle={{fontSize: 20, color: Color.PRIMARY_DARK}}
            onPress={()=>props.navigation.navigate(Routes.DocumentScreen)}
          />
          <DrawerItem
            icon={() => (
              <Icons name="attach-money" color={Color.PRIMARY_DARK} size={30} />
            )}
            label="Earning"
            labelStyle={{fontSize: 20, color: Color.PRIMARY_DARK}}
            onPress={()=>props.navigation.navigate(Routes.EarningScreen)}
          />
          <DrawerItem
            icon={() => (
              <Icons name="notifications" color={Color.PRIMARY_DARK} size={30} />
            )}
            label="Notifications"
            labelStyle={{fontSize: 20, color: Color.PRIMARY_DARK}}
            onPress={()=>props.navigation.navigate(Routes.Notifications)}
          />
          <DrawerItem
            icon={() => (
              <Icon name="logout" color={Color.PRIMARY_DARK} size={30} />
            )}
            label="Log-Out"
            labelStyle={{fontSize: 20, color: Color.PRIMARY_DARK}}
            onPress={()=>{() =>this.removeAuthentication()}}
          />
        </Drawer.Section>
      </View>
    </View>
  );
}

export default DrawerContent;
