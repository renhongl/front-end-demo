import React, { Component } from "react";
import { Form, Icon, Input, Button, Checkbox, message } from "antd";
const FormItem = Form.Item;
import { loginMd5 } from '../../share/config/globalConfig';
import md5 from 'md5';

import './style.less';

class Login extends Component {
  constructor(props) {
    super(props);
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        if(md5(values.userName) === loginMd5.userName && md5(values.password) === loginMd5.password) {
            this.props.login();
        } else {
            message.error('User name or Password is wrong!');
        }
      }
    });
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <section className='login'>
        <Form onSubmit={this.handleSubmit} className="login-form">
          <FormItem>
            {getFieldDecorator("userName", {
              rules: [
                { required: true, message: "Please input your username!" }
              ]
            })(
              <Input
                prefix={
                  <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                }
                placeholder="Username"
              />
            )}
          </FormItem>
          <FormItem>
            {getFieldDecorator("password", {
              rules: [
                { required: true, message: "Please input your Password!" }
              ]
            })(
              <Input
                prefix={
                  <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
                }
                type="password"
                placeholder="Password"
              />
            )}
          </FormItem>
          <FormItem>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              Log in
            </Button>
          </FormItem>
        </Form>
      </section>
    );
  }
}

export default Login = Form.create()(Login);