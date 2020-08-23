import { FETCH_DATA, FETCH_DATA_ERRORS, CLEAR_DATA_ERRORS } from '../types';
const initialState = {};
export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_DATA:
      return {
        ...state,
        ...action.payload,
      };
    case FETCH_DATA_ERRORS:
      return {
        ...state,
        errors: action.payload,
      };
    case CLEAR_DATA_ERRORS:
      return {
        ...state,
        errors: null,
      };
    default:
      return state;
  }
}
