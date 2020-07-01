import React from 'react';
import { PageHeader, Typography } from 'antd';
import { LogoutOutlined } from '@ant-design/icons';

import { useAuth } from '../../hooks/auth';

import {BtnSignOut} from './styles';

const {Title} = Typography;

const style = {
  display: 'flex',
  justifyContent: 'space-between',
  border: '1px solid rgb(235,237,240)',
  background: '#201466',
}

const Header: React.FC = () => {

  const { signOut } = useAuth();

  return (
    <PageHeader
    style={style}
    title={<Title level={4} style={{color: '#fff'}}>Products</Title>}
  >
    <BtnSignOut onClick={signOut}>
      <LogoutOutlined />&nbsp; Logout
    </BtnSignOut>
    </PageHeader>

  )
}

export default Header;
