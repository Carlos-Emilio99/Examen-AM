const ciudad = document.getElementById("ciudad");
const actual = document.getElementById("temperaturaActual");
const minima = document.getElementById("temperaturaMin");
const maxima = document.getElementById("temperaturaMax");
const nombreCiudad = document.getElementById("nombreCiudad");

const buscar = document.getElementById("botonBuscar");
buscar.addEventListener("click", function () {
  if (ciudad.value === "") {
    alert("Falta el nombre de la ciudad");
  } else {
    apiURL =
      "https://api.openweathermap.org/data/2.5/weather?q=" +
      ciudad.value +
      "&appid=f9502378cb056e82c7c8d54fe55d6413";
    getApiData(apiURL);
  }
});

function mostrarClima(data) {
  let temp = kelvinCelcius(data.main.temp);
  let minimo = kelvinCelcius(data.main.temp_min);
  let maximo = kelvinCelcius(data.main.temp_max);
  nombreCiudad.innerHTML = ciudad.value;
  actual.innerHTML = temp;
  minima.innerHTML = minimo;
  maxima.innerHTML = maximo;
  document.getElementById("botonBuscar").style.display = "none";
}

function kelvinCelcius(kelvin) {
  return kelvin - 273.15;
}
