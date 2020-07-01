import React, { useCallback } from 'react';
import { Form, Input, Button } from 'antd';
import { ValidateErrorEntity, Store } from "rc-field-form/lib/interface";
import { Link } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';
import {UserOutlined, MailOutlined, LockOutlined } from '@ant-design/icons';

import { useAuth } from '../../hooks/auth';

import { Container, Content, RegisterContent } from './styles';


const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};


const SignIn: React.FC = () => {

  const { signIn } = useAuth();


  const onFinish = useCallback(async (data: Store) => {
    signIn({
      email: data.email,
      password: data.password
    });
  }, [signIn]);


  function onFinishFailed(errorInfo: ValidateErrorEntity): void {
    console.log('Failed:', errorInfo);
  }


  return (
    <Container>
      <Content>
        <Form
          {...layout}
          name="basic"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <UserOutlined className="signIcon"/>
          <h3>Sign In</h3>
          <Form.Item
            name="email"
            rules={[{ required: true, message: 'Please input your email!' }]}
          >
            <Input prefix={<MailOutlined className="site-form-item-icon" />} placeholder="Email" />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>

          <Form.Item {...tailLayout}>
            <Button type="primary" htmlType="submit">
              Login
            </Button>
          </Form.Item>
        </Form>
        <RegisterContent>
          Don't have a account?
        <Link to="/signup">
            <FiLogIn />
          Register Here
        </Link>
        </RegisterContent>
      </Content>
    </Container>

  );

};

export default SignIn;
