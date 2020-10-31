import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

// reducers
import cityReducer from "./city.reducer";

const rootReducer = combineReducers({
  cities: cityReducer,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cities"],
};

export default persistReducer(persistConfig, rootReducer);
