import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import { NavigationActions } from 'react-navigation'

import { RkButton } from 'react-native-ui-kitten';
import { TextField } from 'react-native-material-textfield';

import SignedOutWallpaper from './../../shared/SignedOutWallpaper';
import { InputTextColors } from './../../../styles/Colors';
import { SignedOutTitleStyles } from './../../../styles/SignedOutTitleStyles';

const navigateAction = NavigationActions.navigate({
  routeName: 'SignIn',
  params: {},
  action: NavigationActions.navigate({ routeName: 'SubProfileRoute'})
})

export default class SignupScreen extends React.Component {
	constructor(props){
		super(props);
		state = {
			name: '',
			lastName: '',
			email: '',
			password: '',
			passwordConf: '',
		}
	}

	doSignUp() {

	}

  render() {
    return (
			<SignedOutWallpaper>
				<View style={styles.container}>
					<ScrollView>
						<Text style={SignedOutTitleStyles.title}>Book <Text style={SignedOutTitleStyles.subTitle}>a</Text> Doc</Text>
						<Text style={styles.subTitle}>Crea tu cuenta</Text>
						<TextField 
							label={'Nombre'} 
							tintColor={InputTextColors.tintColor} 
							baseColor={InputTextColors.baseColor} 
							textColor={InputTextColors.textColor}
							onChangeText={ (name => this.setState({name})) } />

						<TextField 
							label={'Apellido'} 
							tintColor={InputTextColors.tintColor} 
							baseColor={InputTextColors.baseColor} 
							textColor={InputTextColors.textColor}
							onChangeText={ (lastName => this.setState({lastName})) } />
						
						<TextField 
							label={'Correo electrónico'} 
							tintColor={InputTextColors.tintColor} 
							baseColor={InputTextColors.baseColor} 
							textColor={InputTextColors.textColor}
							onChangeText={ (email => this.setState({email})) } />

						<TextField 
							label={'Contraseña'} 
							secureTextEntry={true}
							tintColor={InputTextColors.tintColor} 
							baseColor={InputTextColors.baseColor} 
							textColor={InputTextColors.textColor}
							onChangeText={ (password => this.setState({password})) } />

						<TextField 
							label={'Confirmación de contraseña'} 
							secureTextEntry={true}
							tintColor={InputTextColors.tintColor} 
							baseColor={InputTextColors.baseColor} 
							textColor={InputTextColors.textColor}
							onChangeText={ (passwordConf => this.setState({passwordConf})) } />
						
							<RkButton innerStyle={styles.buttonInner}
								style={styles.buttonContainer}
								rkType='circle shadow'
								onPress={this.doSignUp.bind(this)}>
								<Text style={{color: '#195ccf'}}>Continue</Text>
							</RkButton>
						</ScrollView>
				</View>
			</SignedOutWallpaper>
    );
  }
}

let styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingTop: 20,
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
    marginHorizontal: 10,
		backgroundColor: '#fff',
		opacity: 0.1
  },
	buttonContainer: {
    backgroundColor: '#8ccee7',
    shadowColor: '#599eb8',
    paddingVertical: 12,
    shadowRadius: 12,
    shadowOpacity: 0.4,
    marginTop: 40,
  },
  buttonInner: {
    fontSize: 22,
    color: 'white',
  },
  subTitle: {
    fontSize: 24,
    textAlign: 'left',
    fontWeight: '200',
    marginBottom: 5,
		color: '#fff'
  }
 }
);