import React, { Component } from 'react'
import { SafeAreaView } from 'react-native'
import { View, Image } from 'react-native'
import { Label, Status } from '../../component'
import { Color } from '../../utils'
import Icon1 from 'react-native-vector-icons/Ionicons';
import Styles from './Styles'


export class DocumentScreen extends Component {
    render() {
        return (
            <SafeAreaView>
                <Status hidden={true} />
                <Label ms={55} mt={50} xlarge color={Color.PRIMARY_DARK}>Driving Licence </Label>
                <View style={Styles.MainContainer}>
                    <Image source={require('../../assets/Img/Lincence_logo.jpeg')} resizeMode="contain" />
                    <View style={Styles.subContainer}>
                        <Icon1 name="checkmark-done" color={Color.WHITE} size={25} />
                    </View>
                </View>
                <Label ms={55} mt={20} xlarge color={Color.PRIMARY_DARK}>National ID </Label>
                <View style={Styles.conatiner}>
                    <Image source={require('../../assets/Img/id_logo.png')} resizeMode="contain" style={Styles.img} />
                    <View style={Styles.ImageContainer}>
                        <Icon1 name="checkmark-done" color={Color.WHITE} size={25} />
                    </View>
                </View>
            </SafeAreaView>


        )
    }
}

export default DocumentScreen
