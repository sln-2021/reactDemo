import React from 'react';
import { HomeOutlined } from '@ant-design/icons';
const menuData = [
    {
        path: '/home',
        title: '首页',
        icon: <HomeOutlined />,
        children: [
            {
            path: '/home1',
            title: '首页1',
            icon: <HomeOutlined />,
        },{
            path: '/home2',
            title: '首页2',
            icon: <HomeOutlined />,
        },
    ]
    },
    {
        path: '/welcome',
        title: '欢迎',
        icon: <HomeOutlined />,
    },
];
export { menuData };
