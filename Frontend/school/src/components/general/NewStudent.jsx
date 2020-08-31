import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import SchoolDataService from '../../service/SchoolDataService'

class NewStudent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      date: '',
      firstName: '',
      lastName: '',
      type: '',
      ssn: '',
      email: '',
      password: ''
    }
    this.handleChangeDate = this.handleChangeDate.bind(this)
    this.handleChangeFirstName = this.handleChangeFirstName.bind(this)
    this.handleChangeLastName = this.handleChangeLastName.bind(this)
    this.handleChangeType = this.handleChangeType.bind(this)
    this.handleChangeSSN = this.handleChangeSSN.bind(this)
    this.handleChangeEmail = this.handleChangeEmail.bind(this)
    this.handleChangePassword = this.handleChangePassword.bind(this)

    this.handleSubmit = this.handleSubmit.bind(this)
    // this.handleChange = this.handleChange.bind(this)
    this.validateForm = this.validateForm.bind(this)
  }

  handleChangeDate(event){
    this.setState({
      date: event.target.value
    })
    console.log(this.state.date)
  }

  handleChangeFirstName(event){
    this.setState({
      firstName: event.target.value
      
    })
    console.log(this.state.firstName)
  }

  handleChangeLastName(event){
    this.setState({
      lastName: event.target.value
      
    })
    console.log(this.state.lastName)
  }

  handleChangeType(event){
    this.setState({
      type: event.target.value
      
    })
    console.log(this.state.type)
  }

  handleChangeSSN(event){
    this.setState({
      ssn: event.target.value
      
    })
    console.log(this.state.ssn)
  }

  handleChangeEmail(event){
    this.setState({
      email: event.target.value
      
    })
    console.log(this.state.email)
  }

  handleChangePassword(event){
    this.setState({
      password: event.target.value
      
    })
    console.log(this.state.password)
  }

  // handleChange(event) {
  //   this.setState({[event.target.name]: event.target.value})
  //   this.validateForm()
  // }

  handleSubmit() {
    let school = {
      id: -1,
      date: this.state.date,
      firstName: this.state.firstName,
      lastName: this.state.lastName ,
      type: this.state.type ,
      ssn: this.state.ssn ,
      email: this.state.email ,
      password: this.state.password
    }
    SchoolDataService.addSchool(school).then(this.props.history.push(`/`))
  }

  validateForm() {
    if(this.state.date.length === 0) this.setState({isValid: true})
    else if(this.state.firstName.length === 0) this.setState({isValid: true})
    else if(this.state.lastName.length === 0) this.setState({isValid: true})
    else if(this.state.type.length === 0) this.setState({isValid: true})
    else if(this.state.ssn.length === 0) this.setState({isValid: true})
    else if(this.state.email.length === 0) this.setState({isValid: true})
    else if(this.state.password.length === 0) this.setState({isValid: true})
    else this.setState({isValid: false})
  
  }

    render() {
        return(
            <div>
                <div className="jumbotron" style={{backgroundColor: "gray"}}>
                <h3 style={{textAlign: "center"}}>New Student or Teacher</h3>
                </div>
                <div className="container">
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <label>Date:</label>
                            <input className="form-control" type="text" placeholder="date" value={this.state.date} onChange={this.handleChangeDate}></input>
                        </div>
                        <div>
                            <label>First Name:</label>
                            <input className="form-control" type="text" placeholder="First Name" value={this.state.firstName} onChange={this.handleChangeFirstName}></input>
                        </div>
                        <div>
                            <label>Last Name:</label>
                            <input className="form-control" type="text" placeholder="Last Name" value={this.state.lastName} onChange={this.handleChangeLastName}></input>
                        </div>
                        <div>
                            <label for="Student">Student</label>
                            <input className="form-control" type="radio" id="Student" placeholder="Student" value={this.state.type} onChange={this.handleChangeType}></input>
                            <br></br>
                            <label for="Teacher">Teacher</label>
                            <input className="form-control" type="radio" id="Teacher" placeholder="Student" value={this.state.type} onChange={this.handleChangeType}></input>
                            <br></br>
                        </div>
                        <div>
                            <label>SSN:</label>
                            <input className="form-control" type="text" placeholder="SSN" value={this.state.ssn} onChange={this.handleChangeSSN}></input>
                        </div>
                        <div>
                            <label>Email:</label>
                            <input className="form-control" type="text" placeholder="email" value={this.state.email} onChange={this.handleChangeEmail}></input>
                        </div>
                        <div>
                            <label>Password:</label>
                            <input className="form-control" type="password" placeholder="password" value={this.state.password} onChange={this.handleChangePassword}></input>
                        </div>
                        <br/><br/>
                      <button className="btn btn-success" type="submit" disabled={this.state.isValid}>Submit</button>&ensp;
                      <button className="btn btn-warning" name="back" onClick={() =>this.props.history.push("/")}>Back</button><br/><br/>
                    </form>
                </div>
            </div>
        )
    }
}

export default withRouter(NewStudent)
