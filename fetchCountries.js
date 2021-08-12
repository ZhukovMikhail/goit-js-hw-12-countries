// Есть файл fetchCountries.js с дефолтным экспортом функции fetchCountries(searchQuery), возвращающей промис с массивом стран, результат запроса к API.
export default function fetchCountries(searchQuery) {
  const url = `https://restcountries.eu/rest/v2/name/${searchQuery}`;
  const options = {
    Headers: {
      Autorization: '',
    },
  };

  return fetch(url, options)
    .then(resp => resp.json())
    .then(console.log);
}
