import React, { Component, lazy, Suspense } from 'react'
import "./index.less"
import { withRouter, Route, Switch, Redirect } from 'react-router-dom';
import { Layout, Breadcrumb } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
const { Content } = Layout;
const Homes = lazy(() => import("../Home/index"))
const Home1 = lazy(() => import('../Home/home1'));
const Home2 = lazy(() => import('../Home/home2'));
const Welcome = lazy(() => import('../welcome/index'));
const NotFound = lazy(() => import("../404/index"))
const SuspenseComponent = Component => props => {
    return (
        <Suspense fallback={<div style={{color:"#000",fontSize:"20px",padding:"30px"}}><LoadingOutlined />&nbsp;&nbsp;&nbsp;Loading...</div>}>
            <Component {...props}></Component>
        </Suspense>
    )
}
class Contents extends Component {
    Breadcrumbs = function () {
        let { state } = this.props.location;
        if (state && (typeof (state) == 'string')) {
            document.title = `${state}-React admin`
            if (state === "首页") return ""
            return <Breadcrumb.Item>{state}</Breadcrumb.Item>
        } else if (state && state.length > 0) {
            document.title = `${state[state.length - 1]}-React admin`
            return state.map(item => {
                return <Breadcrumb.Item key={item}>{item}</Breadcrumb.Item>
            })
        }
        return ""
    }
    render() {
        return (
            <Content
                style={{ margin: '0 16px', overflow: 'initial', backgroundColor: "transparent" }}
                className="site-layout-background"
            >
                <div>
                <Breadcrumb style={{
                    margin: '15px',
                    fontSize: "16px"
                }} >
                    <Breadcrumb.Item>首页</Breadcrumb.Item>
                    {this.Breadcrumbs()}
                </Breadcrumb>
                <div></div>
                </div>
                <Switch>
                    <Route path="/home" component={SuspenseComponent(Homes)} />
                    <Route path="/home1" component={SuspenseComponent(Home1)} />
                    <Route path="/home2" component={SuspenseComponent(Home2)} />
                    <Route path="/welcome" component={SuspenseComponent(Welcome)} />
                    <Redirect to="/home1" from="/" />
                    <Route component={SuspenseComponent(NotFound)} />
                </Switch>
            </Content>
        )
    }
}
export default withRouter(Contents)
