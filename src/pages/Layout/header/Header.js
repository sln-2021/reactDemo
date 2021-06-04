/*eslint-disable*/
import React, { Component } from 'react'
import { Layout } from 'antd';
import './header.less'
import style from './header.module.less';

import { MenuUnfoldOutlined, MenuFoldOutlined, BellOutlined } from '@ant-design/icons';
const { Header } = Layout;

export default class header extends Component {
toggle = () => {
        this.props.toggle()
    }
    render() {
        return <Header style={{background: 'white',width: '100%',}}>
            {React.createElement(this.props.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                    className: style.trigger,
                    onClick: this.toggle,
                })}
            <span style={{textAlign: 'center', float: 'right'}}>header</span>
        </Header>;
    }
}
