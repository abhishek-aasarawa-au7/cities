import { createStore } from "redux";
import { persistStore } from "redux-persist";

// root reducer
import rootReducer from "./reducers";

export const store = createStore(rootReducer);

export const persister = persistStore(store);
