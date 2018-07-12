import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { hot } from 'react-hot-loader';
import { Provider } from "react-redux";
import { createStore } from 'redux';
import { enthusiasm } from 'src/reducers';
import App from './App';
import './index.scss';
import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(
//   <App />,
//   document.getElementById('root')!  //  感叹号结尾表示去掉null和undefined
// );
// ReactDOM.render(
//   <App />,
//   document.getElementById('root') as HTMLElement
// );

const store = createStore(enthusiasm, {
  enthusiasmLevel: 1,
  languageName: 'Typescript',
});

const root = () => <Provider store={store}><App /></Provider>;

ReactDOM.render(
  React.createElement(hot(module)(root)),
  document.getElementById('root')!
);

registerServiceWorker();
