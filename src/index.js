import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
import App from './App';
import  'bootstrap/dist/css/bootstrap.min.css';

import { Provider } from 'react-redux'
import configureStore from './store/configureStore';
import { StartSetTicket } from './actions/tickets'



const store = configureStore()
store.dispatch(StartSetTicket())


store.subscribe ( () => {
    console.log(store.getState())
})

const app = (<Provider store = { store } >
    <App />
</Provider>)

// store.dispatch(addTicket({id:1, name: 'ravi',message:'net is slow',priority: "medium"}))


ReactDOM.render(app, document.getElementById('root'));


