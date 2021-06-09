import React, {Component} from 'react';
import {TouchableOpacity,View, Text,Image} from 'react-native';
import { Color } from '../../../utils';
import Label from '../Label';
import styles from './style';

export default class SocialButton extends Component {
  render() {
    return (
     
      <TouchableOpacity onPress={this.props.onPress}  disabled={this.props.disabled} style={[styles.button,{backgroundColor:this.props.bgColor}]}>
        <Image source={this.props.source}  resizeMode="contain" style={styles.image}/>
        <Label style={styles.text}>{this.props.btntext}</Label>
      </TouchableOpacity>
    );
  }
}
