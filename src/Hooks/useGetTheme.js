import { useSelector } from "react-redux";

const dark = "hsl(207, 26%, 17%)";
const light = "hsl(0, 0%, 98%)";

const saveTheme = (theme) => {
  localStorage.setItem("theme", theme);
};

const changeBodyColor = (theme) => {
  document.querySelector("body").style.background =
    theme === "dark" ? dark : light;
};

export const useGetTheme = () => {
  const theme = useSelector((store) => store.themeReducer.theme);
  changeBodyColor(theme);
  saveTheme(theme);
  return theme;
};
