import React from 'react'
import TicketRow from './Ticketrow'

const TicketTable = ( props ) => {
    console.log(props)
    return (
        <div>
            <h3> {props.ticketStatus} Tickets</h3>
            < table border = "1" >
        <thead>
          <tr>
            <th> Code </th>
            <th> Name </th>
            <th> Department </th>
            <th> Priority </th>
            <th> Message </th>
            <th> Status </th>
            <th> Remove </th>
          </tr>
          </thead>
          <tbody>
              {
                 <TicketRow tickets={props.tickets} handleChecked= {props.handleChecked} handleRemove = {props.handleRemove}/>
              }
            </tbody></table>
        </div>
    )
}

export default TicketTable