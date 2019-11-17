import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import * as serviceWorker from './serviceWorker'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import reducers from './reducers'

import './style/index.scss'

import App from './components/App'
import Board from './components/Board'
import LocalSetup from './components/LocalSetup'

const createStoreWithMiddleware = applyMiddleware()(createStore)

function main() {
	ReactDOM.render(
		<Provider store={createStoreWithMiddleware(reducers)}>
			<BrowserRouter>
				<Switch>
					<Route exact path="/" component={App}/>
					<Route exact path="/board" component={Board}/>
					<Route exact path="/local" component={LocalSetup}/>
				</Switch>
			</BrowserRouter>
		</Provider>
	, document.getElementById('root'))
}

document.addEventListener('DOMContentLoaded', main)

serviceWorker.unregister();
