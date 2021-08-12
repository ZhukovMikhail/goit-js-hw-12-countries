// import './sass/main.scss';
import fetchCountries from '../fetchCountries';

const refs = {
  input: document.querySelector('.input__text'),
};

refs.input.addEventListener('input', onInput);

function onInput(e) {
  const country = e.currentTarget.value;
  console.log(country);

  fetchCountries('country');
}
