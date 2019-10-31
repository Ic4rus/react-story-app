import React, { Component } from 'react';
import { Layout } from 'antd';
import Sider from './components/sider/Sider';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Routes from './components/routes/Routes';
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
              <div className="page-content">
                <Routes />
              </div>
            </Content>
            <Footer />
          </Layout>
        </Layout>
      </Layout>
    );
  }
}

export default App;
