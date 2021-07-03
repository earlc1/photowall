import React from 'react'
import ReactDOM from 'react-dom'
import './styles/stylesheet.css'
import {BrowserRouter} from 'react-router-dom'  // Keeps track of URL changes so back button works
import {createStore} from 'redux'
import rootReducer from './redux/reducer'  // Named different but uses default export postReducer
import {Provider} from 'react-redux'
import App from './Components/App'

/*Create store and pass it a Reducer*/
const store = createStore(rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

ReactDOM.render(<Provider store={store}><BrowserRouter><App/></BrowserRouter></Provider>,
    document.getElementById('root'));