

import React, { Component } from "react";
import { connect } from 'react-redux';

const styles = {
    container: {
        height: '100%',
        width: '100%',
        overflow: 'auto'
    }
}

class MomentPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (<div style={styles.container}>
		  moment
	    </div>
	    )
  }
}

export default connect()(MomentPage);
