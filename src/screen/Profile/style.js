import {StyleSheet} from 'react-native';
import {Color, ThemeUtils} from '../../utils';

const Styles = StyleSheet.create({
  MainConatiner: {
    // flex: 1,
    // backgroundColor: Color.PRIMARY,
  },
  HeaderContainer: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  labelText:{
    flexDirection: 'row',
    marginTop: 20,
    marginHorizontal: 10,
    padding: 20,
    marginLeft:50
  },
  sectionline:{
    height: 2,
    width: '100%',
    backgroundColor: Color.DARK_GRAY,
  },
  image: {
   
    // alignSelf:'flex-end',
    // marginRight:50,
    width: ThemeUtils.relativeWidth(37),
    height: ThemeUtils.relativeHeight(20),
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
