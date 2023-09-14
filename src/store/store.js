import { configureStore } from "@reduxjs/toolkit";
import cityReducer from "./reducers/cityReducers";
import itineraryReducer from "./reducers/itineraryReducers";
import userReducer from "./reducers/userReducer";

export const store = configureStore({
  reducer: {
    cityReducer: cityReducer,
    itineraryReducer: itineraryReducer,
    userReducer: userReducer,
  },
});
