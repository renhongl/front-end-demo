




import React from 'react';

export default class Login extends React.Component {
    constructor(props) {
        super(props);
    }

    onClick = () => {
        this.props.updateLogin();
    }

    render() {
        const { login } = this.props;
        return (
            <div>
                <div>{JSON.stringify(login)}</div>
                <button onClick={this.onClick}>登录</button>
            </div>
        )
    }
}