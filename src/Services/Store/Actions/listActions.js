import { SEARCH, SET_LIST, SET_REGION } from "../Constants";

import { getCountries } from "../../Apis/getCountries";

export const search = () => {
  return {
    type: SEARCH,
  };
};

export const setList = () => {
  return (dispatch) => {
    getCountries().then((res) =>
      dispatch({
        type: SET_LIST,
        payload: {
          countries: res,
        },
      })
    );
  };
};

export const setRegion = (region) => {
  return {
    type: SET_REGION,
    payload: {
      region,
    },
  };
};
