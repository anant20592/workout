import data from '../../static/dashboardData.json'

const INITIAL_STATE = {
    count: 0,
    subreddit: '',
    showSpinner: false,
    subredditData: data
  }
const dashboardReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case "Dashboard":  {
        return {
            state,
            data :  data
        }
    }
    default : return state
}
}
export default dashboardReducer