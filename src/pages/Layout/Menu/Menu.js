import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { splits } from '../../../utils/index';
import './menu.less';
import { menuData } from '../../../router/router';
import { Menu } from 'antd';
import { HomeOutlined } from '@ant-design/icons';

const { SubMenu } = Menu;

class Menus extends Component {
  menuTag = function siderNavigation(menuData) {
    if (menuData && menuData.length > 0) {
      return menuData.map((item) => {  
        if (item.children && item.children.length > 0) {
          return (
            <SubMenu key={item.path} icon={item.icon} title={item.title} style={{ color: 'red' }}>
              {siderNavigation(item.children)}
            </SubMenu>
          );
        } else {
          return (
            <Menu.Item key={item.path} icon={item.icon}>
              <Link to={{ pathname: item.path ,state: item.cont ? item.cont : item.title}}>{item.title}</Link>
            </Menu.Item>
          );
        }
      });
    }
  };
  render() {
    let defaultSelectedKeys = this.props.location.pathname;
    let defaultOpenKeys = splits(this.props.location.pathname);
    return (
      <Menu defaultSelectedKeys={[defaultSelectedKeys]} defaultOpenKeys={defaultOpenKeys} mode='inline' theme='light'>
        {this.menuTag(menuData)}
      </Menu>
    );
  }
}
export default withRouter(Menus);
