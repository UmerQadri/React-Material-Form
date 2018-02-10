import React, { Component } from "react";
import { Signin } from "../../components";
import {BrowserRouter as Router,
    Route,
    Link, withRouter} from 'react-router-dom';
import {SignUp} from "../../components";

class MainForm extends Component {
  render() {
    return (
        <Router>
            <div>
            <Route exact path="/"  component={Signin} />
            <Route path="/signup" component={SignUp} />
            </div>
        </Router>
    )
  }
}

export default MainForm;
