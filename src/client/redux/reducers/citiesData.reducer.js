import { SELECT_CITY, DESELECT_CITY } from "../actions";
import citiesData from "../../utils/dataHandler";

const initState = citiesData();

const reducer = (state = initState, action) => {
  if (action.type === SELECT_CITY) {
    return state.map((city) => {
      if (city.name === action.payload) return { ...city, isSelected: true };
      return { ...city };
    });
  }

  if (action.type === DESELECT_CITY) {
    return state.map((city) => {
      if (city.name === action.payload) return { ...city, isSelected: false };
      return { ...city };
    });
  }

  return state;
};

export default reducer;
