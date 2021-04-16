import React from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import { DesktopOutlined, PieChartOutlined, FileOutlined, TeamOutlined, UserOutlined } from '@ant-design/icons';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './components/home';
import Welcome from './components/welcome';
import Detail from './components/detail';
import routes from './router/router';
const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;

class App extends React.Component {
  state = {
    collapsed: false,
    pathLocation: '',
  };

  onCollapse = (collapsed) => {
    this.setState({ collapsed });
  };

  handleClick = (e) => {
    this.setState({ pathLocation: e.key });
  };

  render() {
    const { collapsed, pathLocation } = this.state;
    return (
      <Router>
        <Layout style={{ minHeight: '100vh' }}>
          {/* Sider侧边栏 */}
          <Sider collapsible collapsed={collapsed} onCollapse={this.onCollapse} theme='light'>
            {/* logo图片 */}
            <div style={{ height: 32, margin: 16, background: '#EFF8FB' }} />
            {/* 左侧导航区域 */}
            <Menu theme='light' defaultSelectedKeys={['home']} mode='inline' onClick={this.handleClick}>
              <Menu.Item key='home' icon={<PieChartOutlined />}>
                <Link to='/'>home</Link>
              </Menu.Item>
              <Menu.Item key='welcome' icon={<DesktopOutlined />}>
                <Link to='/welcome'>welcome</Link>
              </Menu.Item>
              <Menu.Item key='detail' icon={<UserOutlined />} title='User'>
                <Link to='/detail'>detail</Link>
              </Menu.Item>
            </Menu>
          </Sider>
          {/* 右侧connect内容 */}
          <Layout className='site-layout'>
            <Header className='site-layout-background' style={{ padding: 0 }} />
            <Content style={{ margin: '0 16px' }}>
              <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>主页</Breadcrumb.Item>
                <Breadcrumb.Item>{`${pathLocation}` ? `${pathLocation}` : 'home'}</Breadcrumb.Item>
              </Breadcrumb>
              <div className='site-layout-background' style={{ padding: 24, minHeight: 360 }}>
                {/* 组件导航路由 */}
                {routes.map((route, key) => {
                  if (route.exact) {
                    return <Route key={key} exact path={route.path} component={route.component} />;
                  } else {
                    return <Route key={key} path={route.path} component={route.component} />;
                  }
                })}
              </div>
            </Content>
          </Layout>
                
        </Layout>
      </Router>
    );
  }
}

export default App;
