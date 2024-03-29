import { LOADING_UI, LOADED_UI } from '../types';
const initialState = {};
export default function (state = initialState, action) {
  switch (action.type) {
    case LOADING_UI:
      return {
        ...state,
        loading: true,
      };
    case LOADED_UI:
      return {
        ...state,
        loading: false,
      };
    default: {
      return state;
    }
  }
}
