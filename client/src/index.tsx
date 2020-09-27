import React from 'react';
import ReactDOM from 'react-dom';
import App from './pages/App';
import { GlobalStyle } from './globalStyle';
import { Provider, Client, defaultExchanges } from 'urql';

import * as serviceWorker from './serviceWorker';

const client = new Client({
  url: '/graphql/',
  exchanges: defaultExchanges
});

ReactDOM.render(
  <Provider value={client}>
    <GlobalStyle />
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
