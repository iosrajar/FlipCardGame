/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  LogBox,
  StatusBar,
} from 'react-native';
 
import Gamescreen from './Apps/Screens/Gamescreen'; 

const App: () => React$Node = () => {
  console.disableYellowBox = true; 
  return (
    <> 
      <StatusBar barStyle="dark-content" />
      <Gamescreen />
    </>
  );
};
 

export default App;
