/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import AppContainer from './src/AppContainer';



const App = () => {
  return (
    <PaperProvider>
      <AppContainer></AppContainer>
    </PaperProvider>
  );
};

export default App;
