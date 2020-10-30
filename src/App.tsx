import React from 'react';
import 'index.scss';
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Layout from 'components/Layout';




function App() {
  return (
    <Router>
      <Switch>
        <Route path="/tags">
          <Tags />
        </Route>
        <Route path="/money">
          <Money />
        </Route>
        <Route path="/statistics">
          <Statistics />
        </Route>
        <Redirect exact from="/" to="/money" />
        <Route path="*">
          <NoMatch />
        </Route>
      </Switch>
    </Router>
  );
}
function NoMatch() {
  return (
    <Layout>
      <div>页面不存在，你输错地址了</div>
    </Layout>
  );
}
function Statistics() {
  return (
    <Layout>
      <h2>统计页面</h2>
    </Layout>
  );
}

function Tags() {
  return (
    <Layout>
      <h2>标签页面</h2>
    </Layout>
  );
}

function Money() {
  return (
    <Layout>
      <h2>记账页面</h2>
    </Layout>
  );
}
export default App;