import "./Header.css";
import { ThemeButton } from "../../Components";
import { useGetTheme } from "../../Hooks/useGetTheme";

export const Header = () => {
  const theme = useGetTheme();
  return (
    <header className={`header-${theme}-theme ${theme}-theme`}>
      <h3>Where in the world?</h3>
      <ThemeButton />
    </header>
  );
};
