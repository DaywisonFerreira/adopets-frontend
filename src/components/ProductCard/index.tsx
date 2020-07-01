import React from 'react';
import { Card, Tooltip, Button } from 'antd';

import { MdVisibility, MdModeEdit, MdDelete } from 'react-icons/md';

import ProductImg from '../../assets/not-available.png';

import {
  BoxAction,
  ProductInfo,
  Actions,
} from './styles';

interface ProductData {
  name: string;
  category: string;
  price: string | undefined;
  handleViewClick: () => void;
  handleEditClick: () => void;
  handleDeleteClick: () => void;
}

const ProductCard: React.FC<ProductData> = ({
  name,
  category,
  price,
  handleViewClick,
  handleEditClick,
  handleDeleteClick,
}) => {
  return (
    <Card style={{
      width: '100%',
      background: '#f6f6f6',
      borderRadius: '10px',
      height: '285px'
    }}>
       <BoxAction>
        <img src={ProductImg} alt="" />
        <Actions>
        <Tooltip title="View" color='orange'>
          <Button onClick={handleViewClick}><MdVisibility /></Button>
        </Tooltip>
        <Tooltip title="Edit" color='blue'>
          <Button onClick={handleEditClick}><MdModeEdit /></Button>
        </Tooltip>
        <Tooltip title="Remove" color='red'>
          <Button onClick={handleDeleteClick}><MdDelete /></Button>
        </Tooltip>
        </Actions>
      </BoxAction>
      <ProductInfo>
        <h3>{name}</h3>
        <span>{category}</span>
        <p>{price}</p>

      </ProductInfo>
    </Card>

  );
};

export default ProductCard;
