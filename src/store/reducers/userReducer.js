import { createReducer } from "@reduxjs/toolkit";

import {
  user_photo,
  user_login,
  user_token,
  user_register,
  user_logout,
  user_login_google,
} from "../actions/userActions";

const initialState = {
  user: null,
  token: null,
};

const userReducer = createReducer(initialState, (builder) =>
  builder
    .addCase(user_photo, (state, action) => {
      return {
        ...state,
        photo: action.payload.photo,
      };
    })
    .addCase(user_login.fulfilled, (state, action) => {
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
      };
    })
    .addCase(user_token, (state, action) => {
      return {
        ...state,
        user: action.payload.user,
      };
    })
    .addCase(user_register.fulfilled, (state, action) => {
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
      };
    })
    .addCase(user_logout, (state, action) => {
      return {
        ...state,
        user: null,
        token: null,
      };
    })
    .addCase(user_login_google.fulfilled, (state, action) => {
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
      };
    })
);

export default userReducer;
