/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { Provider } from 'redux';
import reducer from '../reducer/PeopleReducer';
import { createStore } from 'redux';
import Navigation from './Navigation';
import { Appbar } from 'react-native-paper';

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window,__REDUX_DEVTOOLS_EXTENSION__());

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <Provider store={store}>
      <Appbar.Header style={{backgroundColor: '#ccccff'}}>
        <Appbar.Content color={'blue'} style={{backgroundColor: '#ccccff'}} title="CRM APP" subtitle={'Developed using React Native'} />
      </Appbar.Header>
        <Navigation />
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#c64c38',
  },
});


