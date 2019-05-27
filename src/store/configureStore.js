import { createStore , combineReducers,applyMiddleware } from 'redux'
import ticketsReducers from '../reducers/tickets'
import thunk from 'redux-thunk'

const configureStore =  () =>
{
    const store = createStore((combineReducers({
        tickets: ticketsReducers
    })),applyMiddleware(thunk))
    return store
}

export default configureStore