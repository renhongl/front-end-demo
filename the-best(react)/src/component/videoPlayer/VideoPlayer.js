import React, { Component } from "react";
import $ from "jquery";
import VideoPlugin from "../../share/tool/videoPlugin";
import { videoList } from "../../share/config/globalConfig";
import "./style.less";

export default class VideoPlayer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0
    };
  }

  componentDidMount() {
    new VideoPlugin();
    $("article.video").siPlayer(false);
  }

  shouldComponentUpdate(nextProp, nextState) {
    if (nextProp.options.show !== this.props.options.show || nextState.index !== this.state.index) {
      return true;
    }
    return false;
  }

  componentDidUpdate() {
    $("article.video").siPlayer(false);
  }

  changeVideo = (e) => {
    let index = Number(e.target.getAttribute('index'));
    this.setState({
      index: index
    });
  }

  render() {
    const list = videoList.map((v, k) => (
      <div key={k} index={k} className={this.state.index === k ? 'item selected' : 'item'} onClick={this.changeVideo}>{v.title}</div>
    ));
    return (
      <div className="video-container">
        <div className="video-list">{list}</div>
        <div className="video-player">
          <article className="video">
            <video src={`./assets/video/${videoList[this.state.index].src}`} type="video/mp4">
            </video>
          </article>
        </div>
      </div>
    );
  }
}
