import React, { useState } from 'react';
import { Layout, Space } from 'antd';
import {
  FacebookOutlined,
  TwitterOutlined,
  InstagramOutlined,
  GithubOutlined,
  LinkedinOutlined,
} from '@ant-design/icons';

const { Footer } = Layout;

const AppFooter = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <> 

    <Footer style={{ textAlign: 'center' , padding: "0 10%"}}>
    <br/>
    <hr/>
      Blog App ©{new Date().getFullYear()} Created by Dilli Hang Rai
      <br/>
      {/* Social Media Icons */}
      <Space size={12} style={{ margin: '16px 0' }}>
        <FacebookOutlined />
        <TwitterOutlined />
        <InstagramOutlined />
        <GithubOutlined />
        <LinkedinOutlined />

      </Space>
     
   
    </Footer>
 
    </>
  );
};

export default AppFooter;
