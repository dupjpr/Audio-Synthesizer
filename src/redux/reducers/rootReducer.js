import {
  LOADING,
  USER_INPUT,
  AUDIO_NODE
  
} from '../../utilities/constants';

const rootReducer = (state, action) => {

  switch (action.type) {
    case LOADING:
      return {
        ...state,
        loading: action.payload
      }
    case USER_INPUT:
      return {
        ...state,
        selectorUser: {...state.selectorUser, ...action.payload}
      }
    case AUDIO_NODE:
      return {
        ...state,
        components: [...state.components, action.payload]
      }
    
    default:
      return state
  }
}

export default rootReducer;
