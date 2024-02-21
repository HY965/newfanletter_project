import letter from "../../redux/modules/letter";
import activeItem from "../../redux/modules/activeItem";
import authSlice from "../../redux/modules/authSlice";
import { configureStore, combineReducers } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
  letter,
  activeItem,
  authSlice,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
