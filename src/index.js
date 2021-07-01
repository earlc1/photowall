import React from 'react'
import ReactDOM from 'react-dom'
import Main from './Components/Main'
import './styles/stylesheet.css'
import {BrowserRouter} from 'react-router-dom'  // Keeps track of URL changes so back button works
// Earl Restore import {createStore} from 'redux'
// Earl Restore import rootReducer from './redux/reducer'  // Named different but uses default export postReducer
// Earl Restore import {Provider} from 'react-redux'
// import App from '../archive/App'

/*Only way to change store is through a Reducer*/
/*Earl Restore const store = createStore(rootReducer)*/

/* Earl Restore
ReactDOM.render(<Provider store={store}><BrowserRouter><App/></BrowserRouter></Provider>,
    document.getElementById('root'));*/

ReactDOM.render(<BrowserRouter><Main/></BrowserRouter>,
    document.getElementById('root'));