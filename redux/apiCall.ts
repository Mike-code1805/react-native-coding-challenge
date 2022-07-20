// import { loginFailure, loginStart, loginSuccess } from "./userRedux";
import { publicRequest } from "../request/requestMethods";
import { getUserFailure, getUserStart, getUserSuccess, loginFailure, loginStart, loginSuccess, singupFailure, singupStart, singupSuccess } from "./store";

export const login = async (dispatch: any, user: any) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("https://reqres.in/api/login", user);
    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure());
  }
};

export const register = async (dispatch: any, user: any) => {
  dispatch(singupStart());

  try {
    const res = await publicRequest.post("https://reqres.in/api/register", user);
    dispatch(singupSuccess(res.data));
  } catch (err) {
    dispatch(singupFailure());
  }
};

export const getUser = async (dispatch: any, user: any) => {
  dispatch(getUserStart());
  try {
    const res = await publicRequest.get(`https://reqres.in/api/users/${user.id}`);
    dispatch(getUserSuccess(res.data.data));
  } catch (err) {
    dispatch(getUserFailure());
  }
};

export const getUserByEmail = async (dispatch: any, user: any) => {
  dispatch(getUserStart());
  try {
    const res = await publicRequest.get(`https://reqres.in/api/users?email=${user.email}`);
    dispatch(getUserSuccess(res.data.data));
  } catch (err) {
    dispatch(getUserFailure());
  }
};
