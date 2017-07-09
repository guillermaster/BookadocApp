import React from "react";
import { View, Button, ScrollView, StyleSheet } from "react-native";
import { NavigationActions } from 'react-navigation'

import { RkButton, RkText, RkTextInput, RkSeparator } from 'react-native-ui-kitten';

import SignedOutWallpaper from './../../shared/SignedOutWallpaper';
import BaDTextInput from './../../shared/BaDTextInput';

const navigateAction = NavigationActions.navigate({
  routeName: 'SignIn',
  params: {},
  action: NavigationActions.navigate({ routeName: 'SubProfileRoute'})
})

export default class SignupScreen extends React.Component {

	nameTextChanged(username){
    debugger
  }

  render() {
    return (
			<SignedOutWallpaper>
				<View style={styles.container}>
					<ScrollView>
						
							<BaDTextInput label={'Name'}
								onChangeText={this.nameTextChanged.bind(this)} />

										<RkTextInput
												rkType='rounded'
												style={styles.input}
												inputStyle={{color: '#000'}}
												placeholder={'Correo electrónico'}
												placeholderTextColor={'#000'} />
										<RkTextInput
												rkType='rounded'
												containerStyle={styles.inputContainer}
												labelStyle={[styles.inputIcon, styles.inputIconLock]}
												style={styles.input}
												secureTextEntry={true}
												placeholder={'Contraseña'}
												placeholderTextColor={'#0848b7'}/>
										<RkTextInput
												rkType='rounded'
												containerStyle={styles.inputContainer}
												labelStyle={[styles.inputIcon, styles.inputIconLock]}
												style={styles.input}
												secureTextEntry={true}
												placeholder={'Confirmación de contraseña'}
												placeholderTextColor={'#ffffff'}/>
						
						<Button
								buttonStyle={{ marginTop: 20 }}
								backgroundColor="transparent"
								textStyle={{ color: "#bcbec1" }}
								title="Sign In"
								onPress={() =>this.props.navigation.dispatch(navigateAction)}
							/>
						</ScrollView>
				</View>
			</SignedOutWallpaper>
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
    marginHorizontal: 10,
		backgroundColor: '#fff',
		opacity: 0.1
  }
 }
);