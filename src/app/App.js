import React , {Component} from 'react';
import './App.css';
import SpacingGrid from '../components/Grid'
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from '../components/Layout';
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomeContainer from '../app/home/homeContainer';

class  App extends Component {
  render() {
  return (
      <Layout>
        <Router>
          <SpacingGrid>
            <Route exact path='/' component={HomeContainer}/>
          </SpacingGrid>
        </Router>
      </Layout>
  );
}
}

export default App;
