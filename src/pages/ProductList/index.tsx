import React, { useState, useEffect } from 'react';
import { Row, Col, Input} from 'antd';

import { Link, useHistory } from 'react-router-dom';
import {MdKeyboardArrowLeft, MdKeyboardArrowRight} from 'react-icons/md';

import { toast } from 'react-toastify';

import Header from '../../components/Header';
import ProductCard from '../../components/ProductCard';
import Modal from '../../components/Modal';

import api from '../../services/api';


import {
  Container,
  Content,
  ActionsContent,
  LimitContent,
  Pagination,
  PaginationButton,
  PaginationItem,
  ProductDetail,
} from './styles';

interface Product {
  id: string;
  name: string;
  description: string;
  category: string;
  price: string;
  stock: number;
  formatedPrice: string;
}

const Product: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [productSelected, setProductSelected] = useState<Product | []>([]);
  const [limit, setLimit] = useState(8);
  const [pages, setPages] = useState<number[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [filter, setFilter] = useState('');

  const [modalVisible, setModalVisible] = useState(false);

  const history = useHistory();

  const { Search } = Input;

  async function loadProducts() {
    const response = await api.get('/products', {
      params: {
        filter,
        limit,
        page: currentPage,
      },
    });


    const productFormated = response.data.map((product: Product) => ({
      ...product,
      formatedPrice: formatter(Number(product.price))
    }))

    const total = response.headers['x-total-count'];
    const totalPages = Math.ceil(total / limit);

    const arrayPages = [];
    for (let i = 1; i <= totalPages; i++) {
      arrayPages.push(i);
    }
    setPages(arrayPages);
    setProducts(productFormated);
  }

  useEffect(() => {
    loadProducts();
  }, [filter, currentPage, limit]);

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    setFilter(e.target.value);
    setCurrentPage(1);
  }

  function formatter(value: number) {
    return new Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(value);
  }

  function handleSelectChange(e: React.ChangeEvent<HTMLSelectElement>) {
    setLimit(Number(e.target.value));
    setCurrentPage(1);
  }

  const handleViewModal = (product: Product) => {
    setProductSelected(product)
    setModalVisible(true)
  }

  const handleModalClose = () => {
    setModalVisible(false)
  }

  const handleEdit = (id: string) => {
    history.push(`/products/edit/${id}`);
  };

  const handleDelete = async (id: string) => {
    const confirm = window.confirm(
      'Are you sure you want to delete this product?',
    );

    if (confirm) {
      try {
        await api.delete(`/product/${id}`);

        setCurrentPage(1)
        loadProducts();

        toast.success('Product successfully deleted');
      } catch (error) {
        toast.error('Error deleting the product, please try again later');
      }
    }
  };

  return (
    <Container>
    <Header/>
      <Content>
        <ActionsContent>
            <Search
              placeholder="Name, description or category"
              onChange={(e) => handleInputChange(e)}
              style={{ width: 250 }}
            />
          <Link to="/products/create">New Product</Link>
          <LimitContent>
            <span>Per page</span>
            <select name="" id="" onChange={(e) => handleSelectChange(e)}>
              <option value={8}>8</option>
              <option value={12}>12</option>
              <option value={16}>16</option>
            </select>
          </LimitContent>
        </ActionsContent>
            <Row gutter={[16, 24]}>
          {products.length > 0 ? (
            products.map((product) => (
                <Col className="gutter-row" span={6} key={product.id}>
                  <ProductCard
                    name={product.name}
                    category={product.category}
                    price={product.formatedPrice}
                    handleViewClick={() => handleViewModal(product)}
                    handleEditClick={() => handleEdit(product.id)}
                    handleDeleteClick={() => handleDelete(product.id)}
                  />
                </Col>

            ))
            ) : (
              <div style={{
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginTop: '100px'
                }}
              >
                <p style={{color: '#222237'}}>No results</p>
              </div>
              )}
              </Row>
        {products.length > 0 ? (
          <Pagination>
          <PaginationButton>
            {currentPage > 1 && (
              <PaginationItem onClick={() => setCurrentPage(currentPage - 1)}>
                <MdKeyboardArrowLeft/>
              </PaginationItem>
            )}
            {pages.map((page) => (
              <PaginationItem
                isSelect={page === currentPage}
                key={page}
                onClick={() => setCurrentPage(page)}
              >
                {page}
              </PaginationItem>
            ))}
            {currentPage < pages.length && (
              <PaginationItem onClick={() => setCurrentPage(currentPage + 1)}>
                <MdKeyboardArrowRight/>
              </PaginationItem>
            )}
          </PaginationButton>
        </Pagination>
        ) : null}
        <Modal visible={modalVisible} handleModalClose={handleModalClose}>
          {!Array.isArray(productSelected)  && (
            <ProductDetail>
              <p><span>Name: </span>{productSelected.name}</p>
              <p><span>Category: </span>{productSelected.category}</p>
              <p><span>Price: </span>{productSelected.formatedPrice}</p>
              <p><span>Stock: </span>{productSelected.stock}</p>
              <p><span>Description: </span>{productSelected.description}</p>
            </ProductDetail>
          )}

        </Modal>
      </Content>
    </Container>
  );
};

export default Product;
