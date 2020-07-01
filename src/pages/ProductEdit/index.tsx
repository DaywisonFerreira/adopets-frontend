import React, {useCallback, useEffect, useState} from 'react';
import { Form, Input, Button, InputNumber } from 'antd';
import { FormInstance } from 'antd/lib/form';
import { ValidateErrorEntity, Store } from "rc-field-form/lib/interface";
import {useHistory, useParams} from 'react-router-dom';

import {toast} from 'react-toastify';

import Header from '../../components/Header';
import api from '../../services/api';
import CurrencyInput from 'react-currency-input';

import {Container, Content} from './styles';

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const ProductEdit: React.FC = () => {
  const formRef = React.createRef<FormInstance>();
  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    api.get(`/product/${id}`).then((response) => {
      formRef.current?.setFieldsValue(response.data);
      formRef.current?.setFieldsValue({'price': response.data.price.replace('.', ',')})
    });
  }, [id]);

  const onFinish = useCallback(async (data: Store) => {
    const price = data.price.replace('R$ ', '').replace(',','.');
    try {
      await api.put(`product/${id}`, {
        name: data.name,
        description: data.description,
        category: data.category,
        price,
        stock: data.stock
      });

      toast.success('Product updated successfully');

      history.push('/products');

    } catch (error) {

    }

  }, []);


  function onFinishFailed(errorInfo: ValidateErrorEntity): void {
    console.log('Failed:', errorInfo);
  }

  return(
    <Container>
      <Header/>
      <Content>
        <h3>Edit product</h3>
        <Form
          {...layout}
          name="basic"
          initialValues={{ remember: true }}
          ref={formRef}
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
              Update
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

export default ProductEdit;
