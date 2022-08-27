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
  console.log(info);
  return info ? (
    <div
      id="country-detail"
      className={`${theme}-theme ${theme}-detail-background`}
    >
      <img
        src={info.flags.svg}
        id="country-flag"
        alt={`flag from ${info.name.common}`}
      />
      <div>
        <div>
          <h3>{info.name.common}</h3>
          <p className="card-info-title">Navite Name:</p>
          <p>
            {info.name.nativeName[getKeys(info.name.nativeName)[0]].official}
          </p>
          <p className="card-info-title">Population:</p>
          <p>{Intl.NumberFormat().format(info.population)}</p>
          <p className="card-info-title">Region:</p>
          <p>{info.region}</p>
          <p className="card-info-title">Sub Region:</p>
          <p>{info.subregion}</p>
          <p className="card-info-title">Capital:</p>
          <p>{info.capital}</p>
          <p className="card-info-title">Top Level Domain:</p>
          <p>{info.tld}</p>
          <p className="card-info-title">Currencies:</p>
          <p>{info.currencies[getKeys(info.currencies)[0]].name}</p>
          <p className="card-info-title">Languages:</p>
          <div>
            {getListFromKeys(info?.languages).map((language) => (
              <p key={language}>{language}</p>
            ))}
          </div>
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
  ) : (
    <p className="loading dark-theme">...Loading</p>
  );
};
