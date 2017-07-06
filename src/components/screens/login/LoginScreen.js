import React from "react";
import { View, Text } from "react-native";

import Wallpaper from './Wallpaper';
import Form from './Form';

export default class LoginScreen extends React.Component {
  render() {
    return (
    	<Wallpaper>
    		<Form />
    	</Wallpaper>
    );
  }
}