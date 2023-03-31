import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import { persistStore } from "redux-persist";
import thunk from "redux-thunk";
import reducers from "./reducers";

const middleWares = [thunk];

if (process.env.NODE_ENV === "development") middleWares.push(logger);

export const store = configureStore({
  reducer: reducers,
  devTools: process.env.NODE_ENV === "development",
  middleware: middleWares,
});

export const persistor = persistStore(store);
export default { store, persistor };
