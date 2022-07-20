import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";

interface User {
  id?: number;
  avatar?: string;
  first_name?: string;
  last_name?: string;
  username: string;
  email: string;
  password: string;
}

interface TodosSliceState {
  user: User,
  isFetching: boolean,
  error: boolean,
}

const initialState: TodosSliceState = {
  user: {
    id: 0,
    username: "",
    password: "", 
    email: "",
  },
  isFetching: false,
  error: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginStart: (state) => {
      state.isFetching = true;
    },
    loginSuccess: (state, action) => {
      state.isFetching = false;
      state.user = action.payload;
    },
    loginFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    singupStart: (state) => {
      state.isFetching = true;
    },
    singupSuccess: (state, action) => {
      state.isFetching = false;
      state.user = action.payload;
    },
    singupFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    logout: (state) => {
      state.user = {
        id: 0,
        username: "",
        password: "", 
        email: "",
      };
      state.isFetching = false;
      state.error = false;
    },
    getUserStart: (state) => {
      state.isFetching = true;
    },
    getUserSuccess: (state, action) => {
      state.isFetching = false;
      state.user = action.payload;
    },
    getUserFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
  },
});

export const { loginStart, loginSuccess, loginFailure, singupStart, singupSuccess, singupFailure, logout, getUserStart, getUserSuccess, getUserFailure } = userSlice.actions;

const store = configureStore({
  reducer: {
    users: userSlice.reducer,
  },
});

type RootState = ReturnType<typeof store.getState>;

export const selectUsers = (state: RootState) => state.users;

export default store;
