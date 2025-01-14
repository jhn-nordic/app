import * as React from 'react'
import * as ReactDOM from 'react-dom'
import './bootstrap.scss'
import './typography.scss'
import './mobile.scss'
import './desktop.scss'
import '../node_modules/intro.js/introjs.css'
import App from './App'
import * as serviceWorker from './serviceWorker'

ReactDOM.render(<App />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
