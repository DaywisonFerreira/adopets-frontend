import React, {useCallback} from 'react';
import { Form, Input, Button, InputNumber } from 'antd';
import { ValidateErrorEntity, Store } from "rc-field-form/lib/interface";
import {useHistory} from 'react-router-dom';

import {toast} from 'react-toastify';

import api from '../../services/api';

import Header from '../../components/Header';
import {Container, Content} from './styles';
import CurrencyInput from 'react-currency-input';


const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const ProductCreate: React.FC = () => {
  const history = useHistory();

  const onFinish = useCallback(async (data: Store) => {
    const price = parseFloat(data.price.replace('R$ ', '').replace(',','.'));
    try {
      await api.post('products', {
        name: data.name,
        description: data.description,
        category: data.category,
        price,
        stock: data.stock
      });

      toast.success('Product successfully created');

      history.push('/products');

    } catch (error) {

      toast.error('Failed to create the product, try again later');
    }

  }, []);


  function onFinishFailed(errorInfo: ValidateErrorEntity): void {
    console.log('Failed:', errorInfo);
  }

  return(
    <Container>
      <Header/>
      <Content>
        <h3>Create new product</h3>
        <Form
          {...layout}
          name="basic"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          >
          <Form.Item
            label="Product"
            name="name"
            rules={[{ required: true, message: 'Please fill a product name!' }]}
            >
            <Input />
          </Form.Item>

          <Form.Item
            label="Category"
            name="category"
            rules={[{ required: true, message: 'Please fill a product category' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Price"
            name="price"
            rules={[{ required: true, message: 'Please fill a product price' }]}
          >
           <CurrencyInput prefix="R$ " decimalSeparator="," thousandSeparator="." />
          </Form.Item>

          <Form.Item
            label="Stock"
            name="stock"
            rules={[{ required: true, message: 'Please fill a product stock' }]}
          >
            <InputNumber min={0} />
          </Form.Item>

          <Form.Item
            label="Description"
            name="description"
            rules={[{ required: true, message: 'Please fill a product description' }]}
          >
            <Input.TextArea />
          </Form.Item>

          <Form.Item {...tailLayout}>
            <Button type="primary" htmlType="submit">
              Register
            </Button>

            <Button type="default" htmlType="button" onClick={() => history.push('/products')}>
              Cancel
            </Button>
          </Form.Item>
        </Form>
      </Content>
    </Container>
  )
}

export default ProductCreate;
