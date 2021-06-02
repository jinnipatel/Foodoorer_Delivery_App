import {StyleSheet} from 'react-native';
import {ThemeUtils} from '../../../utils';

export const Styles = StyleSheet.create({
  card: {
    height: ThemeUtils.relativeHeight(25),
    width: ThemeUtils.relativeWidth(100),
    borderRadius: 10,
    backgroundColor: '#fff',
    elevation: 15,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.5,
    shadowRadius: 2,
    shadowColor: '#000',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  img: {
    width: ThemeUtils.relativeHeight(10),
    height: ThemeUtils.relativeHeight(10),
    marginLeft:20,
    marginTop:20
    
  },
});
