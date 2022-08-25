import { SEARCH, SET_LIST } from "../Constants";

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
