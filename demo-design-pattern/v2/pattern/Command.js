




class RenderLogin{
    constructor() {
        this.login = document.createElement('div');
        this.options = {
            width: '100px',
            height: '100px',
            border: '1px solid red'
        }
    }

    render(options) {
        this.options = {...this.options, ...options};
        for (let key of Object.keys(this.options)) {
            this.login.style[key] = this.options[key];
        }
        document.body.appendChild(this.login);
    }

    remove() {
        document.body.removeChild(this.login);
    }
}

class RenderLoginCommand{
    constructor() {
        this.renderLogin = new RenderLogin();
    }

    excute(reciever) {
        this.renderLogin.render(reciever.options);
    }

    undo() {
        this.renderLogin.remove();
    }
}

export class LoginButton{
    constructor() {
        this.options = {
            background: 'grey',
            borderRadius: '50%'
        }
        this.renderLoginCommand = new RenderLoginCommand();
    }
}

