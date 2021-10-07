import {
  USER_INPUT,
  AUDIO_NODE

} from '../../utilities/constants';

const actions = {
  inputUser: (value) => ({
    type: USER_INPUT,
    payload: value
  }),
  selectNode: (value) => ({
    type: AUDIO_NODE,
    payload: value
  }),
}

const { inputUser, selectNode } = actions;

const getInput = (value) => {
  return dispatch => {
    dispatch(inputUser(value));
  }
};

const pushComponent = (component) => {
  return dispatch => {
    dispatch(selectNode(component));
  }
};


export { getInput, pushComponent };
