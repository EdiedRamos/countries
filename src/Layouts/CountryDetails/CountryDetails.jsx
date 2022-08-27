import "./CountryDetails.css";
import { GoBack, CountryDetail } from "../../Components";

export const CountryDetails = (props) => {
  return (
    <div id="country-details">
      <GoBack to="/" />
      <CountryDetail country={props.country} />
    </div>
  );
};
