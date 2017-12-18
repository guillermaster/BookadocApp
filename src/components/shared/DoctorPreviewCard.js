import React, { Component } from 'react';
import { View, Text, Image, TouchableWithoutFeedback, LayoutAnimation, Animated } from 'react-native'

import FadeIn from 'react-native-fade-in-image'

import styles from './../../styles/PreviewCard';

export default class DoctorPreviewCard extends Component {
    construtor(props){
        super(props);

        this.state = {
            isActive: false,
            animatedSize: new Animated.Value(1)
        }
    }

    handlePressIn = () => {
        Animated.spring(this.state.animatedSize, {
            toValue: 1.05,
            useNativeDriver: true
        }).start()
    }

    handlePressOut = () => {
        Animated.spring(this.state.animatedSize, {
            toValue: 1,
            friction: 5,
            useNativeDriver: true
        }).start()
    }

    render() {
        const {
            name,
            title,
            avatarURL
        } = this.props;

        <View>
            <TouchableWithoutFeedback
                onPressIn={this.handlePressIn}
                onPressOut={this.handlePressOut}
                onPress={this.props.onPress}>
                <Animated.View style={styles.container}>
                    <View style={styles.info}>
                        <View style={styles.infoText}>
                            <Text style={styles.name}>{name}</Text>
                            <Text style={styles.title}>{title}</Text>
                        </View>
                        <FadeIn>
                            <Image style={styles.avatar} source={{uri: avatarURL}} />
                        </FadeIn>
                    </View>
                </Animated.View>
            </TouchableWithoutFeedback>
        </View>
    }
}