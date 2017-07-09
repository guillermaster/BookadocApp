import React, { Component } from 'react';
import {
	StyleSheet,
	TextInput,
  Text,
	View	
} from 'react-native';
import PropTypes from 'prop-types';

export default class BaDTextInput extends Component {

	render() {
    let placeholder = !this.props.showLabel ?  this.props.label : '';
    
		return (
      <View>
        { this.props.showLabel &&
          <Text>{this.props.label}</Text>
        }
        <TextInput
          style={styles.input}
          placeholder={placeholder}
          placeholderTextColor={'#000'}
          onChangeText={(text) => this.props.onChangeText(text)}
          secureTextEntry={this.props.secureTextEntry} />
        </View>
		);
	}
}

BaDTextInput.propTypes = {
  label: PropTypes.string.isRequired,
  showLabel: PropTypes.bool.isRequired,
  onChangeText: PropTypes.func.isRequired,
  secureTextEntry: PropTypes.bool
};

let styles = StyleSheet.create({ 
  inputContainer: {
    backgroundColor: '#ffffff',
    marginTop: 15,
    paddingLeft: 15,
  },
  inputIcon: {
    color: 'white',
    fontSize: 28,
    fontWeight: '300'
  },
  inputIconLock: {
    fontSize: 24,
  },
  input: {
    flex: 1,
    height: 40,
    backgroundColor: '#fff',
		opacity: 0.1,
    marginTop: 5,
    marginBottom: 5,
    paddingLeft: 2,
    paddingRight: 2,
    paddingTop: 0,
    paddingBottom: 0,
    borderWidth: 0,
    borderBottomWidth: 0
  }
});