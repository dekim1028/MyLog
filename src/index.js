import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './modules';
import { getCookie, setCookie, initialCookie } from './lib/cookie';
import { setInfo } from './modules/info';

const store = createStore(rootReducer, composeWithDevTools());

function loadInfo() {
	try {
		const info = getCookie('info');
		if (info) {
			store.dispatch(setInfo(JSON.parse(info)));
		} else {
			setCookie('info', JSON.stringify(initialCookie));
			store.dispatch(setInfo(initialCookie));
		}
	} catch (e) {
		console.log(e);
	}
}

loadInfo();

ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</Provider>,
	document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
