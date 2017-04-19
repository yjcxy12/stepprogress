import React, { Component } from 'react';
import StepProgress from './components/StepProgress.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <StepProgress titleArray={['design', 'build']} initialStep={-1} />
        <StepProgress
          titleArray={['design', 'build', 'test']}
          initialStep={5}
        />
        <StepProgress
          titleArray={['design', 'build', 'test', 'deploy']}
          initialStep={2}
        />
        <StepProgress
          titleArray={['design', 'build', 'test', 'deploy', 'live']}
          initialStep={2}
        />
        <StepProgress
          titleArray={['discuss', 'design', 'build', 'test', 'deploy', 'live']}
          initialStep={4}
        />
      </div>
    );
  }
}

export default App;
