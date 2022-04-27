const botao = document.getElementById("botao-buscar");
botao.addEventListener("click", comecaConversao);


function mostrarResultado(data) {

  const obj = Object.entries(data)[0][1];
  const novaConversao = new ConversaoMoeda(obj.name, obj.ask, obj.create_date);
  const hoje = new Date()
  const horaAtual = hoje.getHours() +":"+ hoje.getMinutes()
  const div = document.querySelector(".resultado-busca");

  div.innerHTML = `
  <p  class = "moeda-para-conversao">${novaConversao.valorComparado} ${novaConversao.codigoPrimario} é igual a</p>
  <h2 class = "valor-convertido">${novaConversao.valorConvertido} ${novaConversao.codigoSecundario}</h2>
  <p  class = "horario">Atualizado às ${horaAtual}</p> `;
}
 



function comecaConversao() {
  const moedaInicial = document.getElementById("inicial");
  const moedaSecundaria = document.getElementById("secundario");
  const stringParametro = `${moedaInicial.value}-${moedaSecundaria.value}`;

  
  montaRequest(stringParametro);
}
