import * as React from 'react';
import Hello from './Hello';
import HelloSFC from './HelloSFC';
import logo from './logo.svg';

import './App.css';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Hello name="zhangsan" enthusiasmLevel={20}/>
        <HelloSFC name="zhangsan" enthusiasmLevel={10}/>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
