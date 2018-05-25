import React, { Component } from "react";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";
import DatePicker from 'material-ui/DatePicker';
import TimePicker from 'material-ui/TimePicker';


const styles = {
  container: {
    width: "100%",
    height: "100%",
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'column'
  },
  btns: {
    display: 'flex',
    justifyContent: 'space-evenly',
    width: '100%'
  }
};

export class CreateMessageComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
        title: '',
        content: '',
        date: new Date(),
        time: new Date()
    }
  }

  createMessage = () => {
    if(!this.props.userInfor.userName) {
      return this.props.goLogin();
    }
    let message = {
        id: Math.random(),
        title: this.state.title,
        name: this.props.userInfor.userName,
        content: this.state.content,
        src: this.props.userInfor.src,
        date: this.state.date.toLocaleDateString() + ' ' + this.state.time.toLocaleTimeString(),
        love: 1,
        comment: 1
    }
    this.props.createMessage(message);
    this.props.goHome();
  }

  onTitleChange = (e) => {
    this.setState({
        title: e.target.value
    })
  }

  onContentChange = (e) => {
      this.setState({
          content: e.target.value
      })
  }

  onDateChange = (e, date) => {
    this.setState({
      date,
    })
  }

  onTimeChange = (e, time) => {
    this.setState({
      time,
    })
  }

  render() {
    return (
      <div style={styles.container}>
        <TextField hintText="" floatingLabelText="Title" value={this.state.title} onChange={this.onTitleChange}/>
        <br />
        <TextField
          hintText=""
          floatingLabelText="Content"
          multiLine={true}
          rows={1}
          value={this.state.content}
          onChange={this.onContentChange}
        />
        <br />
        <DatePicker hintText="Create Date" value={this.state.date} onChange={this.onDateChange}/>
        <br />
        <TimePicker
          hintText="Create Time"
          autoOk={true}
          value={this.state.time}
          onChange={this.onTimeChange}
        />
        <br />
        <div style={styles.btns}>
        <RaisedButton label="Back" primary={false} onClick={this.props.goHome}/>
        <RaisedButton label="Create" primary={true} onClick={this.createMessage} />
        </div>
      </div>
    );
  }
}
