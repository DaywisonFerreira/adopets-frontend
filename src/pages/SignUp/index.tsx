import React, { useCallback } from 'react';
import { Form, Input, Button } from 'antd';
import { ValidateErrorEntity, Store } from "rc-field-form/lib/interface";
import {Link, useHistory} from 'react-router-dom';
import {UserOutlined, MailOutlined, LockOutlined, ArrowLeftOutlined } from '@ant-design/icons';
import api from '../../services/api';
import { toast } from 'react-toastify';


import { Container, Content } from './styles';


const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};


const SignIn: React.FC = () => {

  const history = useHistory();

  const onFinish = useCallback(async (data: Store) => {
    try {
      await api.post('/users', data);

      toast.success('User created successfully');

      history.push('/');
    } catch (error) {
      toast.error('Error creating user, please try again later')
    }
  }, [history]);

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
          <h3>Create account</h3>
          <Form.Item
            name="name"
            rules={[{ required: true, message: 'Please input your name!' }]}
          >
            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
          </Form.Item>

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
              Create
            </Button>
          </Form.Item>
        </Form>
        <Link to="/">
        <ArrowLeftOutlined />&nbsp;
           Back to login
        </Link>
      </Content>
    </Container>

  );

};

export default SignIn;
