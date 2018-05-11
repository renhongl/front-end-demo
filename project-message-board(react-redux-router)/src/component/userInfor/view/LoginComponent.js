import React, { Component } from "react";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";
import DatePicker from "material-ui/DatePicker";
import TimePicker from "material-ui/TimePicker";

const styles = {
  container: {
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "column"
  },
  btns: {
    display: "flex",
    justifyContent: "space-evenly",
    width: "100%"
  }
};

export class LoginComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      password: "",
    };
  }

  onLogin = () => {
    let postData = {
      userName: this.state.userName,
      password: this.state.password
    };
    this.props.login(postData);
  };

  onUserNameChange = e => {
    this.setState({
        userName: e.target.value
    });
  };

  onPasswordChange = e => {
    this.setState({
      password: e.target.value
    });
  };

  render() {
    return (
      <div style={styles.container}>
        <TextField
          hintText=""
          floatingLabelText="User Name"
          value={this.state.userName}
          onChange={this.onUserNameChange}
        />
        <br />
        <TextField
          type="password"
          floatingLabelText="Password"
          value={this.state.password}
          onChange={this.onPasswordChange}
        />
        <br />
        <div style={styles.btns}>
          <RaisedButton
            label="Back"
            primary={false}
            onClick={this.props.goHome}
          />
          <RaisedButton
            label="Create"
            primary={true}
            onClick={this.onLogin}
          />
        </div>
      </div>
    );
  }
}
