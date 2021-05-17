import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Routes from './routes';
import Layout from './components/Layout';

import './App.css';

function App() {

  return (

    <Router>
      <Layout>
        <Routes />
      </Layout>
    </Router>
  )
}

export default App;
