import React, { Component } from 'react';
import { Layout, Icon } from 'antd';
import Sider from './components/sider/Sider';
import Header from './components/header/Header';
import './App.css';
import 'antd/dist/antd.css';

const { Content } = Layout;

class App extends Component {
  render() {
    return (
      <Layout className="app-container">
        <Layout>
          <Sider />
          <Layout>
            <Header />
            <Content className="page-container">
              <div className="page-content"></div>
            </Content>
          </Layout>
        </Layout>
      </Layout>
    );
  }
}

export default App;
