// index.js
import React from 'react';
// ReactDom用于页面渲染
import ReactDOM from 'react-dom';
// index.css用于处理页面样式
import './index.css';
// App 是一个组件
import App from './App';
import 'antd/dist/antd.css';
// 用ReactDOM.render来将元素渲染到页面中
ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
