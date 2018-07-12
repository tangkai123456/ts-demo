import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { hot } from 'react-hot-loader';
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

ReactDOM.render(
  React.createElement(hot(module)(() => <App />)),
  document.getElementById('root')!
);

registerServiceWorker();
