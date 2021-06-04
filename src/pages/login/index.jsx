import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './login';
import './index.less'
export default class Logins extends Component {
  UNSAFE_componentWillMount() {
    document.title = `login-React admin`;
  }
  render() {
    return (
      <div>
        <div>
          <div style={{marginTop: 50,textAlign: 'center',fontSize: '30px'}}>
            <span>用户登录</span>
          </div>
          <Switch>
            <Route path='/login' component={Login} />
          </Switch>
        </div>
      </div>
    );
  }
}
