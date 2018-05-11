import React, { Component } from "react";
import $ from "jquery";
import { musicList } from '../../share/config/globalConfig';
import MusicPlugin from '../../share/tool/musicPlugin';
import "./style.less";

export default class MusicPlayer extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    new MusicPlugin();
    var t = {
      playlist: musicList
    };
    $(".jAudio--player").jAudio(t);
  }

  render() {
    return (
      <section className="music-container">
        <div className="jAudio--player">
          <audio />
          <div className="jAudio--ui">
            <div className="jAudio--thumb" />
            <div className="jAudio--status-bar">
              <div className="jAudio--details" />
              <div className="jAudio--volume-bar" />
              <div className="jAudio--progress-bar">
                <div className="jAudio--progress-bar-wrapper">
                  <div className="jAudio--progress-bar-played">
                    <span className="jAudio--progress-bar-pointer" />
                  </div>
                </div>
              </div>
              <div className="jAudio--time">
                <span className="jAudio--time-elapsed">00:00</span>
                <span className="jAudio--time-total">00:00</span>
              </div>
            </div>
          </div>

          <div className="jAudio--playlist" />

          <div className="jAudio--controls">
            <ul>
              <li>
                <button className="btn" data-action="prev" id="btn-prev">
                  <span />
                </button>
              </li>
              <li>
                <button className="btn" data-action="play" id="btn-play">
                  <span />
                </button>
              </li>
              <li>
                <button className="btn" data-action="next" id="btn-next">
                  <span />
                </button>
              </li>
            </ul>
          </div>
        </div>
      </section>
    );
  }
}
