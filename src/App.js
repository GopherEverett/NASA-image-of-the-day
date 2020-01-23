import React from 'react';
import AstronomyContainer from './components/AstronomyContainer'
import './stylesheets/styles.css';
import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';
import { withAuthenticator } from 'aws-amplify-react'; // or 'aws-amplify-react-native';

Amplify.configure(awsconfig);


function App() {
  return (
    <div className="App">
    <AstronomyContainer />
    </div>
  );
}

export default withAuthenticator(App, true);
