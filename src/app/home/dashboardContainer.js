import { connect } from 'react-redux'
import DashboardComponent from './dashboard'

const mapStateToProps = (state) => {
  const { equipmentList } = state.dasboard;
  return {
      equipmentList
  }
}

const mapDispatchToProps = (dispatch)=> {
  return {name : "Anant"}
}

const DashboardContainer = connect(
    mapStateToProps,
    mapDispatchToProps
    )(DashboardComponent);

export default DashboardContainer