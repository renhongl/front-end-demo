import React, { Component } from "react";
import $ from "jquery";
import "./style.less";

export default class MusicPlayer extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    (function() {
      $(".list-btn").click(function() {
        $(this)
          .parent()
          .toggleClass("active");
        return $(".lists").toggleClass("active");
      });

      $(".action-button")
        .find("a")
        .click(function() {
          if (
            $(this).hasClass("random") ||
            $(this).hasClass("play-pause") ||
            $(this).hasClass("repeat")
          ) {
            return $(this).toggleClass("active");
          }
        });
    }.call(this));

    //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiPGFub255bW91cz4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBQSxDQUFBLENBQUUsV0FBRixDQUFjLENBQUMsS0FBZixDQUFxQixRQUFBLENBQUEsQ0FBQTtJQUNwQixDQUFBLENBQUUsSUFBRixDQUFPLENBQUMsTUFBUixDQUFBLENBQWdCLENBQUMsV0FBakIsQ0FBNkIsUUFBN0I7V0FDQSxDQUFBLENBQUUsUUFBRixDQUFXLENBQUMsV0FBWixDQUF3QixRQUF4QjtFQUZvQixDQUFyQjs7RUFHQSxDQUFBLENBQUUsZ0JBQUYsQ0FBbUIsQ0FBQyxJQUFwQixDQUF5QixHQUF6QixDQUE2QixDQUFDLEtBQTlCLENBQW9DLFFBQUEsQ0FBQSxDQUFBO0lBQ25DLElBQUcsQ0FBQSxDQUFFLElBQUYsQ0FBTyxDQUFDLFFBQVIsQ0FBaUIsUUFBakIsQ0FBQSxJQUE4QixDQUFBLENBQUUsSUFBRixDQUFPLENBQUMsUUFBUixDQUFpQixZQUFqQixDQUE5QixJQUFnRSxDQUFBLENBQUUsSUFBRixDQUFPLENBQUMsUUFBUixDQUFpQixRQUFqQixDQUFuRTthQUNDLENBQUEsQ0FBRSxJQUFGLENBQU8sQ0FBQyxXQUFSLENBQW9CLFFBQXBCLEVBREQ7O0VBRG1DLENBQXBDO0FBSEEiLCJzb3VyY2VzQ29udGVudCI6WyIkKFwiLmxpc3QtYnRuXCIpLmNsaWNrIC0+XG5cdCQodGhpcykucGFyZW50KCkudG9nZ2xlQ2xhc3MgXCJhY3RpdmVcIlxuXHQkKFwiLmxpc3RzXCIpLnRvZ2dsZUNsYXNzIFwiYWN0aXZlXCJcbiQoXCIuYWN0aW9uLWJ1dHRvblwiKS5maW5kKCdhJykuY2xpY2sgLT5cblx0aWYgJCh0aGlzKS5oYXNDbGFzcyhcInJhbmRvbVwiKSB8fCAkKHRoaXMpLmhhc0NsYXNzKFwicGxheS1wYXVzZVwiKSB8fCAkKHRoaXMpLmhhc0NsYXNzKFwicmVwZWF0XCIpXG5cdFx0JCh0aGlzKS50b2dnbGVDbGFzcyBcImFjdGl2ZVwiIl19
    //# sourceURL=coffeescript
  }

  render() {
    return (
      <section className="music-container">
          <div className="music-box">
            <div className="album">
              <div className="photo" />
              <div className="infos">
                <div className="song">
                  <span>Flamingo</span>
                  <small>Oliver Heldens</small>
                </div>
              </div>
            </div>
            <div className="dashboard">
              <div className="list">
                <div className="list-btn">
                  <span />
                </div>
              </div>
              <div className="player">
                <div className="time">
                  <small className="current">0:56</small> /{" "}
                  <small className="duration">3:04</small>
                </div>
                <div className="time-rail">
                  <div className="thumb" />
                  <div className="track" />
                </div>
              </div>
              <div className="action-button">
                <a className="random">
                  <i className="fa fa-random" />
                </a>
                <a className="prev">
                  <i className="fa fa-step-backward" />
                </a>
                <a className="play-pause">
                  <i className="fa fa-pause" />
                </a>
                <a className="stop">
                  <i className="fa fa-stop" />
                </a>
                <a className="next">
                  <i className="fa fa-step-forward" />
                </a>
                <a className="repeat">
                  <i className="fa fa-repeat" />
                </a>
                <a className="volume">
                  <i className="fa fa-volume-up" />
                </a>
              </div>
            </div>
            <div className="lists">
              <div className="label">MENU</div>
              <div className="box" />
              <ul>
                <li>
                  <span>
                    Famingo<small>Oliver Heldens</small>
                  </span>
                  <em>3:04</em>
                </li>
                <li>
                  <span>
                    Famingo<small>Oliver Heldens</small>
                  </span>
                  <em>3:04</em>
                </li>
                <li>
                  <span>
                    Famingo<small>Oliver Heldens</small>
                  </span>
                  <em>3:04</em>
                </li>
                <li>
                  <span>
                    Famingo<small>Oliver Heldens</small>
                  </span>
                  <em>3:04</em>
                </li>
                <li>
                  <span>
                    Famingo<small>Oliver Heldens</small>
                  </span>
                  <em>3:04</em>
                </li>
                <li>
                  <span>
                    Famingo<small>Oliver Heldens</small>
                  </span>
                  <em>3:04</em>
                </li>
                <li>
                  <span>
                    Famingo<small>Oliver Heldens</small>
                  </span>
                  <em>3:04</em>
                </li>
                <li>
                  <span>
                    Famingo<small>Oliver Heldens</small>
                  </span>
                  <em>3:04</em>
                </li>
                <li>
                  <span>
                    Famingo<small>Oliver Heldens</small>
                  </span>
                  <em>3:04</em>
                </li>
                <li>
                  <span>
                    Famingo<small>Oliver Heldens</small>
                  </span>
                  <em>3:04</em>
                </li>
              </ul>
            </div>
          </div>
      </section>
    );
  }
}
