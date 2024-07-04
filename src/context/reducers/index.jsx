import {
    DELETE_CONTEXT,
    SET_CONTEXT_CUSTOM,
    SET_CONTEXT_FAIL,
    SET_CONTEXT_LOADING,
    SET_CONTEXT_SUCCESS,
  } from "../../constants/actionTypes";
  
  export default (state, { type, key, value }) => {
    switch (type) {

      case SET_CONTEXT_CUSTOM:
        return {
          ...state,
          [key]: value,
          error:false,
        };

      case SET_CONTEXT_LOADING:
        return {
          ...state,
          loading: true,
          error:false,
        };
  
      case SET_CONTEXT_SUCCESS:
        return {
          ...state,
          loading: false,
          [key]: value,
          error:false,
        };
  
      case SET_CONTEXT_FAIL:
        return {
          ...state,
          loading: false,
          [key]: value,
          error:true
        };
      
      case DELETE_CONTEXT:
        delete state[key];
        return {
          state,
        };
  
      default:
        return state;
    }
  };
  