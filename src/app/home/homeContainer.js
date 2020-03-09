import { connect } from 'react-redux';
import HomeComponent from './home';
import {requestSubredditJson} from './dashboardActions'

const mapStateToProps = state => {
  return { name :"Anant" }
};

const mapDispatchToProps = dispatch => {
  dispatch(requestSubredditJson())
  return {name : "Anant"}
};

const HomeContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeComponent);

export default HomeContainer