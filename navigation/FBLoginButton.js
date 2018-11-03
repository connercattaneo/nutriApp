import React, { Component } from 'react';
import { View, Button } from 'react-native';
import { LoginManager } from 'react-native-fbsdk';

export default class FBLoginButton extends Component {
  handleFacebookLogin () {
      LoginManager.logInWithReadPermissions(['public_profile', 'email', 'user_friends']).then(
        function (result) {
          if (result.isCancelled) {
            console.log('Login cancelled')
          } else {
            console.log('Login success with permissions: ' + result.grantedPermissions.toString())
          }
        },
        function (error) {
          console.log('Login fail with error: ' + error)
        }
      )
    }
    render () {
      return (
        <Button
          onPress={this.handleFacebookLogin}
          title="Continue with fb"
          color="#4267B2"
        />
      )
    }
};
