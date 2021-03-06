import React, { Component } from 'react';
import Dimensions from 'Dimensions';
import { StyleSheet, Image } from 'react-native';

import bgSrc from './../../images/login-wallpaper.png';

export default class SignedOutWallpaper extends Component {
    render() {
        return (
            <Image style={styles.picture} source={bgSrc}>
                {this.props.children}
            </Image>
        );
    }
}

const styles = StyleSheet.create({
    picture: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'cover'
    }
})