/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import {connect} from 'react-redux';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';

const Stack = createNativeStackNavigator();
const App = props => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const mapStateToProps = state => {
  return {
    fact: state.fact,
    number: state.number,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onRequestFact: () => dispatch({type: 'GENERATE_FACT'}),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
