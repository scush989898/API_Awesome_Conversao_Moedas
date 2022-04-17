function montaRequest(moedasComparadas) {
  let request = new XMLHttpRequest();
  request.onload = function () {
    let data = JSON.parse(this.responseText);
    console.log(data);
    mostrarResultado(data);
  };
  request.open(
    "GET",
    `https://economia.awesomeapi.com.br/json/last/${moedasComparadas}`
  );
  request.send();
}
