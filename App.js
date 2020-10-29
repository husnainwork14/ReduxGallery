import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import ReduxApp from './src/index'



export default class App extends Component {

  componentDidMount() {
    console.log('APP.js')
  }

  render() {
    return (
      <View style={styles.container}>
        <ReduxApp />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white',
  }
});
