import { SEARCH, SET_LIST, SET_REGION } from "../Constants";

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
    case SEARCH: {
      const { country, region } = state.queries;
      let filtered = state.countries;
      if (country) {
        filtered = filtered.filter((_country) =>
          _country.name.toLowerCase().includes(country)
        );
      }
      if (region) {
        filtered = filtered.filter((_country) => _country.region === region);
      }
      return {
        ...state,
        filtered,
      };
    }
    case SET_LIST: {
      return {
        ...state,
        countries: action.payload.countries,
        filtered: action.payload.countries,
      };
    }
    case SET_REGION: {
      const { region } = action.payload;
      return {
        ...state,
        queries: {
          ...state.queries,
          region,
        },
      };
    }
    default:
      return state;
  }
};
