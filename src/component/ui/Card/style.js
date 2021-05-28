import {StyleSheet} from 'react-native';
import {ThemeUtils} from '../../../utils';

export const Styles = StyleSheet.create({
  card: {
    height: ThemeUtils.relativeHeight(20),
    width: ThemeUtils.relativeWidth(40),
    borderRadius: 10,
    backgroundColor: '#fff',
    elevation: 15,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.5,
    shadowRadius: 2,
    shadowColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    width: ThemeUtils.relativeHeight(3.6),
    height: ThemeUtils.relativeHeight(6),
  },
});
