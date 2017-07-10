/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import Home from './src/features/Home/Home'

import {
  AppRegistry,
  View
} from 'react-native';

import {
  Header,
  Link,
  nativeHistory,
  Route,
  Router,
  StackRoute,
  withRouter,
} from 'react-router-native';

const HomeHeader = withRouter((props) => {
  const handleRightButtonPress = () => {
    props.router.push('/about');
  };

  return (
    <Header
      {...props}
      style={{ backgroundColor: '#26BBE5' }}
      title="Home"
      rightButtonText="Gray"
      onRightButtonPress={handleRightButtonPress}
    />
  );
});
const Master = (props) => (
  <View>
    {props.children}
  </View>
);

export default class AwesomeProject extends Component {
  render() {    
    return (
      <Router history={nativeHistory} addressBar>
        <StackRoute path="master" component={Master}>
          <Route path="/" component={Home} overlayComponent={HomeHeader} />
          <Route path="/about" component={Home} />
        </StackRoute>
      </Router>
    );
  }
}

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
