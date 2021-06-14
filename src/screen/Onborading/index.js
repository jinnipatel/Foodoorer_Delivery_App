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
import AsyncStorage from '@react-native-async-storage/async-storage';
import { onborading_screen } from '../../redux/reducers/Onborading/action'




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


  // state = {
  //   isOnboardingDone: false
  // }

  render() {
    console.log("setonborading render", this.props.OnboardingDone)

    const onDone = () => {
      this.props.onDone();
    };


    // componentDidMount()
    // {
    //   console.log('isOnboardingDone--', this.props.isOnboardingDone)
    //   if (this.props.isOnboardingDone === null) {
    //     this.setState({
    //       onBoardingDone: false
    //     })
    //   }
    //   else {
    //     this.setState({
    //       onBoardingDone: true
    //     })
    //   }

    //   const isOnboardingDone = AsyncStorage.getItem('OnBoarding')
    //   //  let parsed = JSON.parse(isOnboardingDone);
    //   console.log('isOnboardingdone-async-', isOnboardingDone)

    //   if (isOnboardingDone.done !== null) {
    //     this.setState({
    //       onBoardingDone: true
    //     })
    //   }
    //   else {
    //     this.setState({
    //       onBoardingDone: false
    //     })
    //   }

    // }





    const RenderNextButton = () => {
      return (
        <View style={styles.buttonCircle}>
          <Icon name="arrow-right" style={{ fontSize: 25, color: Color.WHITE }} />
        </View>
      );
    };

    const RenderDoneButton = () => {
      return (
        <TouchableOpacity onPress={() => {
          this.props.onborading_screen(true)
          console.log("setonborading", this.props.OnboardingDone)
          this.props.navigation.navigate(Routes.Login)
        }}>
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

      <>
        {this.props.OnboardingDone === true ? (
          this.props.navigation.navigate(Routes.Signup)
        ) : (<View style={{ flex: 1 }}>
          <StatusBar hidden={true} />

          <AppIntroSlider
            data={slides}
            renderItem={RenderItem}
            onDone={onDone}
            renderDoneButton={RenderDoneButton}
            renderNextButton={RenderNextButton}
            dotStyle={styles.dotStyle}
            activeDotStyle={styles.activeDotStyle}
          />
        </View >
        )}
      </>
    );
  }
};

// const mapStateToProps = state => ({
//   isOnboardingDone: state.onBoarding.val.onBoarding,
// });

// const mapDispatchToProps = dispatch => 
//   bindActionCreators(
//     {
//       onBoardingDone,
//     },
//     dispatch,
//   );

const mapStateToProps = state =>
// console.log('------Onboarding map -------', state)
({
  // OnboardingDone: state.onborading.value.onborading,
  OnboardingDone: state.onborading.value
});


const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      onborading_screen,
    },
    dispatch
  );

// const mapDispatchToProps = (dispatch) => {
//   return {
//     loadOnboarding: () => dispatch(onborading_screen)
//   }
// }


export default connect(mapStateToProps, mapDispatchToProps)(Onborading);
