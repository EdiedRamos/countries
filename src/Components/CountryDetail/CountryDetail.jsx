import "./CountryDetail.css";
import { useGetCountry } from "../../Hooks/useGetCountry";
import { useGetTheme } from "../../Hooks/useGetTheme";

const getKeys = (object) => {
  return Object.keys(object);
};

const getListFromKeys = (object) => {
  if (!object) return;
  return getKeys(object).map((key) => object[key]);
};

export const CountryDetail = ({ country }) => {
  const info = useGetCountry(country);
  const theme = useGetTheme();
  if (info.status)
    return <p className={`loading ${theme}-theme`}>{info.status}</p>;
  return (
    <div className={`country-detail ${theme}-theme ${theme}-detail-background`}>
      <img
        src={info.flags.svg}
        id="country-flag"
        alt={`flag from ${info.name.common}`}
      />
      <div className="country-detail__info">
        <h3>{info.name.common}</h3>
        <div className="country-detail__first-group">
          <p>
            <span className="card-info-title">Navite Name:</span>{" "}
            {info.name.nativeName[getKeys(info.name.nativeName)[0]].official}
          </p>
          <p>
            <span className="card-info-title">Population:</span>{" "}
            {Intl.NumberFormat().format(info.population)}
          </p>
          <p>
            <span className="card-info-title">Region:</span> {info.region}
          </p>
          <p>
            <span className="card-info-title">Sub Region:</span>{" "}
            {info.subregion}
          </p>
          <p>
            <span className="card-info-title">Capital:</span> {info.capital}
          </p>
        </div>
        <div className="country-detail__second-group">
          <p>
            <span className="card-info-title">Top Level Domain:</span>{" "}
            {info.tld}
          </p>
          <p>
            <span className="card-info-title">Currencies:</span>{" "}
            {info.currencies[getKeys(info.currencies)[0]].name}
          </p>
          <p>
            <span className="card-info-title">Languages:</span>{" "}
            {getListFromKeys(info?.languages)
              .map((language) => language)
              .join(", ")}
          </p>
        </div>
        <div id="border-countries">
          <p className="card-info-title">Border Countries:</p>
          <div id="border-list">
            {info.borders.map((border) => (
              <p className={`${theme}-theme`} key={border}>
                {border}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
