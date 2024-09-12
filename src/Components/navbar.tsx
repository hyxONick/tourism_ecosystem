'use client';
import React from 'react';
import { Menu } from 'antd';
import { HomeOutlined, AppstoreOutlined, UserOutlined } from '@ant-design/icons';

const Navbar: React.FC = () => (
  <Menu mode="horizontal" defaultSelectedKeys={['1']}>
    <Menu.Item key="1" icon={<HomeOutlined />}>
      <a href="/">Home</a>
    </Menu.Item>
    <Menu.Item key="2" icon={<AppstoreOutlined />}>
      <a href="/products">Products</a>
    </Menu.Item>
    <Menu.Item key="3" icon={<UserOutlined />}>
      <a href="/profile">Profile</a>
    </Menu.Item>
  </Menu>
);

export default Navbar;
