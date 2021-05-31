import {StyleSheet} from 'react-native';
import {Color, ThemeUtils} from '../../utils';

const Styles = StyleSheet.create({
  MainConatiner: {
    flex: 1,
    // backgroundColor: Color.PRIMARY,
  },
  HeaderContainer: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    // marginTop:25,
    width: ThemeUtils.relativeWidth(25),
    height: ThemeUtils.relativeHeight(15),
  },
  MainFooterContainer: {
    flex: 5,
  },
  subContainer: {
    flex: 2,
    // backgroundColor: Color.ALICE_BLUE,
    backgroundColor:Color.PRIMARY,
    borderTopEndRadius: 20,
    borderTopStartRadius: 20,
  },
  // MainView: {
  //   marginTop: 25,
  // },
  subView: {
    margin:10,
  },
});

export default Styles;
