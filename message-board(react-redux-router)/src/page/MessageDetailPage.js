

import { View as MessageDetail } from "../component/messageDetail";
import React, { Component } from "react";
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';


class MessageDetailPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
        id: props.match.params.id
    }
  }

  render() {
    return <MessageDetail id={this.state.id} />;
  }
}

export default connect()(MessageDetailPage);