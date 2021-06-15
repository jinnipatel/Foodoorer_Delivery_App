import { StyleSheet } from "react-native";
import { Color, ThemeUtils } from "../../utils";

const Styles = StyleSheet.create({
    MainContainer: {
        alignSelf: 'center',
        flexDirection: 'row',
        marginHorizontal: 20,
        padding: 20,
        justifyContent: 'space-between',
        marginTop: 20,
        borderWidth: 2,
        borderRadius: 8,
        borderColor: Color.PRIMARY_DARK,
        backgroundColor: Color.WHITE,
        alignItems: 'center',
        borderStyle: 'dashed'
    },
    subContainer: {
        marginTop: 4,
        width: 40,
        height: 40,
        backgroundColor: Color.PRIMARY,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        bottom: 25,
        right: 25
    },
    conatiner: {
        alignSelf: 'center', flexDirection: 'row',
        marginHorizontal: 20,
        padding: 20,
        justifyContent: 'space-between',
        marginTop: 20,
        borderWidth: 2,
        borderRadius: 8,
        borderColor: Color.PRIMARY_DARK,
        backgroundColor: Color.WHITE,
        alignItems: 'center',
        borderStyle: 'dashed'
    },
    img: {
        width: ThemeUtils.relativeWidth(58),
        height: ThemeUtils.relativeHeight(25)
    },
    ImageContainer: {
        marginTop: 4,
        width: 40,
        height: 40,
        backgroundColor: Color.PRIMARY,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center', bottom: 25, right: 25
    }
})

export default Styles