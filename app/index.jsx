import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/app';
import { Provider } from 'react-redux'
import './main.css';
import './blog.scss';
import rootReducer from './reducers/noteReducer';
import {createStore} from 'redux';

const store = createStore(rootReducer);

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>
	, document.getElementById('app')
);
	
