class ConversaoMoeda {
  constructor(nome, valorConvertido, dataComparacao) {
    const auxiliar = nome.indexOf("/");
    this.codigoPrimario = nome.slice(0, auxiliar);
    this.codigoSecundario = nome.slice(auxiliar + 1);
    this.valorComparado = 1;
    this.valorConvertido = valorConvertido.toFixed(3);
    this.dataComparacao = dataComparacao;
  }
}

// const moeda = new ConversaoMoeda(
//   "Bitcoin/Real Brasileiro",
//   190.9,
//   "2022-04-17 17:14:06"
// );

// console.log(moeda);
