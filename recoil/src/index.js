import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {RecoilRoot} from 'recoil'

if (process.env.NODE_ENV === 'development') {
  const { worker } = require('./mocks/browser')
   worker.start()
 }

ReactDOM.render(
  <RecoilRoot>
    <App />
  </RecoilRoot>,
  document.getElementById('root')
);


