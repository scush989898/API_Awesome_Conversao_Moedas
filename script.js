function mostrarResultado(data) {
  const obj = Object.entries(data)[0][1];
  const novaConversao = new ConversaoMoeda(obj.name, obj.ask, obj.create_date);
  const div = document.querySelector(".resultado-busca");
  div.innerHTML = `
  <p>${novaConversao.valorComparado} ${novaConversao.codigoPrimario} é igual a</p>
  <h2>${novaConversao.valorConvertido} ${novaConversao.codigoSecundario}</h2>
  <p>Atualizado em:  ${novaConversao.dataComparacao}</p> `;
}

function registraClique() {
  const botao = document.getElementById("botao-buscar");
  botao.addEventListener("click", comecaConversao);
}
registraClique();

function comecaConversao() {
  const moedaInicial = document.getElementById("inicial");
  const moedaSecundaria = document.getElementById("secundario");
  const stringParametro = `${moedaInicial.value}-${moedaSecundaria.value}`;
  montaRequest(stringParametro);
}
