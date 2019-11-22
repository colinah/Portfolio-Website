import React from 'react';
import Layout from './hoc/Layout/Layout';
import {Route , Switch } from 'react-router-dom'
import AboutMe from './containers/AboutMe/AboutMe';
import './App.css';

function App() {
  return (
    <div className="App">
      <Layout>
        <Switch>
        <Route path="/"  exact component={AboutMe} />
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
