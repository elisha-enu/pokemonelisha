import React from 'react';
import ReactDOM from 'react-dom';
import { Provider }  from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import './index.css';
// import App from './pages/app';
import PagesRouter from './pages';
import * as serviceWorker from './serviceWorker';
import reducer from './store/reducer';

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

const WrapperApp = () => ( 
  <Provider store={store} >
    {/* <App /> */}
    <PagesRouter />
  </Provider>
)

ReactDOM.render(<WrapperApp />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
