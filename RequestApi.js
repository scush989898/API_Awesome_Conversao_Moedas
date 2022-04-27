// function montaRequest(moedasComparadas) {
//   let request = new XMLHttpRequest();
//   request.onload = function () {
//     console.log(this);
//     let data = JSON.parse(this.responseText);
//     mostrarResultado(data);
//   };
//   request.open(
//     "GET",
//     `https://economia.awesomeapi.com.br/json/last/${moedasComparadas}`
//   );
//   request.send();
// }

function montaRequest(moedasComparadas) {
  fetch(`https://economia.awesomeapi.com.br/json/last/${moedasComparadas}`)
    .then((response) => response.json())
    .then((data) => mostrarResultado(data));
}
