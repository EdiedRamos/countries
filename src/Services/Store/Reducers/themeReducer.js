import { SET_THEME } from "../Constants";

const initialState = {
  // true is for DarkTheme and false for LightTheme
  theme: true,
};

export const themeReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_THEME:
      return {
        theme: !state.theme,
      };
    default:
      return state;
  }
};
