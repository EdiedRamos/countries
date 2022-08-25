import { SEARCH, SET_LIST } from "../Constants";

const initialState = {
  countries: [],
  filtered: [],
  queries: {
    country: "",
    region: "",
  },
};

export const listReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH:
      return state;
    case SET_LIST:
      return {
        ...state,
        countries: action.payload.countries,
        filtered: action.payload.countries,
      };
    default:
      return state;
  }
};
