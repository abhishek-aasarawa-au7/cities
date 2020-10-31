import { v4 as uuidv4 } from "uuid";

import { ADD_CITY, DELETE_CITY, EDIT_CITY } from "../actions";

const demoCity = {
  id: 0,
  name: "",
};

const initState = [];

const reducer = (state = initState, action) => {
  if (action.type === ADD_CITY) {
    return [...state, { ...demoCity, name: action.payload, id: uuidv4() }];
  }

  if (action.type === DELETE_CITY) {
    return state.reduce((arr, city) => {
      if (city.id !== action.payload) return [...arr, city];
      else return [...arr];
    }, []);
  }

  if (action.type === EDIT_CITY) {
    return state.reduce((arr, city) => {
      if (city.id === action.payload.id)
        return [...arr, { ...city, name: action.payload.name }];
      else return [...arr, city];
    }, []);
  }

  return state;
};

export default reducer;
