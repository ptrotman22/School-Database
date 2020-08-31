import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Login from './Login'
import WelcomeComponent from './WelcomeComponent'
import NewStudent from './NewStudent'
import SchoolDatabase from './SchoolDatabase'


class Router extends Component {
  render() {
    return(
      <div>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Login}></Route>
            <Route path="/SchoolDatabase" component={SchoolDatabase}></Route>
            <Route path="/NewStudent" component={NewStudent}></Route>
            <Route path="/logout" component={WelcomeComponent}></Route>
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}

export default Router;
