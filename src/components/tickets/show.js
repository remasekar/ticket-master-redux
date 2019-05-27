import React from 'react' 
import { connect } from 'react-redux'

import { StartRemoveTicket } from '../../actions/tickets'

const TicketShow = (props) => {
    const {  name, message, priority, department } = props.ticket 

    const handleRemove = () => {
        const confirm = window.confirm("Are you sure? ") 
        if(confirm) {
            // props.dispatch(StartRemoveTicket(id))
           props.dispatch(removeTicket(id))
           props.history.push('/tickets')
        }
    }

    return (
        <div>
            <h2> { id } </h2> 
            <p> { name }  { message } { priority } { department } </p> 


            <button className="btn btn-danger" onClick={handleRemove}>
                remove 
            </button>
        </div> 
    )
}

const mapStateToProps = (state, props) => { 
    const id = props.match.params.id 
    return {
        ticket: state.tickets.find(ticket => ticket.id === id)
    }
}

export default connect(mapStateToProps)(TicketShow)