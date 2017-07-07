import React, { Component } from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  StatusBar,
  Image,
  Text,
  ScrollView
} from 'react-native';
import { NavigationActions } from 'react-navigation';

import { RkButton, RkText, RkTextInput, RkSeparator } from 'react-native-ui-kitten';

import Wallpaper from './Wallpaper';
import BaDTextInput from './../../shared/BaDTextInput';

const navigateActionSignUp = NavigationActions.navigate({
  routeName: 'SignUp',
  params: {},
  action: NavigationActions.navigate({ routeName: 'SubProfileRoute'})
})

export default class LoginScreen extends Component {
	constructor(props){
		super(props);
		this.doLogin.bind(this);
	}

	doLogin(){
		console.log('ldoLogin');
	}

  usernameTextChanged(username){
    console.log(username);
  }

  render() {    
    return (
    	<Wallpaper>
			<View style={styles.container}>
				<ScrollView>
					<Image style={styles.logoImg} source={require('../../../img/react_logo.png')}/>
	             	<RkText style={styles.title}>Book <Text style={styles.subTitle}>a</Text> Doc</RkText>
	              	<View style={{flexDirection: 'row', justifyContent: 'center'}}>
            			<View style={styles.widthLimit}>
                			<BaDTextInput placeholder={'Login'}
			                    onChangeText={this.usernameTextChanged.bind(this)}/>

			                <RkTextInput
			                    rkType='rounded'
			                    containerStyle={styles.inputContainer}
			                    labelStyle={[styles.inputIcon, styles.inputIconLock]}
			                    style={styles.input}
			                    secureTextEntry={true}
			                    placeholder={'Password'}
			                    placeholderTextColor={'#C0C0C0'}/>
            			</View>
            		</View>
            		<View style={{flexDirection: 'row', justifyContent: 'center'}}>
		            	<View style={{flexDirection: 'row', justifyContent: 'center'}}>
		                	<RkButton innerStyle={styles.buttonInner}
		                          style={styles.buttonContainer}
		                          rkType='circle shadow'
		                          onPress={() => this.doLogin()}>
		                		<RkText style={{color: '#195ccf'}}>Continue</RkText>
		                	</RkButton>
		              	</View>		              	
		            </View>
		            <RkText style={styles.footText}>
          				Don't have account?  
          				<Text style={{marginLeft: 10}} onPress={() => this.props.navigation.dispatch(navigateActionSignUp)}>
          					Sign up
          				</Text>
          			</RkText>
				</ScrollView>
			</View>
    	</Wallpaper>
    	
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
  widthLimit: {
    flex: 1,
    maxWidth: 275,
    minHeight: 120,
    justifyContent: 'center'
  },
  logoImg: {
    alignSelf: 'center',
    width: 80,
    height: 80,
    resizeMode: 'contain'
  },
  title: {
    marginTop: 5,
    fontSize: 42,
    textAlign: 'center',
    fontWeight: '500',
    color: '#fff'
  },
  subTitle: {
    fontSize: 36,
    textAlign: 'center',
    fontWeight: '100',
    marginBottom: 30
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
  inputIconLock: {
    fontSize: 24,
  },
  input: {
    flex: 1,
    height: 40,
    marginHorizontal: 10
  },
  footText: {
    marginVertical: 30,
    alignSelf: 'center',
    color: '#ffffff',
    backgroundColor: 'transparent'
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
  extraBold: {
    fontWeight: '700'
  }
});