

import { View as MessageDetail } from "../component/messageDetail";
import React, { Component } from "react";
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { View as CommentList } from '../component/commentList';

class MessageDetailPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
        id: props.match.params.id
    }
  }

  render() {
    return (<div>
		  <MessageDetail id={this.state.id} />
	    	  <CommentList id={this.state.id}/>
	    </div>
	    )
  }
}

export default connect()(MessageDetailPage);
