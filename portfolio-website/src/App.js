import React from 'react';
import Layout from './hoc/Layout/Layout';
import './App.scss';
import ReactDOM from 'react-dom';
import {Switch, Route} from 'react-router-dom';
import Pages from './components/Pages/Pages'


function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/blog" component={Pages}></Route>
        <Route path ="/" component={Layout}></Route>
      </Switch>
    </div>
  );
}

export default App;
