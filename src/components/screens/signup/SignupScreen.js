import React from "react";
import { View, Button } from "react-native";
import { NavigationActions } from 'react-navigation'

const navigateAction = NavigationActions.navigate({

  routeName: 'SignIn',

  params: {},

  action: NavigationActions.navigate({ routeName: 'SubProfileRoute'})
})

export default class SignupScreen extends React.Component {
  render() {
    return (
    	<View>
    		<Button
        		buttonStyle={{ marginTop: 20 }}
        		backgroundColor="transparent"
        		textStyle={{ color: "#bcbec1" }}
        		title="Sign In"
        		onPress={() =>this.props.navigation.dispatch(navigateAction)}
      		/>
    	</View>
    );
  }
}