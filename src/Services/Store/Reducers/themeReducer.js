import { SET_THEME } from "../Constants";

const getThemeFromLS = () => {
  return localStorage.getItem("theme") || "dark";
};

const initialState = {
  theme: getThemeFromLS(),
};

export const themeReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_THEME:
      return {
        theme: state.theme.startsWith("d") ? "light" : "dark",
      };
    default:
      return state;
  }
};
