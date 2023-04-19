import { configureStore } from "@reduxjs/toolkit";
import { contactsSlice } from "./sliceContacts";
import { filterReducer } from "./sliceFilter";
import { combineReducers } from "redux";

import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import thunk from "redux-thunk";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["contacts"],
};

const rootReducer = combineReducers({
  contacts: contactsSlice.reducer,
  filter: filterReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
});
export const persistor = persistStore(store);
