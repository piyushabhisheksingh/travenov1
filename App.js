/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  View,
  StatusBar ,
  YellowBox,
  StyleSheet
} from 'react-native';
import Route from './src/Route';
import NavigationBar from 'react-native-navbar-color';

YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated']);
export default class App extends Component {
  componentDidMount() {
        NavigationBar.setColor('#00a1ad')
    }
  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor='#00a1ad' barStyle="light-content"/>
        <Route/>
      </View>
    );
  }


}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }

});
