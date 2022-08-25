export const getCountries = () => {
  return fetch(
    "https://restcountries.com/v3.1/all?fields=name,capital,currencies,flags,population,borders,languages,subregion,nativeName,tld,region"
  ).then((result) => result.json());
};
