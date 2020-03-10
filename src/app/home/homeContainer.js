import { connect } from 'react-redux';
import HomeComponent from './home';
import {fetchDashboardData} from './dashboardActions'

const mapStateToProps = state => {
  const {title , description} = state
  return {
    title : title,
    description : description
  }
};

const mapDispatchToProps = dispatch => {
  return {
    fetchDashboardData
  }
};

const HomeContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeComponent);

export default HomeContainer