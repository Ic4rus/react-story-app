import React, { Component } from 'react';
import { Layout } from 'antd';
import './Footer.css';

class Footer extends Component {
  render() {
    return (
      <Layout.Footer className="footer-container">
        Ant Design ©2018 Created by Ant UED
      </Layout.Footer>
    );
  }
}

export default Footer;
