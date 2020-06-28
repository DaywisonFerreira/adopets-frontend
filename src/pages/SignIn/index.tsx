import React, {useContext, useCallback} from 'react';
import { Form, Input, Button } from 'antd';
import { ValidateErrorEntity, Store } from "rc-field-form/lib/interface";
import {Link} from 'react-router-dom';
import { SearchOutlined } from '@ant-design/icons';
import {FiLogIn} from 'react-icons/fi';

import { AuthContext } from '../../context/AuthContext';

import { Container, Content, ImageContent } from './styles';


const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};


const SignIn: React.FC = () => {

  const { signIn } = useContext(AuthContext);

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
          <h3>Faça seu login</h3>
          <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Senha"
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item {...tailLayout}>
            <Button type="primary" htmlType="submit">
              Entrar
            </Button>
          </Form.Item>
            <Link to="/signup">
              <Button type="primary" icon={<FiLogIn />} size='large'>
                Criar nova conta
              </Button>
            </Link>
        </Form>

<ImageContent />

      </Content>
    </Container>

  );

};

export default SignIn;
