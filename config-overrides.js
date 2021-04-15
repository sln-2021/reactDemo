const { override, fixBabelImports } = require('customize-cra');

// 全局配置一下Ant Design这个组件库,引入css样式
module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: 'css',
  })
);
