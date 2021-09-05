import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import productReducer from "./productSlice";
import commonReducer from "./commonSlice";

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["common"],
};

const rootReducer = combineReducers({
  products: productReducer,
  common: commonReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
