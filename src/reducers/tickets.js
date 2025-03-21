const ticketInitialState = []
const ticketsReducer = ( state = ticketInitialState,action) => {
    switch(action.type)
    {
        case 'SET_TICKET':
        return [...action.payload]
        break
        case 'ADD_TICKET':
        return [...state, action.payload]
        break
        case 'REMOVE_TICKET' : 
        return state.filter(ticket => ticket.id != action.payload)
        default:
        return [...state]  
    }
}

export default ticketsReducer