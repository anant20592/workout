import React from 'react';
import logo from './logo.svg';
import './App.css';
import SpacingGrid from '../src/components/Grid'
import CustomCard from './components/Card'
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from './components/Layout'; 
function App() {
  return (
      <Layout>
        <SpacingGrid>
          <CustomCard></CustomCard>
        </SpacingGrid>
      </Layout>
  );
}

export default App;
