import axios from 'axios'

export const addTicket = (ticket) => {
    return {
        type: 'ADD_TICKET',
        payload : ticket
    }
 }

 export const setTicket = (tickets) => {
     return {
         type: 'SET_TICKET',
         payload: tickets
     }
 }

 export const StartSetTicket =() => {
     return (dispatch) => {
         axios.get('http://dct-api-data.herokuapp.com/tickets?api_key=04d4fe74303871ab')
         .then(response =>
            {
                dispatch(setTicket(response.data))
            })
     }
 }
 
export const StartAddticket = (ticket) => {
    return (dispatch) => {
        axios.post('http://dct-api-data.herokuapp.com/tickets?api_key=04d4fe74303871ab',ticket)
        .then(response =>
        {
            const ticket = response.data
            dispatch(addTicket(ticket))
        })
    }
}

 // removeTicket 
export const removeTicket = (id) => {
    return {
        type: 'REMOVE_TICKET',
        payload: id 
    }
}

export const StartRemoveTicket = (ticket) => {
    return (dispatch) => {
     axios.delete(`http://dct-api-data.herokuapp.com/tickets/${ticket.ticket_code}?api_key=04d4fe74303871ab`)
     .then(()=>
     {
         dispatch(removeTicket(ticket.id))
     })
    }
}