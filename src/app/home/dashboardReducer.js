
const INITIAL_STATE = {
    count: 0,
    subreddit: '',
    showSpinner: false,
    subredditData: []
  }
const dashboardReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case "11":  {
        return {
            ...state
        }
    }
    default : return state
}
}
export default dashboardReducer