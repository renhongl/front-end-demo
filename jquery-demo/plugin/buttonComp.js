//Button component

class Button {
  constructor(options = {}) {
    this.element = options.container;
    const defaults = {
      background: "grey",
      border: "none"
    };
    // this.options = {...defaults, ...options};
    this.options = Object.assign({}, defaults, options);
    this.init();
  }
  init() {
    this.addStyle();
    this.element.addEventListener("click", this.onClick);
    this.element.addEventListener("mousedown", this.onMousedown);
    this.element.addEventListener("mouseup", this.onMouseup);
    this.element.addEventListener("mouseover", this.onMouseover);
    return this;
  }
  addStyle() {
    let style = this.element.style;
    for(let key of Object.keys(this.options)) {
      if(key !== 'container') {
        style[key] = this.options[key];
      }
    }
  }
  onMouseover() {}
  onMousedown() {}
  onMouseup() {}
  onClick() {
    console.log("clicked");
  }
}

export default Button;
