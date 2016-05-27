import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/app';
import { Provider } from 'react-redux'
import './reset.css';
import './main.css';
import './blog.css';

import rootReducer from './reducers/noteReducer';
import {createStore} from 'redux';

const store = createStore(rootReducer);

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>
	, document.getElementById('app')
);
	
