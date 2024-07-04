import { Dispatch } from 'redux';
import { SET_CONTEXT_SUCCESS, DELETE_CONTEXT } from "../../constants/actionTypes";

interface SetContextAction {
  type: string;
  key: string;
  value: any;
}

interface DeleteContextAction {
  type: typeof DELETE_CONTEXT;
  key: string;
}

export const setContext = (key: string, value: any, actionType: string) => (dispatch: Dispatch<SetContextAction>) => {
  dispatch({
    type: actionType,
    key: key,
    value: value,
  });
};

export const removeContext = (key: string) => (dispatch: Dispatch<DeleteContextAction>) => {
  dispatch({
    type: DELETE_CONTEXT,
    key,
  });
};
