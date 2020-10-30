import { ACCEPT_FLOCK, CANCEL_FLOCK, DECLINE_FLOCK, FLOCK_REQUEST, REMOVE_FLOCK } from '../actions/types';

const initialState = {
  flock: []

}

const flockReducer = (state = initialState, action) => {
 switch(action.type){
    case FLOCK_REQUEST:
      return {
        ...state,
        info: action.payload
      }
      case ACCEPT_FLOCK:
      return {
        ...state,
        info: action.payload
      }
      case DECLINE_FLOCK:
      return {
        ...state,
        info: action.payload
      }
      case REMOVE_FLOCK:
      return {
        ...state,
        info: action.payload
      }
      case CANCEL_FLOCK:
      return {
        ...state,
        info: action.payload
      }
    default:
      return state
  }
}

export default flockReducer;