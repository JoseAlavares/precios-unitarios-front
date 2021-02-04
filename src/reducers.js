import { ADD_DATA_FORM } from './constants'

const initialState = {
  dataForm: []
}

function rootReducer(state = initialState, action) {
  switch(action.type) {
    case ADD_DATA_FORM:
      return Object.assign({}, state, {
        dataForm: state.dataForm.concat(action.payload)
      });
  }

  return state
}

export default rootReducer