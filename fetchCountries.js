// Есть файл fetchCountries.js с дефолтным экспортом функции fetchCountries(searchQuery), возвращающей промис с массивом стран, результат запроса к API.
export default function fetchCountries() {
  const url = 'https://restcountries.eu/#api-endpoints-name';
  const options = {
    Headers: {
      Autorization: '',
    },
  };
  fetch(url, options)
    .then(resp => resp.json())
    .then(console.log);
}
