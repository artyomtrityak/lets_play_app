/*@flow*/
'use strict';

import React, { Component } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from '../reducers';
import App from '../containers/app.container';


let store: Object = createStore(reducers, applyMiddleware(thunk));

export default class RootContainer extends Component {
  render() : ReactElement {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}
