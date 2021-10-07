import { createStore, applyMiddleware } from "redux";
import rootReducer from '../reducers/rootReducer';
import thunk from 'redux-thunk';

const initialState = {
  loading: false,
  audioContext: new AudioContext(),
  selectorUser: { selectOne: "Select a source", selectTwo: 'Select module' },
  components: []
}

const store = createStore(rootReducer, initialState, applyMiddleware(thunk));

export default store;
