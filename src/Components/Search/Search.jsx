import "./Search.css";

export const Search = () => {
  return (
    <label className="label-search">
      <ion-icon name="search"></ion-icon>
      <input type="text" className="search" />
    </label>
  );
};
