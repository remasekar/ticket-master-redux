import React from 'react' 
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
const TicketList = (props) => {
    console.log(props)
    return (
        <div>
            <h1> Listing Tickets - { props.tickets.length} </h1>
            <ul>
                { props.tickets.map(ticket => {
                     return <li key={ticket.id}> <Link to={`/tickets/${ticket.id}`}>{ ticket.name } </Link> </li>
                })}
            </ul>

            <Link to="/tickets/new" className="btn btn-primary"> Add Ticket </Link>
        </div> 
    )
}

// wrapped component - Higher Order Component (HOC) 
const mapStateToProps = (state) => {
    return {
        tickets: state.tickets,
        city: 'bangalore'
    }
}

export default connect(mapStateToProps)(TicketList)