import React from "react";
import { Tabs, Tab } from "material-ui/Tabs";
import SwipeableViews from "react-swipeable-views";
import { View as MessageList } from "../component/messageList";
import { View as CreateMessage } from "../component/createMessage";
import { Login } from '../component/userInfor';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { View as Dashboard } from '../component/dashboard';
import Avatar from 'material-ui/Avatar';

const styles = {
  tabsContainer: {
    height: "100%"
  },
  tabs: {
    height: 48
  },
  views: {
    height: "calc(100% - 48px)"
  },
  slide: {
    padding: 0,
    overflow: "hidden",
    height: "100%"
  },
};

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      slideIndex: 0
    };
  }

  handleChange = value => {
    this.setState({
      slideIndex: value
    });
  };

  goHome = () => {
    this.setState({
      slideIndex: 0
    });
  }

  goLogin = () => {
    this.setState({
      slideIndex: 2
    });
  }

  render() {
    const {src, userName } = this.props.userInfor;
    return (
      <div style={styles.tabsContainer}>
        <Tabs
          onChange={this.handleChange}
          value={this.state.slideIndex}
          style={styles.tabs}
        >
          <Tab icon={<i className="material-icons">home</i>} value={0} />
          <Tab icon={<i className="material-icons">create</i>} value={1} />
          <Tab icon={src ? <Avatar src={src} size={30}/> : <i className="material-icons">account_circle</i>} value={2} />
        </Tabs>
        <SwipeableViews
          index={this.state.slideIndex}
          onChangeIndex={this.handleChange}
          style={styles.views}
        >
          <div style={styles.slide}>
            <MessageList />
          </div>
          <div style={styles.slide}>
            <CreateMessage goHome={this.goHome} goLogin={this.goLogin}/>
          </div>
          <div style={styles.slide}>
            {userName ? <Dashboard userName={userName}/> : <Login />}
          </div>
        </SwipeableViews>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userInfor: state.userInfor
  }
}

export default connect(mapStateToProps)(HomePage);



