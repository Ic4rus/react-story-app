import React, { Component } from 'react';
import { Menu, Icon, Layout } from 'antd';
import * as RouteMap from '../../constants/RouteMap';
import { withRouter } from 'react-router-dom';
import './Sider.css';

const menuItems = [
  { icon: 'plus', name: 'Item 1', route: RouteMap.ROUTE_ITEM1 },
  {
    icon: 'plus',
    name: 'Item 2',
    route: RouteMap.ROUTE_ITEM2,
    subItems: [
      {
        icon: 'minus',
        name: 'Sub item 1',
        route: RouteMap.ROUTE_ITEM2_SUBITEM1
      },
      {
        icon: 'minus',
        name: 'Sub item 2',
        route: RouteMap.ROUTE_ITEM2_SUBITEM2
      }
    ]
  },
  { icon: 'plus', name: 'Item 3', route: RouteMap.ROUTE_ITEM3 },
  { icon: 'plus', name: 'Item 4', route: RouteMap.ROUTE_ITEM4 },
  { icon: 'plus', name: 'Item 5', route: RouteMap.ROUTE_ITEM5 }
];

class Sider extends Component {
  state = {
    collapsed: false
  };

  onCollapse = collapsed => {
    this.setState({ collapsed });
  };

  handleChangeMenu = ({ key }) => {
    this.props.history.push(key);
  };

  render() {
    const { location } = this.props;
    return (
      <Layout.Sider
        collapsible
        collapsed={this.state.collapsed}
        onCollapse={this.onCollapse}
      >
        <div className="logo-container" />
        <Menu
          theme="dark"
          selectedKeys={[location.pathname]}
          mode="inline"
          onClick={this.handleChangeMenu}
        >
          {menuItems.map(item => {
            if (item.subItems && item.subItems.length > 0) {
              return (
                <Menu.SubMenu
                  key={item.route}
                  title={
                    <span>
                      <Icon type={item.icon} />
                      <span>{item.name}</span>
                    </span>
                  }
                >
                  {item.subItems.map(subItem => (
                    <Menu.Item key={subItem.route}>
                      <Icon type={subItem.icon} />
                      <span>{subItem.name}</span>
                    </Menu.Item>
                  ))}
                </Menu.SubMenu>
              );
            } else {
              return (
                <Menu.Item key={item.route}>
                  <Icon type={item.icon} />
                  <span>{item.name}</span>
                </Menu.Item>
              );
            }
          })}
        </Menu>
      </Layout.Sider>
    );
  }
}

export default withRouter(Sider);
