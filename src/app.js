import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Router, Switch, Route } from './routing';
import Home from './home';
import Pokemon from './pokemon';
import * as Application from 'expo-application';
import Analytics from './analytics';
import * as Amplitude from 'expo-analytics-amplitude';
import * as Segment from 'expo-analytics-segment';


class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Router>
          <Switch>
            <Route exact path="/" render={props => <Home {...props} />} />
            <Route path="/pokemon" render={props => <Pokemon {...props} />} />

          </Switch>
        </Router>
      </View>

    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
    padding: 50
  }
});
export default App;
