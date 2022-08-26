import "./Header.css";

import { ThemeButton } from "../../Components";

export const Header = () => {
  return (
    <header className="header-dark-theme dark-theme">
      <h3>Where in the world?</h3>
      <ThemeButton />
    </header>
  );
};
