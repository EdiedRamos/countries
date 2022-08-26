import "./ThemeButton.css";

import { useDispatch } from "react-redux";
import { setTheme } from "../../Services/Store/Actions/themeActions";
import { useGetTheme } from "../../Hooks/useGetTheme";

export const ThemeButton = () => {
  const dispatch = useDispatch();
  const theme = useGetTheme();
  return (
    <div className="theme-mode" onClick={() => dispatch(setTheme())}>
      <ion-icon name={`${theme.startsWith("d") ? "sunny" : "moon"}`}></ion-icon>
      <p>{`${theme.startsWith("d") ? "Light" : "Dark"} `}Mode</p>
    </div>
  );
};
