import React, { Component } from 'react';
import { Layout } from 'antd';
import Sider from './components/sider/Sider';
import './App.css';
import 'antd/dist/antd.css';

class App extends Component {
  render() {
    return (
      <Layout className="app-container">
        <Layout>
          <Sider />
          <Layout.Content className="page-container">
            <div className="page-content"></div>
          </Layout.Content>
        </Layout>
      </Layout>
    );
  }
}

export default App;
