import "./Search.css";
import { useSetCountry } from "../../Hooks/usetSetCountry";
import { useGetTheme } from "../../Hooks/useGetTheme";

export const Search = () => {
  const { country, setCountry } = useSetCountry();
  const theme = useGetTheme();
  return (
    <label className={`label-search ${theme}-theme`}>
      <ion-icon name="search"></ion-icon>
      <input
        type="text"
        id="search-country"
        placeholder="Search for a country..."
        className="search"
        value={country}
        onChange={(evt) => setCountry(evt.target.value)}
      />
      <ion-icon
        name="close-circle"
        id="close-circle"
        onClick={() => setCountry("")}
      ></ion-icon>
    </label>
  );
};
