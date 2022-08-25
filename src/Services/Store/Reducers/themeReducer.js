import { LIGHT_THEME, DARK_THEME } from "../Constants";

const initialState = {
  theme: "dark-theme",
};

export const themeReducer = (state = initialState, action) => {
  switch (action.type) {
    case DARK_THEME:
      return {
        theme: "dark-theme",
      };
    case LIGHT_THEME:
      return {
        theme: "light-theme",
      };
    default:
      return state;
  }
};
