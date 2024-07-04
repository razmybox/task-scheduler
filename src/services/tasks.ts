import { Dispatch } from "redux";
import {
  SET_CONTEXT_CUSTOM,
  SET_CONTEXT_FAIL,
  SET_CONTEXT_LOADING,
  SET_CONTEXT_SUCCESS,
} from "../constants/actionTypes";
import Services from ".";
import { setContext } from "@/context/actions";

interface NotificationPayload {
  [key: string]: any;
}

interface TaskResponse {
  status: boolean;
  data: any;
}

interface SetContextLoadingAction {
  type: typeof SET_CONTEXT_LOADING;
}
interface SetContextCustomAction {
  type: typeof SET_CONTEXT_CUSTOM;
  key: string;
  value: any;
}

interface SetContextSuccessAction {
  type: typeof SET_CONTEXT_SUCCESS;
  key: string;
  value: any;
}

interface SetContextFailAction {
  type: typeof SET_CONTEXT_FAIL;
  key: string;
  value: any;
}

type ContextAction =
  | SetContextLoadingAction
  | SetContextSuccessAction
  | SetContextCustomAction
  | SetContextFailAction;

export const getTasks =
  (payload: NotificationPayload) =>
  async (dispatch: Dispatch<ContextAction>) => {
    dispatch({ type: SET_CONTEXT_CUSTOM, key: "taskloading", value: true });

    const res: TaskResponse = await Services.get(
      "frontstore/getTasks",
      payload
    );

    if (res.status) {
      dispatch({
        type: SET_CONTEXT_SUCCESS,
        key: "tasks",
        value: res.data.data,
      });
    } else {
      dispatch({ type: SET_CONTEXT_FAIL, key: "tasks", value: [] });
    }
    dispatch({ type: SET_CONTEXT_CUSTOM, key: "taskloading", value: false });
  };

  export const getInprograssTask =
  (payload: NotificationPayload) =>
  async (dispatch: Dispatch<ContextAction>) => {
    dispatch({ type: SET_CONTEXT_CUSTOM, key: "inprogressTaskLoading", value: true });

    const res: TaskResponse = await Services.get(
      "frontstore/getTasks",
      payload
    );

    if (res.status) {
      dispatch({
        type: SET_CONTEXT_SUCCESS,
        key: "inprogressTask",
        value: res.data.data,
      });
    } else {
      dispatch({ type: SET_CONTEXT_FAIL, key: "inprogressTask", value: [] });
    }
    dispatch({ type: SET_CONTEXT_CUSTOM, key: "inprogressTaskLoading", value: false });
  }; 
  
  export const getFailedTasks =
  (payload: NotificationPayload) =>
  async (dispatch: Dispatch<ContextAction>) => {
    dispatch({ type: SET_CONTEXT_CUSTOM, key: "failedTaskLoading", value: true });

    const res: TaskResponse = await Services.get(
      "frontstore/getTasks",
      payload
    );

    if (res.status) {
      dispatch({
        type: SET_CONTEXT_SUCCESS,
        key: "failedTask",
        value: res.data.data,
      });
    } else {
      dispatch({ type: SET_CONTEXT_FAIL, key: "failedTask", value: [] });
    }
    dispatch({ type: SET_CONTEXT_CUSTOM, key: "failedTaskLoading", value: false });
  }; 

  export const getCompletedTasks =
  (payload: NotificationPayload) =>
  async (dispatch: Dispatch<ContextAction>) => {
    dispatch({ type: SET_CONTEXT_CUSTOM, key: "completedTaskLoading", value: true });

    const res: TaskResponse = await Services.get(
      "frontstore/getTasks",
      payload
    );

    if (res.status) {
      dispatch({
        type: SET_CONTEXT_SUCCESS,
        key: "completedTask",
        value: res.data.data,
      });
    } else {
      dispatch({ type: SET_CONTEXT_FAIL, key: "completedTask", value: [] });
    }
    dispatch({ type: SET_CONTEXT_CUSTOM, key: "completedTaskLoading", value: false });
  }; 

export const getTasksByID =
  (payload: NotificationPayload) =>
  async (dispatch: Dispatch<ContextAction>) => {
    dispatch({ type: SET_CONTEXT_LOADING });
    const res: TaskResponse = await Services.get(
      "frontstore/getTasks",
      payload
    );
    if (res.status) {
      dispatch({
        type: SET_CONTEXT_SUCCESS,
        key: "task",
        value: res.data.data[0],
      });
    } else {
      dispatch({ type: SET_CONTEXT_FAIL, key: "task", value: [] });
    }
  };

export const creatTask =
  (payload: NotificationPayload) =>
  async (dispatch: Dispatch<ContextAction>) => {
    dispatch({ type: SET_CONTEXT_LOADING });
    const res: TaskResponse = await Services.post(
      "frontstore/createTask",
      payload
    );
    if (res.status) {
      dispatch({
        type: SET_CONTEXT_SUCCESS,
        key: "loading",
        value: false
      });
    } else {
      dispatch({
        type: SET_CONTEXT_FAIL,
        key: "message",
        value: "Unable to create task",
      });
    }
  };
export const updateTask =
  (payload: NotificationPayload) =>
  async (dispatch: Dispatch<ContextAction>) => {
    dispatch({ type: SET_CONTEXT_LOADING });
    const res: TaskResponse = await Services.post(
      "frontstore/editTask",
      payload
    );
    if (res.status) {
      dispatch({
        type: SET_CONTEXT_SUCCESS,
        key: "loading",
        value: false
      });
    } else {
      dispatch({
        type: SET_CONTEXT_FAIL,
        key: "message",
        value: "Unable to update task",
      });
    }
  };
export const treatTask =
  (payload: NotificationPayload) =>
  async (dispatch: Dispatch<ContextAction>) => {
    dispatch({ type: SET_CONTEXT_LOADING });
    const res: TaskResponse = await Services.post(
      "frontstore/treatTask",
      payload
    );
    if (res.status) {
      dispatch({
        type: SET_CONTEXT_SUCCESS,
        key: "loading",
        value: false
      });
    } else {
      dispatch({
        type: SET_CONTEXT_FAIL,
        key: "message",
        value: "Unable to update task",
      });
    }
  };

export const getNewTasks = async (payload: NotificationPayload) => {
  const res: TaskResponse = await Services.get(
    "frontstore/getNewTask",
    payload
  );
  if (res.status) {
    return res.data;
  } else {
    return res.data;
  }
};

export const deletTask =
  (payload: NotificationPayload) =>
  async (dispatch: Dispatch<ContextAction>) => {
    dispatch({ type: SET_CONTEXT_LOADING });
    const res: TaskResponse = await Services.get(
      "frontstore/deleteTask",
      payload
    );
    if (res.status) {
      dispatch({
        type: SET_CONTEXT_SUCCESS,
        key: "loading",
        value: false
      });
    } else {
      dispatch({ type: SET_CONTEXT_FAIL, key: "task", value: [] });
    }
  };