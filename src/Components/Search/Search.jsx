import "./Search.css";

export const Search = () => {
  return (
    <label className="label-search dark-theme">
      <ion-icon name="search"></ion-icon>
      <input
        type="text"
        placeholder="Search for a country..."
        className="search"
      />
    </label>
  );
};
