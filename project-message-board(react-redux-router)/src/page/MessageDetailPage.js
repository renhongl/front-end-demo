

import { View as MessageDetail } from "../component/messageDetail";
import React, { Component } from "react";
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { View as CommentList } from '../component/commentList';

const styles = {
    container: {
        height: '100%',
        width: '100%',
        overflow: 'auto'
    }
}

class MessageDetailPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
        id: props.match.params.id
    }
  }

  render() {
    return (<div style={styles.container}>
		  <MessageDetail id={this.state.id} />
	    	  <CommentList id={this.state.id}/>
	    </div>
	    )
  }
}

export default connect()(MessageDetailPage);
