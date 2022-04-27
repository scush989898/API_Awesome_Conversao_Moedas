class ConversaoMoeda {
  constructor(nome, valorConvertido, dataComparacao) {
    const auxiliar = nome.indexOf("/");
    this.codigoPrimario = nome.slice(0, auxiliar);
    this.codigoSecundario = nome.slice(auxiliar + 1);
    this.valorComparado = 1;
    this.valorConvertido = parseFloat(valorConvertido).toFixed(3);
    this.dataComparacao = dataComparacao;
  }
}
