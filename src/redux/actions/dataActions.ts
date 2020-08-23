import { data } from '../../api/data.js';
import { Dispatch } from 'redux';
// import axios from 'axios'
import {
  FETCH_DATA,
  FETCH_DATA_ERRORS,
  CLEAR_DATA_ERRORS,
  LOADING_UI,
  LOADED_UI,
} from '../types/allTypes';

export const sampleDataAction = () => null;
export const fetchData = () => (dispatch: Dispatch) => {
  // dispatch({ type: CLEAR_DATA_ERRORS });
  dispatch({ type: LOADING_UI });
  //******MOCK API CALL
  // axios.get(`${baseUrl}/fetchData`)
  //     .then((res) => {
  //         const data = res.data
  dispatch({ type: FETCH_DATA, payload: data });
  console.log(data.coverPhoto);
  dispatch({ type: LOADED_UI });
  // })
  // .catch(err => {
  //     dispatch({ type: FETCH_DATA_ERRORS, payload: err.data.message })
  //     dispatch({type: LOADED_UI})
  // })

  //*******MOCK API CALL
};
