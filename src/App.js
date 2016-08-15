import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';

// Importing dependancies for the application
import { Router, Scene } from 'react-native-router-flux';
import { Provider, connect } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';

const RouterWithRedux = connect()(Router);

import reducers from './reducers';
import HomeScreen from './containers/HomeScreen';
import ReduxConnection from './containers/ReduxConnection';

// Saturday diving into middleware
const middleware = [/* Thunk */];
const store = compose(applyMiddleware(...middleware))(createStore)(reducers);

export default class App extends Component {
  render() {
    return(
        <Provider store={store}>
          <RouterWithRedux>
            <Scene key="root">
              <Scene
                key="Home"
                component={HomeScreen}
                title="Home"
                initial={true}
              />
              <Scene
                key="ReduxConnection"
                component={ReduxConnection}
                title="Smart Container"
                exampleProp="Hello"
              />
            </Scene>
          </RouterWithRedux>
        </Provider>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
