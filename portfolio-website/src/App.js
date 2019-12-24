import React from 'react';
import Layout from './hoc/Layout/Layout';
import AboutMe from './containers/AboutMe/AboutMe';
import Header from './containers/Header/Header';
import Projects from './containers/Projects/Projects';
import Contact from './containers/Contact/Contact';
import Footer from './containers/Footer/Footer';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Layout>
        <Header />
        <AboutMe />
        <Projects />
        <Contact />
        <Footer />
      </Layout>
    </div>
  );
}

export default App;
