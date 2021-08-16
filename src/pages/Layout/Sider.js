import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import styles from './index.less';
import Menu from './Menu/Menu';
import { Layout } from 'antd';
import logo from '../../assets/ceshi.jpg';

const { Sider } = Layout;
class Asider extends Component {
  render() {
    return (
      <Sider
        trigger={null}
        collapsible
        collapsed={this.props.collapsed}
        style={{
          overflow: 'auto',
          height: '100vh',
          // position: 'fixed',
          // left: 0,
          background: 'white',
        }}>
        <div className='logo' style={{ display: 'flex', height: 64, padding: 10, boxSizing: 'border-box' }}>
          <img src={logo} alt='' style={{ width: 44, height: 44 }} className={styles.logo} />
          <span style={{ lineHeight: 3, fontSize: 16, marginLeft: 15, display: !this.props.collapsed ? 'block' : 'none' }}>后台管理系统</span>
        </div>
        <Menu />
      </Sider>
    );
  }
}
export default withRouter(Asider);
