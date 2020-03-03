import React from 'react';
import logo from './logo.svg';
import './App.css';
import SpacingGrid from '../src/components/Grid'
import CustomCard from './components/Card'
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from './components/Layout';
import { BrowserRouter as Router, Route, Switch ,Link } from "react-router-dom";
import GymList from './components/gymList';

function App() {
  return (
      <Layout>
        <Router>
        <SpacingGrid>
          <Link to="/">
          <CustomCard></CustomCard>
          </Link>
          <Link to="list">
            <GymList></GymList>
          </Link>
        </SpacingGrid>
        </Router>
      </Layout>
  );
}

export default App;
