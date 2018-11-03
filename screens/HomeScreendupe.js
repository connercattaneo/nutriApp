import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

import t from 'tcomb-form-native'; // 0.6.9

const Form = t.form.Form;

const User = t.struct({
  gender: t.String,
  age: t.String,
  weight: t.String,
  height: t.String,
  Body_Mass_Index: t.String
});

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}><Form type={User} /></View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    marginTop: 50,
    padding: 20,
    backgroundColor: '#ffffff',
  },
});
