import React, { Component } from "react";
import { connect } from 'react-redux';
import { Signin } from "../../components";
import {BrowserRouter as Router,
    Route,
    Link, withRouter} from 'react-router-dom';
import {SignUp} from "../../components";
import AuthMiddleware from "../../store/middlewares/authMiddleware";
import authReducer from "../../store/reducers/authReducer";

class MainForm extends Component {
    componentDidMount(){
        this.props.signup({a: "", b: ""})
    }
  render() {
    return (
        <Router>
            <div>
            <Route exact path="/"  component={Signin} />
            <Route path="/signup" render={()=><SignUp />} />
            </div>
        </Router>
    )
  }
}

function mapStateToProps(state) {
    // console.log(state)
    return {
        auth: state.authReducer
    }
}

function mapDispatchToProps(dispatch) {
    return {
        signup: (user) => {
            return dispatch(AuthMiddleware.signup(user))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainForm);
