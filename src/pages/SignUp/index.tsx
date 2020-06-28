import React from 'react';
import { Form, Input, Button, Tooltip } from 'antd';
import { ValidateErrorEntity } from "rc-field-form/lib/interface";
import {Link} from 'react-router-dom';
import { Container, Content, ImageContent } from './styles';

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};


const SignUp: React.FC = () => {

  function onFinish(values: object): void {
    console.log('Success:', values);
  }

  function onFinishFailed(errorInfo: ValidateErrorEntity): void {
    console.log('Failed:', errorInfo);
  }


  return (
    <Container>
      <Content>
        <ImageContent />
        <Form
          {...layout}
          name="basic"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          >
          <h3>Faça seu cadastro</h3>
          <Form.Item
            label="Nome"
            name="name"
            rules={[{ required: true, message: 'Preencha seu nome' }]}
          >
            <Input />
          </Form.Item>


          <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, message: 'Preencha seu e-mail' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Senha"
            name="password"
            rules={[{ required: true, message: 'Preencha sua senha' }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item {...tailLayout}>
            <Button type="primary" htmlType="submit">
              Entrar
            </Button>
          </Form.Item>
        </Form>
      </Content>
    </Container>

  );

};

export default SignUp;
