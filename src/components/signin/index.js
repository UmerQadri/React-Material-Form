import React, { Component } from "react";
import RaisedButton from "material-ui/RaisedButton";
import { TextValidator, ValidatorForm } from "react-material-ui-form-validator";

const style = {
  width: "30%",
  marginTop: "10%",
  marginLeft: "auto",
  marginRight: "auto"
}

export default class Sigin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit() {
    // your submit logic
  }

  render() {
    return (
      <ValidatorForm
        ref="form"
        onSubmit={this.handleSubmit}
        onError={errors => console.log(errors)}
        style={style}
      >
        <TextValidator
          floatingLabelText="Email"
          onChange={this.handleChange}
          name="email"
          value={this.state.email}
          validators={["required", "isEmail"]}
          errorMessages={["this field is required", "email is not valid"]}
          style={{width: "100%"}}
        />
        <br />
        <TextValidator
          floatingLabelText="Password"
          onChange={this.handleChange}
          name="password"
          type="password"
          value={this.state.password}
          validators={["required"]}
          errorMessages={["this field is required", "email is not valid"]}
          style={{width: "100%"}}
        />
        <br />
        <RaisedButton label="Login" primary={true} />
      </ValidatorForm>
    );
  }
}
