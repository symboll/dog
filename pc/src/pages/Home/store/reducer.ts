import * as Types from './actionTypes';
import { Actions } from './actionCreators'
const defaultState = {
  testname: 'zhangsan'
}

export default (state = defaultState, action:Actions) => {
  switch (action.type) {
    case Types.ADD_TODO:
      break;
    case Types.REMOVE_TODO:
      break;
    case Types.CHANGE_NAME:
      return {
        ...state,
        testname: action.payload
      }
  }

  return state
}
