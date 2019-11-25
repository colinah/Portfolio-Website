import React from 'react';
import Layout from './hoc/Layout/Layout';
import AboutMe from './containers/AboutMe/AboutMe';
import Header from './containers/Header/Header';
import Resume from './containers/Resume/Resume';
import Projects from './containers/Projects/Projects';
import Footer from './containers/Footer/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Layout>
        <Header />
        <AboutMe />
        <Resume />
        <Projects />
        <Footer />
      </Layout>
    </div>
  );
}

export default App;
