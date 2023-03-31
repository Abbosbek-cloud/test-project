import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const reducers = combineReducers({});

export default persistReducer(
  { key: "root", storage, whiteList: [] },
  reducers
);
