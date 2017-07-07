import React from "react";
import { View, Button, ScrollView, StyleSheet } from "react-native";
import { NavigationActions } from 'react-navigation'

import { RkButton, RkText, RkTextInput, RkSeparator } from 'react-native-ui-kitten';

const navigateAction = NavigationActions.navigate({

  routeName: 'SignIn',

  params: {},

  action: NavigationActions.navigate({ routeName: 'SubProfileRoute'})
})

export default class SignupScreen extends React.Component {
  render() {
    return (
    	<View style={styles.container}>
    		<ScrollView>
    			<View style={{flexDirection: 'row', justifyContent: 'center'}}>
    				<RkTextInput
	                    rkType='rounded'
	                    containerStyle={styles.inputContainer}
	                    labelStyle={styles.inputIcon}
	                    style={styles.input}
	                    placeholder={'Nombre'}
	                    placeholderTextColor={'#C0C0C0'} />
	                <RkTextInput
	                    rkType='rounded'
	                    containerStyle={styles.inputContainer}
	                    labelStyle={styles.inputIcon}
	                    style={styles.input}
	                    placeholder={'Correo electrónico'}
	                    placeholderTextColor={'#C0C0C0'} />
	                <RkTextInput
	                    rkType='rounded'
	                    containerStyle={styles.inputContainer}
	                    labelStyle={[styles.inputIcon, styles.inputIconLock]}
	                    style={styles.input}
	                    secureTextEntry={true}
	                    placeholder={'Contraseña'}
	                    placeholderTextColor={'#C0C0C0'}/>
	                <RkTextInput
	                    rkType='rounded'
	                    containerStyle={styles.inputContainer}
	                    labelStyle={[styles.inputIcon, styles.inputIconLock]}
	                    style={styles.input}
	                    secureTextEntry={true}
	                    placeholder={'Confirmación de contraseña'}
	                    placeholderTextColor={'#C0C0C0'}/>
    			</View>
	    		<Button
	        		buttonStyle={{ marginTop: 20 }}
	        		backgroundColor="transparent"
	        		textStyle={{ color: "#bcbec1" }}
	        		title="Sign In"
	        		onPress={() =>this.props.navigation.dispatch(navigateAction)}
	      		/>
      		</ScrollView>
    	</View>
    );
  }
}

let styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingTop: 70,
    paddingBottom: 20,
    flex: 1,
    justifyContent: 'space-between',
  },
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
  input: {
    flex: 1,
    height: 40,
    marginHorizontal: 10
  }
 }
);