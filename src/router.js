import { StackNavigator } from "react-navigation";

import LoginScreen from "./components/screens/login/LoginScreen";
import SignupScreen from "./components/screens/signup/SignupScreen";

export const SignedOut = StackNavigator({
  SignIn: {
    screen: LoginScreen,
    navigationOptions: {
      title: "Sign In",
      header: null
    }
  },
  SignUp: {
    screen: SignupScreen,
    navigationOptions: {
      title: "Sign Up"
    }
  }  
});