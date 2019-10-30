import React, { Component } from 'react';
import { Menu, Icon, Layout } from 'antd';
import './Sider.css';

const menuItems = [
  { icon: 'plus', name: 'Item 1', route: '1', default: true },
  { icon: 'plus', name: 'Item 2', route: '2' },
  { icon: 'plus', name: 'Item 3', route: '3' },
  { icon: 'plus', name: 'Item 4', route: '4' },
  { icon: 'plus', name: 'Item 5', route: '5' }
];

class Sider extends Component {
  state = {
    collapsed: false
  };

  onCollapse = collapsed => {
    this.setState({ collapsed });
  };

  render() {
    const defaultItems = menuItems.filter(item => {
      return item.default;
    });
    return (
      <Layout.Sider
        collapsible
        collapsed={this.state.collapsed}
        onCollapse={this.onCollapse}
      >
        <div className="logo-container" />
        <Menu
          theme="dark"
          defaultSelectedKeys={defaultItems[0].route}
          mode="inline"
        >
          {menuItems.map(item => (
            <Menu.Item key={item.route}>
              <Icon type={item.icon} />
              <span>{item.name}</span>
            </Menu.Item>
          ))}
        </Menu>
      </Layout.Sider>
    );
  }
}

export default Sider;
