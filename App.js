/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import RootNavigator from './src/config/RouteApp'

export default class App extends Component{
  render() {
    return (
     <RootNavigator/>
    );
  }
}

const styles = StyleSheet.create({
});
