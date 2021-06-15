import { StyleSheet } from 'react-native';
import { Color, ThemeUtils } from '../../utils';

const Styles = StyleSheet.create({

  HeaderContainer: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  labelText: {
    flexDirection: 'row',
    marginTop: 20,
    marginHorizontal: 10,
    padding: 20,
    marginLeft: 50
  },
  sectionline: {
    height: 2,
    width: '100%',
    backgroundColor: Color.DARK_GRAY,
  },
  image: {
    width: ThemeUtils.relativeWidth(37),
    height: ThemeUtils.relativeHeight(20),
  },
  MainFooterContainer: {
    flex: 5,
  },
  subContainer: {
    flex: 2,
    backgroundColor: Color.PRIMARY,
    borderTopEndRadius: 20,
    borderTopStartRadius: 20,
  },
  subView: {
    margin: 10,
  },
});

export default Styles;
