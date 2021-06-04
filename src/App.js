import React, { Component, lazy, Suspense } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { LoadingOutlined } from '@ant-design/icons';
const Login = lazy(() => import ("./pages/login/index"))
const NotFound = lazy(() => import("./pages/404/index"))
const Layouts = lazy(() => import('./pages/Layout/index'));
const SuspenseComponent = (Component) => (props) => {
  return (
    <Suspense
      fallback={
        <div style={{ color: '#000', fontSize: '20px', padding: '30px' }}>
          <LoadingOutlined  style={{textAlign: 'center'}}/>
          &nbsp;&nbsp;&nbsp;Loading...
        </div>
      }>
      <Component {...props}></Component>
    </Suspense>
  );
};
class App extends Component {
render() {
    return (
      <Router>
        <Switch>
          <Route path='/login' component={SuspenseComponent(Login)} />
          <Route path='/' component={SuspenseComponent(Layouts)}></Route>
          <Route component={SuspenseComponent(NotFound)} />
        </Switch>
      </Router>
    );
  }
}
export default (App);