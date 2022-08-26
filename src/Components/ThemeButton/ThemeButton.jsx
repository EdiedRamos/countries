import "./ThemeButton.css";

import { useDispatch } from "react-redux";
import { setTheme } from "../../Services/Store/Actions/themeActions";

export const ThemeButton = () => {
  const dispatch = useDispatch();

  return (
    <div className="theme-mode" onClick={() => dispatch(setTheme())}>
      <ion-icon name="moon"></ion-icon>
      <p>Dark Mode</p>
    </div>
  );
};
