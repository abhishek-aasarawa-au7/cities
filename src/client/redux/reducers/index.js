import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

// reducers
import cityReducer from "./city.reducer";
import citiesDataReducer from "./citiesData.reducer";

const rootReducer = combineReducers({
  cities: cityReducer,
  citiesData: citiesDataReducer,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cities", "citiesData"],
};

export default persistReducer(persistConfig, rootReducer);
