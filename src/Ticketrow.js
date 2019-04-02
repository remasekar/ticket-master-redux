import React from 'react'

const TicketRow = ( props ) => {
    return(
    props.tickets.map( ticket => {
        return (
            <tr key={ticket.ticket_code}>
                    <td> { ticket.ticket_code }</td>
                    <td> { ticket.name }</td>
                    <td> { ticket.department }</td>
                    <td> { ticket.priority } </td>
                    <td> { ticket.message } </td>
                    <td> <input type="checkbox" checked = {ticket.status === 'open' ? false : true} onChange = {()=>
                    {
                      props.handleChecked(ticket)
                    } } ></input> </td>
                    <td> <button onClick = { ()=> {
                      const confirmDelete = window.confirm("sure?")
                      if(confirmDelete){
                      props.handleRemove(ticket)}
                    }}> remove </button></td>
                    </tr>
    )
}
    )

    )
}



export default TicketRow