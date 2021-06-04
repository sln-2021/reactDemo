/*eslint-disable*/
import React, { Component } from 'react'
import { Layout } from 'antd';
import './header.less'
const { Header } = Layout;

export default class header extends Component {

    render() {
        return <Header style={{background: 'white', textAlign: 'center',width: '100%'}}>
            <span>header</span>
        </Header>;
    }
}
