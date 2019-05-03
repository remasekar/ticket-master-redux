import { createStore , combineReducers } from 'redux'
import ticketsReducers from '../reducers/tickets'

const configureStore =  () =>
{
    const store = createStore((combineReducers({
        tickets: ticketsReducers
    })))
    return store
}

export default configureStore