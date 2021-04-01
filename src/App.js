import React from 'react';
import AstronomyContainer from './components/AstronomyContainer'
<<<<<<< HEAD
import './stylesheets/styles.css'; // or 'aws-amplify-react-native';
=======
import './stylesheets/styles.css';
import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';
import { withAuthenticator } from 'aws-amplify-react'; // or 'aws-amplify-react-native';
>>>>>>> e51f254b39b66e8eba7be05e6a6a5bf00ce7603c

Amplify.configure(awsconfig);


function App() {
  return (
    <div className="App">
    <AstronomyContainer />
    </div>
  );
}

export default withAuthenticator(App, true);
