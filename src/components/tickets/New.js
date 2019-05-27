import React from 'react' 
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import TicketForm from './Form'

import { StartAddticket } from '../../actions/tickets'

const TicketNew = (props) => {

    const handleSubmit = (formData) => {
        console.log('new', formData) 
        props.dispatch(StartAddticket(formData))
        // props.dispatch(addTicket(formData))
        props.history.push('/tickets')
    }
    console.log(props.previousTicket,"tkt")
    return (
        <div className="row">
            <div className="col-md-8">
                <h2> Add Ticket </h2>
                <TicketForm handleSubmit={handleSubmit} />
            </div>

            <div className="col-md-4">
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Last Ticket</h5>
                        {props.previousTicket ? (<React.Fragment><p className="card-text"> { props.previousTicket.name } </p>
                        <Link to ="/tickets/:id">Show</Link></React.Fragment>): (<React.Fragment>
                            this is first tiket
                        </React.Fragment>)}
                    </div>
                </div>
            </div>
            
        </div> 
    )
}

const mapStateToProps = (state) => {
    return {
        previousTicket: state.tickets[state.tickets.length - 1]
    }
}   

export default connect(mapStateToProps)(TicketNew)
