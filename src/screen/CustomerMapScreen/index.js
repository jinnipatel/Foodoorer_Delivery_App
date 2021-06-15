import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';
import { View, Modal, Image } from 'react-native';
import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';
import { Button, Label, SocialButton, Status } from '../../component';
import Routes from '../../routes/routes';
import { Color } from '../../utils';
import RadioButtonRN from 'radio-buttons-react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Styles from './Styles';

const data = [
  {
    label: 'I am New To The Area',
  },
  {
    label: 'Floor Number Is Missing',
  },
  {
    label: 'House/Flat Number Is Missing',
  },
  {
    label: 'Tower Number Is Missing',
  },
];

export class CustomerMapScreen extends Component {
  constructor() {
    super();
    this.state = {
      show: true,
      modelshow: false,
      doneModelShow: false,
      isFinishBtn: true
    };
  }

  enableButton = () => {
    setTimeout(() => {
      this.setState({ isFinishBtn: false })
    }, 2000);
  }

  render() {
    return (
      <View style={Styles.mapConatiner}>
        <Status hidden={true} />

        <MapView
          style={Styles.mapViewContainer}
          showsUserLocation={true}
          zoomEnabled={true}
          zoomControlEnabled={true}
          initialRegion={{
            latitude: 23.033863,
            longitude: 72.585022,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}>
          <Marker coordinate={{ latitude: 23.033863, longitude: 72.585022 }} />
        </MapView>

        <View>
          <Modal
            visible={this.state.show}
            transparent={true}
            animationType="slide">
            <View style={Styles.ModelConatiner}>
              <View style={Styles.ConatinerView}>
                <Image
                  source={require('../../assets/Img/profile_logo.png')}
                  style={Styles.modelImag}
                  resizeMode='contain'
                />
                <View style={{ marginStart: 20 }}>
                  <Label large color={Color.PRIMARY_DARK}>
                    Charies W.Abeyta
                  </Label>
                  <View style={Styles.ConatinerView}>
                    <Label small color={Color.PRIMARY_DARK}>
                      Location:
                    </Label>
                    <Label small ms={5} color={Color.DARK_GRAY}>
                      4722 Villa Drive
                    </Label>
                  </View>
                  <View style={Styles.ConatinerView}>
                    <TouchableOpacity
                      onPress={() =>
                        this.setState({ modelshow: true, show: true })
                      }>
                      <Image
                        source={require('../../assets/Img/call_logo.png')}
                        style={Styles.iconstyle}
                        resizeMode="contain"
                      />
                    </TouchableOpacity>

                    <Modal visible={this.state.modelshow} transparent={true}>
                      <View style={Styles.SecondModelView}>
                        <View style={Styles.secondContainer}>
                          <Label xlarge>Select Reason For Calling</Label>
                          <View style={{ marginTop: 10 }}>
                            <RadioButtonRN
                              data={data}
                              selectedBtn={e => console.log(e)}
                            />
                          </View>
                          <View style={{ marginTop: 20 }}>
                            <Button
                              name="submit"
                              onPress={() => {
                                this.setState({ modelshow: false });
                                this.enableButton()
                              }}
                            />
                          </View>
                        </View>
                      </View>
                    </Modal>

                    <SocialButton
                      btntext="Finish"
                      bgColor={this.state.isFinishBtn ? Color.LIGHT_GRAY : null}
                      onPress={() => this.setState({ doneModelShow: true })}
                      source={require('../../assets/Img/right_logo.png')}
                      disabled={this.state.isFinishBtn}
                    />
                  </View>
                </View>
              </View>
            </View>
          </Modal>

          <Modal visible={this.state.doneModelShow} transparent={true}>
            <View style={Styles.thridModel}>
              <View style={Styles.thridModelConatiner}>
                <Icon
                  name="thumbs-up"
                  size={65}
                  style={{ marginTop: 40 }}
                  color={Color.PRIMARY}
                />
                <Label mt={10} xlarge color={Color.PRIMARY_DARK}>
                  Order Delivered Sucessfully
                </Label>
                <Label mt={20} large>
                  Rs.50
                </Label>
                <Label mt={20} large>
                  Earned by you!
                </Label>
                <View style={{ marginTop: 10 }}>
                  <SocialButton
                    btntext="Done"
                    source={require('../../assets/Img/right_logo.png')}
                    onPress={() => {
                      this.props.navigation.push(Routes.Home);
                    }}
                  />
                </View>
              </View>
            </View>
          </Modal>
        </View>
      </View>
    );
  }
}

export default CustomerMapScreen;
