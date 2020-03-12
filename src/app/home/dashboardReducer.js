import data from '../../static/dashboardData.json'
import {fromJS} from 'immutable'

const dashboardReducer = (
    state = fromJS({
      list: [],
      validation: [],
      data: {},
      metadata: {},
      submittingForm: false,
    }),
    action
  ) => {
    switch (action.type) {
        case "Dashboard":
           return state.setIn(['data'], fromJS(data))
        default:
        return state;
    }
  };
export default dashboardReducer