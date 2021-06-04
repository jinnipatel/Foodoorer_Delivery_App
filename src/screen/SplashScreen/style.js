import {Platform, StyleSheet} from 'react-native';
import {Color} from '../../utils/Color';
import ThemeUtils from '../../utils/ThemeUtils';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.WHITE,
    width: ThemeUtils.relativeWidth(100),
    height: ThemeUtils.relativeHeight(100),
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    paddingTop: Platform.OS === 'ios' ? 20 : 0,
  },
  logo: {
    height: 200,
    width: "80%",
    // height:ThemeUtils.responsiveHeight(200),
    // width:ThemeUtils.responsiveHeight(80),
    // alignItems: 'center',
    alignSelf:'center',
    
  },
  footer: {
    position: 'absolute',
    bottom: 75,
  },
});
export default styles;
