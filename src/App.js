import React from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import { DesktopOutlined, PieChartOutlined, FileOutlined, TeamOutlined, UserOutlined } from '@ant-design/icons';
import { Link,Route,  } from 'react-router-dom';
import Home from './components/home';
import Welcome from './components/welcome';
import Detail from './components/detail';
import { createHashHistory } from 'history';
import { Router } from 'react-router';

const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;

class App extends React.Component {
  state = {
    collapsed: false,
  };

  onCollapse = (collapsed) => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  componentDidMount() {
    console.log('1111');
  }
  handleClick = (e) => {
    console.log('click ', e);
  };
  render() {
    const { collapsed } = this.state;
    console.log('2222');
    return (
      <Router>
          <Layout style={{ minHeight: '100vh' }}>
            <Sider collapsible collapsed={collapsed} onCollapse={this.onCollapse} theme='light'>
              <div style={{ height: 32, margin: 16, background: '#EFF8FB' }} />
              <Menu theme='light' defaultSelectedKeys={['home']} mode='inline' onClick={this.handleClick}>
                <Menu.Item key='home' icon={<PieChartOutlined />}>
                  <Link to='/'>home</Link>
                </Menu.Item>
                <Menu.Item key='welcome' icon={<DesktopOutlined />}>
                  <Link to='/welcome'>welcome</Link>
                </Menu.Item>
                <SubMenu key='sub1' icon={<UserOutlined />} title='User'>
                  <Menu.Item key='3'>Tom</Menu.Item>
                  <Menu.Item key='4'>Bill</Menu.Item>
                  <Menu.Item key='5'>Alex</Menu.Item>
                </SubMenu>
                <SubMenu key='sub2' icon={<TeamOutlined />} title='Team'>
                  <Menu.Item key='6'>Team 1</Menu.Item>
                  <Menu.Item key='8'>Team 2</Menu.Item>
                </SubMenu>
                <Menu.Item key='9' icon={<FileOutlined />}>
                  Files
                </Menu.Item>
              </Menu>
            </Sider>
            <Layout className='site-layout'>
              <Header className='site-layout-background' style={{ padding: 0 }} />
              <Content style={{ margin: '0 16px' }}>
                <Breadcrumb style={{ margin: '16px 0' }}>
                  <Breadcrumb.Item>User</Breadcrumb.Item>
                  <Breadcrumb.Item>Bill</Breadcrumb.Item>
                </Breadcrumb>
                <div className='site-layout-background' style={{ padding: 24, minHeight: 360 }}>
                  {/* <Route exact path='/detail' component={Detail} />
                  <Route exact path='/home' component={Home} />
                  <Route exact path='/welcome' component={Welcome} /> */}
                </div>
              </Content>
              <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
            </Layout>
                  
          </Layout>
        </Router>
    );
  }
}

export default App;
