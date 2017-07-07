import React, { Component } from 'react';
import {
	StyleSheet,
	TextInput,
	View	
} from 'react-native';
import PropTypes from 'prop-types';

export default class BaDTextInput extends Component {
	render() {
		return (
			<TextInput
                style={styles.input}
                placeholder={this.props.placeholder}
                onChangeText={(text) => this.props.onChangeText(text)} />
		);
	}
}

BaDTextInput.propTypes = {
  placeholder: PropTypes.string.isRequired,
  onChangeText: PropTypes.func.isRequired
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
    marginHorizontal: 10
  }
});