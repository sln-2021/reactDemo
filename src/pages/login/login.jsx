import React from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
const layout = {
  labelCol: { span: 10 },
  wrapperCol: { span: 4 },
};
const tailLayout = {
  wrapperCol: { offset: 10, span: 4 },
};
class Login extends React.Component {
  onFinish = (values) => {
    this.props.history.push('/')
  };

  onFinishFailed = (errorInfo) => {
  };

  render() {
    return (
      <>
        <Form {...layout} name='basic' initialValues={{ remember: true }} onFinish={this.onFinish} onFinishFailed={this.onFinishFailed} style = {{marginTop:100}}>
          <Form.Item label='用户名' name='username' rules={[{ required: true, message: 'Please input your username!' }]}>
            <Input />
          </Form.Item>

          <Form.Item label='密码' name='password' rules={[{ required: true, message: 'Please input your password!' }]}>
            <Input.Password />
          </Form.Item>

          <Form.Item {...tailLayout} name='remember' valuePropName='checked'>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item {...tailLayout}>
            <Button type='primary' htmlType='submit'>
              登录
            </Button>
          </Form.Item>
        </Form>
      </>
    );
  }
}
export default Login;
