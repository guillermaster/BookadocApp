import { StackNavigator } from "react-navigation";

import LoginScreen from "./components/screens/login/LoginScreen";
import SignupScreen from "./components/screens/signup/SignupScreen";

export const SignedOut = StackNavigator({
  SignUp: {
    screen: SignupScreen,
    navigationOptions: {
      title: "Sign Up"
    }
  },
  SignIn: {
    screen: LoginScreen,
    navigationOptions: {
      title: "Sign In"
    }
  }
});