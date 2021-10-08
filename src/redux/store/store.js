import { createStore, applyMiddleware } from "redux";
import rootReducer from '../reducers/rootReducer';
import thunk from 'redux-thunk';

const initialState = {
  loading: false,
  audioContext: new AudioContext(),
  selectorUser: { selectOne: "Select a source", selectTwo: 'Select module' },
  components: [],
  infoSelectsInput: { selectOne:['OSC1'], selectTwo:['Filter', 'Gain'] }
}

const store = createStore(rootReducer, initialState, applyMiddleware(thunk));

export default store;
