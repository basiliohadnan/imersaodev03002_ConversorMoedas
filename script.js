function ResgatarValorUSD() {
    var valorValido = false;
    var elementoValorUSD = document.getElementById("valorEmUSD");
    var valorEmUSD = elementoValorUSD.value;
    if (valorEmUSD == 00) {
      alert("Valor deve ser diferente de 0!");
    } else {
      valorEmUSDNumerico = parseFloat(valorEmUSD);
      valorValido = true;
    }
    return valorValido;
  }
  
  function ConverterEmBTC() {
    var moedaConvertidaEmBTC = valorEmUSDNumerico * 0.000021;
    var elementoMoedaConvertidaEmBTC = document.getElementById(
      "moedaConvertidaEmBTC"
    );
    var moedaConvertidaEmBTCFixado = moedaConvertidaEmBTC.toFixed(7);
    var moedaConvertidaEmBTC =
      "O resultado em BTC é " + moedaConvertidaEmBTCFixado;
    return (elementoMoedaConvertidaEmBTC.innerHTML = moedaConvertidaEmBTC);
  }
  
  function ConverterEmBRL() {
    if (!ResgatarValorUSD()) return;
    var moedaConvertida = valorEmUSDNumerico * 5;
    var elementoMoedaConvertida = document.getElementById(
      "moedaConvertida"
    );
    var moedaConvertidaFixado = moedaConvertida.toFixed(2);
    var moedaConvertida =
      "O resultado em BRL é " + moedaConvertidaFixado;
    elementoMoedaConvertida.innerHTML = moedaConvertida;
  
    ConverterEmBTC();
  }

  function ConverterEmJPY() {
    if (!ResgatarValorUSD()) return;
    var moedaConvertida = valorEmUSDNumerico * 109.14;
    var elementoMoedaConvertida = document.getElementById(
      "moedaConvertida"
    );
    var moedaConvertidaFixado = moedaConvertida.toFixed(2);
    var moedaConvertida =
      "O resultado em JPY é " + moedaConvertidaFixado;
    elementoMoedaConvertida.innerHTML = moedaConvertida;
  
    ConverterEmBTC();
  }
  
  function ConverterEmGBP() {
    if (!ResgatarValorUSD()) return;
    var moedaConvertida = valorEmUSDNumerico * 0.72;
    var elementoMoedaConvertida = document.getElementById(
      "moedaConvertida"
    );
    var moedaConvertidaFixado = moedaConvertida.toFixed(2);
    var moedaConvertida =
      "O resultado em GBP é " + moedaConvertidaFixado;
    elementoMoedaConvertida.innerHTML = moedaConvertida;
  
    ConverterEmBTC();
  }

  function ConverterEmF() {
    var elementoTemperatura = document.getElementById("temperaturaEmCelcius");
    var elementoValorConvertidoEmF = document.getElementById("temperaturaConvertida");
    var elementoTemperaturaValor = parseFloat(elementoTemperatura.value);
    var temperaturaConvertida = "O resultado em Fahrenheit é: " + ((elementoTemperaturaValor - 32) / 1.8).toFixed(2) + " ºF";
    elementoValorConvertidoEmF.innerHTML = temperaturaConvertida;
}

function ConverterEmK() {
  var elementoTemperatura = document.getElementById("temperaturaEmCelcius");
  var elementoValorConvertidoEmK = document.getElementById("temperaturaConvertida");
  var elementoTemperaturaValor = parseFloat(elementoTemperatura.value);
  var temperaturaConvertida = "O resultado em Kelvin é: " + (elementoTemperaturaValor + 273).toFixed(2) + " K";
  elementoValorConvertidoEmK.innerHTML = temperaturaConvertida;
}

function ConverterEmAnosLuz() {
  var elementoDistancia = document.getElementById("inputKilometros");
  var elementoValorConvertidoEmLy = document.getElementById("valorConvertidoEmLy");
  var elementoDistanciaValor = parseFloat(elementoDistancia.value);
  var valorConvertidoEmLy = "O resultado em Anos Luz é: " + (elementoDistanciaValor / 9500000000).toFixed(8) + " ly";
  elementoValorConvertidoEmLy.innerHTML = valorConvertidoEmLy;
}
