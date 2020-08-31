import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import SchoolDataService from '../../service/SchoolDataService'

class SchoolDatabase extends Component {
  constructor(props) {
    super(props)
    this.state = {
      school: [],
      message: null,
      isUser: false
    }
    this.refreshSchoolRegistry = this.refreshSchoolRegistry.bind(this)
    this.deleteSchoolClicked = this.deleteSchoolClicked.bind(this)
    this.addSchoolClicked = this.addSchoolClicked.bind(this)
    this.updateSchoolClicked = this.updateSchoolClicked.bind(this)
    this.checkUser= this.checkUser.bind(this)
  }

  componentDidMount() {
    this.refreshSchoolRegistry();
  }

  refreshSchoolRegistry() {
    SchoolDataService.retrieveAllSchool().then(response => {this.setState({school: response.data})})
  }

  deleteSchoolClicked(id) {
    SchoolDataService.deleteSchool(id).then(response => {
      this.setState({message: `Deleted Student or Teacher: ${id}`})
      alert(this.state.message)
      this.refreshSchoolRegistry()
    })
  }

  updateSchoolClicked(id) {
    console.log('Update Student or Teacher Clicked')
    this.props.history.push(`/updateSchool/${id}`)
}

  addSchoolClicked() {
    this.props.history.push("/NewStudent/",{user: this.state.user})
  }

  checkUser(email) {
    return this.state.user === email
  }

  render() {
    return(
      <div className="container">
        <nav className="Navbar">
            <img src="public/school.jpg" alt="School University"></img>
            <button block name="school" onClick={() =>this.props.history.push("/")} >
              Study flashcards
            </button>
            <button className="btn btn-warning" onClick={() =>this.props.history.push("/")}>Logout</button>
        </nav>

        <h1 style={{textAlign:"center"}}>School Database</h1><br></br>
        <div className="jumbotron" style={{backgroundColor: "gray", color: "white"}}>
          <table className="table">
            <thead>
              <tr style={{textAlign: "center", color: "black"}}>
                <th>Id</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Type</th>
                <th>SSN</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
            {
              this.state.school.map(school =>
                <tr style={{textAlign: "center"}} key={school.id}>
                  <td>{school.id}</td>
                  <td>{school.firstName}</td>
                  <td>{school.lastName}</td>
                  <td>{school.type}</td>
                  <td>{school.ssn}</td>
                  <td>{school.email}</td>
                  <td><button className="btn btn-warning" onClick={() => this.deleteSchoolClicked(school.id)}>Delete</button></td>
                  <td><button className="btn btn-success" onClick={() => this.updateSchoolClicked(school.id)}>Update</button></td>
                </tr>
              )
            }
            </tbody>
          </table>
          <div className="row"style={{width: "100%"}}>
            <br/>
            <div style={{width:"50%"}}>
              <button className="btn btn-success" onClick={this.addSchoolClicked}>Add Student or Teacher</button>
            </div>
            <div style={{float: "right", width:"50%"}}>
              <button className="btn btn-warning" onClick={() =>this.props.history.push("/")}>Logout</button>
              <button className="btn btn-warning" name="back" onClick={() =>this.props.history.push("/")}>Back</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(SchoolDatabase)
