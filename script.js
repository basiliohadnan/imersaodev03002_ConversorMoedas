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
    var valorConvertidoEmBTC = valorEmUSDNumerico * 0.000021;
    var elementoValorConvertidoEmBTC = document.getElementById(
      "valorConvertidoEmBTC"
    );
    var valorConvertidoEmBTCFixado = valorConvertidoEmBTC.toFixed(7);
    var valorConvertidoEmBTC =
      "O resultado em BTC é " + valorConvertidoEmBTCFixado;
    return (elementoValorConvertidoEmBTC.innerHTML = valorConvertidoEmBTC);
  }
  
  function ConverterEmBRL() {
    if (!ResgatarValorUSD()) return;
    var valorConvertidoEmBRL = valorEmUSDNumerico * 5;
    var elementoValorConvertidoEmBRL = document.getElementById(
      "valorConvertidoEmBRL"
    );
    var valorConvertidoEmBRLFixado = valorConvertidoEmBRL.toFixed(2);
    var valorConvertidoEmBRL =
      "O resultado em BRL é " + valorConvertidoEmBRLFixado;
    elementoValorConvertidoEmBRL.innerHTML = valorConvertidoEmBRL;
  
    ConverterEmBTC();
  }
  
  function ConverterEmJPY() {
    if (!ResgatarValorUSD()) return;
    var valorConvertidoEmJPY = valorEmUSDNumerico * 109.14;
    var elementoValorConvertidoEmJPY = document.getElementById(
      "valorConvertidoEmJPY"
    );
    var valorConvertidoEmJPYFixado = valorConvertidoEmJPY.toFixed(2);
    var valorConvertidoEmJPY =
      "O resultado em JPY é " + valorConvertidoEmJPYFixado;
    elementoValorConvertidoEmJPY.innerHTML = valorConvertidoEmJPY;
  
    ConverterEmBTC();
  }
  
  function ConverterEmGBP() {
    if (!ResgatarValorUSD()) return;
    var valorConvertidoEmGBP = valorEmUSDNumerico * 0.72;
    var elementoValorConvertidoEmGBP = document.getElementById(
      "valorConvertidoEmGBP"
    );
    var valorConvertidoEmGBPFixado = valorConvertidoEmGBP.toFixed(2);
    var valorConvertidoEmGBP =
      "O resultado em GBP é " + valorConvertidoEmGBPFixado;
    elementoValorConvertidoEmGBP.innerHTML = valorConvertidoEmGBP;
  
    ConverterEmBTC();
  }
  