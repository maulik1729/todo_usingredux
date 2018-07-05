import React from 'react';
import ReactDOM from 'react-dom';
import './styles/normalize.css';
import './styles/style.css';
import App from './components/App.js';
import {createStore} from 'redux';
import reducer from './reducer/index.js';
import { Provider } from 'react-redux'

const store=createStore(reducer);

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>, root);

store.subscribe(() => {
    console.log(store.getState());
})