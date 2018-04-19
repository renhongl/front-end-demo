import React from "react";
import { Tabs, Tab } from "material-ui/Tabs";
import SwipeableViews from "react-swipeable-views";
import { View as MessageList } from "../component/messageList";
import { View as CreateMessage } from "../component/createMessage";
import { Login } from '../component/userInfor';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { View as Dashboard } from '../component/dashboard';

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
  userLogo: {
    borderRadius: '50% !important'
  }
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
    return (
      <div style={styles.tabsContainer}>
        <Tabs
          onChange={this.handleChange}
          value={this.state.slideIndex}
          style={styles.tabs}
        >
          <Tab icon={<i className="material-icons">home</i>} value={0} />
          <Tab icon={<i className="material-icons">add</i>} value={1} />
          <Tab icon={this.props.userInfor.src ? <img src={this.props.userInfor.src} width='30' height='30'style={styles.userLogo}/> : <i className="material-icons">account_circle</i>} value={2} />
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
            {this.props.userInfor.userName ? <Dashboard userName={this.props.userInfor.userName}/> : <Login />}
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
