import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { authRequestToServer } from "../requests";

export const authActionRegister = createAsyncThunk(
  "auth/register",
  authRequestToServer
);

export const authActionLogin = createAsyncThunk(
  "auth/login",
  authRequestToServer
);

const initialState = {
  token: "",
  subdomain: "",
  isLoading: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: {
    // register functionality
    [authActionRegister.pending]: (state) => {
      state.isLoading = true;
    },
    [authActionRegister.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.token = payload.token;
      state.subdomain = payload.subdomain;
    },
    [authActionRegister.rejected]: (state) => {
      state.isLoading = false;
    },
    // login functionality
    [authActionLogin.pending]: (state) => {
      state.isLoading = true;
    },
    [authActionLogin.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.token = payload.token;
      state.subdomain = payload.subdomain;
    },
    [authActionLogin.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

export default authSlice.reducer;
