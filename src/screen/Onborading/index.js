import React, { Component } from 'react';
import { View, Image, TouchableOpacity, StatusBar } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import Icon from 'react-native-vector-icons/FontAwesome';
import Routes from '../../routes/routes';
import { Label } from '../../component/index';
import { Color } from '../../utils/Color';
import styles from './style';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { onBoardingDoneAction } from '../../redux/reducers/common/action';
// import { onborading_screen } from '../../redux/reducers/Onborading/action'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { resetNavigation } from '../../utils/commonFunctions';
import { Alert } from 'react-native';




const slides = [
  {
    key: 's1',
    title: 'Find Foods You Want',
    text: 'Discover The Best Foods From Nearest Restaurants.',
    image: require('../../assets/Img/orderfood_logo.png'),
  },
  {
    key: 's2',
    title: 'Live Tracking',
    text: 'Real Time Tracking Of Your Food Order On The App.',
    image: require('../../assets/Img/payment_logo.png'),
  },
  {
    key: 's3',
    title: 'Fast Delivery',
    text: 'Fast Delivery To Your Home,Office and Wherever You Are. ',
    image: require('../../assets/Img/fooddelivery_logo.png'),
  },
];



class Onborading extends Component {

  state = {
    onBoradingDone: false
  }

  onDone = () => {
    this.setState({ onBoradingDone: true });
    this.props.onBoardingDoneAction(true)
    resetNavigation(this.props.navigation, Routes.NotAuthenticated)
  }

  // onDone = () => {
  //   this.props.onDone();
  // };
  // componentDidMount() {
  //   this.check();
  // }

  // state = {
  //   onBoradingDone: false
  // }
  // onDone = () => {
  //   this.setState({ onBoradingDone: true });
  //   AsyncStorage.setItem("bordingStatus", true)
  //   this.props.navigation.navigate(Routes.NotAuthenticated)
  // }

  render() {
    // console.log("setonborading render", this.props.onBoradingDone)


    const RenderNextButton = () => {
      return (
        <View style={styles.buttonCircle}>
          <Icon name="arrow-right" style={{ fontSize: 25, color: Color.WHITE }} />
        </View>
      );
    };

    const RenderDoneButton = () => {
      return (
        // <TouchableOpacity onPress={() => {
        //   this.props.onborading_screen(true);
        //   this.props.navigation.navigate(Routes.Login);
        // }}>
        <TouchableOpacity onPress={this.onDone}>
          {/* <TouchableOpacity onPress={() => Alert("Hello")}> */}

          <View style={styles.buttonCircle}>
            <Icon
              name="thumbs-up"
              style={{ fontSize: 25, fontWeight: 'bold', color: Color.WHITE }}
            />
          </View>
        </TouchableOpacity>
      );
    };
    const RenderItem = ({ item }) => {
      return (
        <View style={styles.container}>
          <Image style={styles.introImageStyle} resizeMode='contain' source={item.image} />
          <Label
            xlarge
            bolder
            color={Color.ONBOARDING_TEXT}
            align="center"
            letterSpacing={1}>
            {item.title}
          </Label>
          <View style={{ marginHorizontal: 20 }}>
            <Label align="center" large color={Color.ONBOARDING_TEXT} mb={10}>
              {item.text}
            </Label>
          </View>
        </View>
      );
    };
    return (
      <AppIntroSlider
        data={slides}
        renderItem={RenderItem}
        // onDone={this.onDone}
        renderDoneButton={RenderDoneButton}
        renderNextButton={RenderNextButton}
        dotStyle={styles.dotStyle}
        activeDotStyle={styles.activeDotStyle}
      />
      // <>
      //   {this.props.OnboardingDone === true ? (
      //     this.props.navigation.navigate(Routes.Signup)
      //   ) : (<View style={{ flex: 1 }}>
      //     <StatusBar hidden={true} />
      //     <AppIntroSlider
      //       data={slides}
      //       renderItem={RenderItem}
      //       onDone={this.onDone}
      //       renderDoneButton={RenderDoneButton}
      //       renderNextButton={RenderNextButton}
      //       dotStyle={styles.dotStyle}
      //       activeDotStyle={styles.activeDotStyle}
      //     />
      //   </View >
      //   )}
      // </>
    );
  }
};

// const mapStateToProps = state =>
// ({
//   OnboardingDone: state.onborading.value
// });
// const mapDispatchToProps = dispatch =>
//   bindActionCreators(
//     {
//       onborading_screen,
//     },
//     dispatch
//   );

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    onBoardingDoneAction
  },
    dispatch)
}
export default connect('', mapDispatchToProps)(Onborading);
// export default Onborading
