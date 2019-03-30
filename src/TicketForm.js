import React from 'react'
import axios from 'axios'


class TicketForm extends React.Component {
    constructor()
    {
        super()
        this.state = {
            name: '',
            department: '',
            priority: '',
            message: ''
        }
    }

    handleNameChange = (e) => 
    {
      const name = e.target.value
      this.setState(() => ({name}))
    }

    handleDepartment = (e) =>
    {
        const department = e.target.value
        this.setState(() => ({department}))
    }

    handlePriority = (e) =>
    {
        const priority = e.target.value
        this.setState(() => ({priority}))
    }

    handleMessage = (e) =>
    {
        const message = e.target.value
        this.setState(() => ({message}))
    }

    handlesubmit = (e) =>
    {
        e.preventDefault()
        const formData = {
            name: this.state.name,
            department: this.state.department,
            priority: this.state.priority,
            message: this.state.message
        }
        //apipost
        axios.post('http://dct-api-data.herokuapp.com/tickets?api_key=04d4fe74303871ab', formData)
        .then(response => {
            console.log(response.data)
        })
        .catch(err => {
            console.log(err)
        })
    }

    render()
    {
        return  (
        <div>
            <h2> Add Ticket</h2>
            <form onSubmit = { this.handlesubmit }>
                <label>
                    Name < br />
                    <input type ="text" value={this.state.name} onChange={ this.handleNameChange} />
                </label> <br/>
                <label>
                    Department <br />
                    <select value ={this.state.department} onChange = { this.handleDepartment} >
                       <option value =""> Select </option>
                       <option value="technical">Technical </option>
                       <option value="sales"> Sales </option>
                       <option value="hr"> Human Resource </option>
                    </select>
                </label> <br/>
                <label>
                    Priority <br/>
                    <select value={ this.state.priority} onChange = { this.handlePriority }>
                      <option value =""> Select </option>
                      <option value="high"> High </option>
                      <option value ="medium"> Medium </option>
                      <option value="low"> Low </option>
                    </select>
                </label> <br/>
                <label>
                    Message <br/>
                    <textarea value = { this.state.message } onChange = { this.handleMessage }>
                    </textarea>
                </label> <br/>
                <input type="submit" value="Add Ticket" />
            </form>

        </div>
        )
         
    }
}

export default TicketForm