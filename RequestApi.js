function montaRequest(moedasComparadas) {
  fetch(`https://economia.awesomeapi.com.br/json/last/${moedasComparadas}`)
    .then((response) => response.json())
    .then((data) => mostrarResultado(data));
}
