import React, { Component } from "react";
import PropTypes from "prop-types";
import { lang } from "../../share/config/lang";
import { Switch, InputNumber, Icon } from "antd";
import { TwitterPicker } from "react-color";

export default class BackgroundColor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showList: false,
      displayBgColorPicker: false,
      displayFontColorPicker: false,
    };
  }

  changeBgColor = color => {
    this.props.changeBgColor(color.hex);
  };

  changeFontColor = color => {
      this.props.changeFontColor(color.hex);
  }

  toggleBgColorPicker = () => {
    this.setState({ displayBgColorPicker: !this.state.displayBgColorPicker });
  };

  toggleFontColorPicker = () => {
    this.setState({ displayFontColorPicker: !this.state.displayFontColorPicker });
  };

  onBgColorPickerClose = () => {
    this.setState({ displayBgColorPicker: false });
  };

  onFontColorPickerClose = () => {
    this.setState({ displayFontColorPicker: false });
  };


  toggleList = () => {
    this.setState({
      showList: !this.state.showList
    });
  };

  render() {
    const {
      config,
      changeBgColor,
      changeBgOpacity,
      changeFontColor,
      toggleBgPicture
    } = this.props;
    const {
      fontColor,
      opacity,
      language,
      backgroundColor,
      showBackgroundPicture
    } = config;
    const style = {
      color: fontColor
    };
    const btnStye = {
      backgroundColor: `rgba(${backgroundColor},${opacity})`
    };
    const styles = {
      color: {
        width: "36px",
        height: "14px",
        borderRadius: "2px",
        background: `rgba(${backgroundColor}, ${opacity})`
      },
      swatch: {
        padding: "5px",
        background: "#fff",
        borderRadius: "1px",
        boxShadow: "0 0 0 1px rgba(0,0,0,.1)",
        display: "inline-block",
        marginTop: '5px',
        float: 'left',
        cursor: "pointer"
      },
      popover: {
        position: "absolute",
        zIndex: "2",
        bottom: '27px'
      },
      cover: {
        position: "fixed",
        top: "0px",
        right: "0px",
        bottom: "27px",
        left: "0px"
      }
    };
    const fontStyles = {...styles, 
      color: {
        width: "36px",
        height: "14px",
        borderRadius: "2px",
        background: fontColor
      },
      popover: {
        position: "absolute",
        zIndex: "2",
        bottom: '-10px'
      },
      cover: {
        position: "fixed",
        top: "0px",
        right: "0px",
        bottom: "-10px",
        left: "0px"
      }
    }
      const arrowStyle = {
        transform: this.state.showList ? 'rotate(90deg)' : 'rotate(0deg)',
        transition: 'all .5s ease-in-out',
        marginRight: '8px'
    }
    return (
      <section className="background-color common-setting">
        <h4 onClick={this.toggleList} style={style}>
        <Icon type="right" style={arrowStyle}/>{lang[language]["BACKGROUND-COLOR-SETTING"]}
        </h4>
        <ul className={this.state.showList ? "show" : "hide"}>
          <li>
            <span className="key">
              {lang[language]["SHOW-BACKGROUND-IMAGE"]}:
            </span>
            <Switch
              onChange={toggleBgPicture}
              style={showBackgroundPicture ? btnStye : {}}
              defaultChecked={showBackgroundPicture ? true : false}
            />
          </li>
          <li>
            <span className="key">{lang[language]["BACKGROUND-COLOR"]}: </span>
            <div style={styles.swatch} onClick={this.toggleBgColorPicker}>
              <div style={styles.color} />
            </div>
            {this.state.displayBgColorPicker ? (
              <div style={styles.popover}>
                <div style={styles.cover} onClick={this.onBgColorPickerClose} />
                <TwitterPicker onChange={this.changeBgColor} />
              </div>
            ) : null}
          </li>
          <li>
            <span className="key">
              {lang[language]["BACKGROUND-FONT-COLOR"]}:{" "}
            </span>
            <div style={fontStyles.swatch} onClick={this.toggleFontColorPicker}>
              <div style={fontStyles.color} />
            </div>
            {this.state.displayFontColorPicker ? (
              <div style={fontStyles.popover}>
                <div style={fontStyles.cover} onClick={this.onFontColorPickerClose} />
                <TwitterPicker onChange={this.changeFontColor} />
              </div>
            ) : null}
          </li>
          <li>
            <span className="key">
              {lang[language]["BACKGROUND-OPACITY"]}:{" "}
            </span>
            <InputNumber className="opacity" min={0} max={10} defaultValue={opacity * 10} onChange={changeBgOpacity} />
          </li>
        </ul>
      </section>
    );
  }
}

BackgroundColor.propTypes = {};

BackgroundColor.defaultProps = {};
