import React from 'react';
import { createStackNavigator, createSwitchNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import FBLoginButton from './FBLoginButton';

const AppStack = createStackNavigator({Main: MainTabNavigator});
const AuthStack = createStackNavigator({SignIn: FBLoginButton });



export default createSwitchNavigator({
  // You could add another route here for authentication.
  // Read more at https://reactnavigation.org/docs/en/auth-flow.html
  Main: AppStack,
  Auth: AuthStack,

},
);
