import { useParams } from "react-router-dom";
import { useSetListStore } from "../../Hooks/useSetListStore";

import { CountryDetails } from "../../Layouts";

export const Details = () => {
  useSetListStore();
  const { country } = useParams();

  return <CountryDetails country={country} />;
};
