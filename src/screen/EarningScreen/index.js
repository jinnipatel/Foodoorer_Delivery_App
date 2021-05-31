import React, { Component } from 'react'
import { SafeAreaView } from 'react-native'
import { Text, View } from 'react-native'
import { Header } from '../../component'

export class EarningScreen extends Component {
    render() {
        return (
            <SafeAreaView>
            <View>
            <Header
                Headertext="Earning"
                name="menu"     
        />
            </View>
            </SafeAreaView>
        )
    }
}

export default EarningScreen
