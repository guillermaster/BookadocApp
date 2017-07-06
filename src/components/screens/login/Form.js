import React, { Component } from 'react';
import Dimensions from 'Dimensions';
import {
	StyleSheet,
	KeyboardAvoidingView,
	View,
	ActivityIndicator,
	TouchableOpacity,
	Image,
    Text
} from 'react-native';

import UserInput from './UserInput';
// import ButtonSubmit from './ButtonSubmit';
// import SignupSection from './SignupSection';

import usernameImg from './../../../images/username.png';
import passwordImg from './../../../images/password.png';
import eyeImg from './../../../images/eye_black.png';

export default class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showPass: true,
            press: false
        };
        this.showPass = this.showPass.bind(this);
    }

    showPass() {
        this.state.press === false ? 
            this.setState({ showPass: false, press: true }) :
            this.setState({ showPass: true, press: false});
    }

    render() {
        return (
            <View>
                <UserInput source={usernameImg} 
                    secureTextEntry={false}
                    placeholder='Username'
                    returnKeyType={'done'}
                    autoCapitalize={'none'}
                    autoCorrect={false}
                    keyboardType={'email-address'} />                
            </View>
        );
    }
}

const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    btnEye: {
        position: 'absolute',
        top: 55,
        right: 28
    },
    iconEye: {
        width: 25,
        height: 25,
        tintColor: 'rgba(0,0,0,0.2)'
    }
});