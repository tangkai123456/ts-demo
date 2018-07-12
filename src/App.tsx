import * as React from 'react';
import Hello from 'src/components/Hello';
import HelloSFC from 'src/components/HelloSFC';
import logo from './logo.svg';

import './App.scss';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Hello name="zhangsan" />
        <HelloSFC />
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
