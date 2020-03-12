import { connect } from 'react-redux';
import HomeComponent from './home';
import {fetchDashboardData} from './dashboardActions'


const mapStateToProps = state => {
  return {
    ...state,
  }
};

const mapDispatchToProps = (dispatch) =>({
  fetchData: (data) => {
   dispatch(fetchDashboardData(data))
  }
});

const HomeContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeComponent);

export default HomeContainer