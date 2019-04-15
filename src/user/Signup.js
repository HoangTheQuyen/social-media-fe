
import React from 'react';
import 'antd/dist/antd.css';
import ReactRouter from 'react-router'
import {create} from './api-user'

import {
  Form, Input, Tooltip, Icon,Button,Card, notification
} from 'antd';


class RegistrationForm extends React.Component {
  state = {
    confirmDirty: false,
    riderect: false
  };
  
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        const user = {
          name: values.name,
          email: values.email,
          password: values.password
        }
       create(user)
       .then((data) => {
        if (data.error) {
          this.openNotificationWithIcon('warning','create fail',data.error)
        } else {
          this.openNotificationWithIcon('success','create sucess')
          this.props.history.push('/auth/login')
        }
        })
      }
    });
  }

  handleConfirmBlur = (e) => {
    const value = e.target.value;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
  }

  compareToFirstPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value && value !== form.getFieldValue('password')) {
      callback('Two passwords that you enter is inconsistent!');
    } else {
      callback();
    }
  }

  validateToNextPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value && this.state.confirmDirty) {
      form.validateFields(['confirm'], { force: true });
    }
    callback();
  }

  openNotificationWithIcon = (type, message, error) => {
    notification[type]({
      message: message,
      description: error,
    })
  }

  render() {
    const { getFieldDecorator } = this.props.form;
   

    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
      },
    };
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0,
        },
        sm: {
          span: 16,
          offset: 8,
        },
      },
    };

    return (
      <Card
      title="Sign Up"
      style={{ maxWidth: 600, minHeight: 330, margin: 'auto', marginTop: 10}}
      >
        <Form {...formItemLayout} onSubmit={this.handleSubmit}>
          <Form.Item
            label="E-mail"
          >
            {getFieldDecorator('email', {
              rules: [{
                type: 'email', message: 'The input is not valid E-mail!',
              }, {
                required: true, message: 'Please input your E-mail!',
              }],
            })(
              <Input />
            )}
          </Form.Item>
          
          <Form.Item
            label="Password"
          >
            {getFieldDecorator('password', {
              rules: [{
                required: true, message: 'Please input your password!',
              }, {
                validator: this.validateToNextPassword,
              }],
            })(
              <Input type="password" />
            )}
          </Form.Item>

          <Form.Item
            label="Confirm Password"
          >
            {getFieldDecorator('confirm', {
              rules: [{
                required: true, message: 'Please confirm your password!',
              }, {
                validator: this.compareToFirstPassword,
              }],
            })(
              <Input type="password" onBlur={this.handleConfirmBlur} />
            )}
          </Form.Item>

          <Form.Item
            label={(
              <span>
                Nickname&nbsp;
                <Tooltip title="What do you want others to call you?">
                  <Icon type="question-circle-o" />
                </Tooltip>
              </span>
            )}
          >
            {getFieldDecorator('name', {
              rules: [{ required: true, message: 'Please input your nickname!', whitespace: true }],
            })(
              <Input />
            )}
          </Form.Item>
          <Form.Item {...tailFormItemLayout}>
            <Button type="primary" htmlType="submit">Register</Button>
          </Form.Item>
        </Form>
      </Card>
    );
  }
}

const Signup = Form.create({ name: 'register' })(RegistrationForm);

export default Signup
          