import { useSelector } from "react-redux";

import { Card } from "../../Components";

import { SkeletonCards } from "../";

export const Cards = () => {
  const countries = useSelector((store) => store.listReducer.filtered);

  return (
    <div className="cards-container">
      {countries.length === 0 ? (
        <SkeletonCards />
      ) : (
        countries.map((country) => (
          <Card key={country.name.common} {...country} />
        ))
      )}
    </div>
  );
};
