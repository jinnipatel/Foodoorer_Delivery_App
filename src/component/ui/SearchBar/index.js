import React, {Component} from 'react';
import {TextInput, View} from 'react-native';
// import SearchBar from 'react-native-search-bar';

import Icon from 'react-native-vector-icons/Feather';
import { Color } from '../../../utils';

export class SearchBar extends Component {
    render() {
        return (
            <View
      style={[{
        backgroundColor:Color.WHITE,
        borderRadius:20,
        flexDirection: 'row',
        borderColor:Color.PRIMARY,
        borderWidth:2,
        margin:20,
        justifyContent:'space-evenly'
   
 
      },this.props.style]}>
      <TextInput
        placeholder="Search"
        style={{paddingHorizontal: 15, fontSize: 20, paddingRight: 45}}
      />
      <Icon name="search"   style={{marginStart:100,margin:15}} size={20} color={Color.PRIMARY} />
    </View>
        )
    }
}

export default SearchBar;
