import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { Card, Header, Label } from '../../component'
import Routes from '../../routes/routes'
import { Color, CommonStyle } from '../../utils'

export class DocumentScreen extends Component {
    render() {
        return (
            <View>
                <Header
                //  onPress={() => this.props.navigation.openDrawer()}
                 Headertext="Document"
                 name="chevron-back"
                 iconName="notifications"
                 onPress={() => this.props.navigation.push(Routes.Home)}
          />    
            </View> 
           
        )
    }
}

export default DocumentScreen
