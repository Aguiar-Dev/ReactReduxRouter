import React, { Component, PropTypes } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

class ReduxConnection extends Component {
  static propTypes = {
    routes: PropTypes.object,
  };
  render() {
    console.log('Basic Props: ', this.props);
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          This scene{'\''}s title is {this.props.routes.scene.title}
        </Text>
      </View>
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
})

// export the smart container through connect
export default connect(({routes}) => ({routes}))(ReduxConnection);
