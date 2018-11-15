import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import user from './db/users';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

/**
 * This needs to be changed at some point to render without waiting for the user
 */
Promise.resolve(user.create()).then(() => {
  ReactDOM.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
    document.getElementById('root')
  );
});

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
