export const getCountries = () => {
  return fetch(
    "https://restcountries.com/v3.1/all?fields=name,capital,currencies,flag,population,borders,languages,subregion,nativeName,tld"
  ).then((result) => result.json());
};
