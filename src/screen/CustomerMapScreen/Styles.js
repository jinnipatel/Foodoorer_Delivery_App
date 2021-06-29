import { StyleSheet } from 'react-native';
import { Color, ThemeUtils } from '../../utils';

const Styles = StyleSheet.create({
    mapConatiner: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    mapViewContainer: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    },
    ModelConatiner: {
        alignSelf: 'center',
        position: 'absolute',
        bottom: 0,
        width: '100%',
        paddingHorizontal: 20,
        paddingVertical: 20,
        // backgroundColor:Color.PRIMARY,
        backgroundColor: Color.BOX_BG,
        borderTopStartRadius: 20,
        borderTopEndRadius: 20,
    },
    modelImag: {
        width: 100,
        height: 100,
        alignSelf: 'flex-start',
    },
    ConatinerView: {
        flexDirection: 'row',
    },
    iconstyle: {
        width: 40,
        height: 40,
        margin: 10,
    },
    SecondModelView: {
        backgroundColor: '#000000aa',
        flex: 1,
        justifyContent: 'center',
    },
    secondContainer: {
        margin: 25,
        padding: 25,
        backgroundColor: '#ffffff',
        borderRadius: 10,
    },
    thridModel: {
        backgroundColor: '#000000aa',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    thridModelConatiner: {
        height: ThemeUtils.relativeHeight(50),
        backgroundColor: Color.BOX_BG,
        width: ThemeUtils.relativeWidth(90),
        alignItems: 'center',
        marginHorizontal: 30,
        borderRadius: 14,
        borderRadius: 20,
    },
});

export default Styles;
