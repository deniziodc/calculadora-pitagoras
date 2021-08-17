/**
 * @name calcHipotenusa
 * @description calcula o valor da hipotenusa de um triângulo retângulo
 * sendo conhecido o valor dos dois catetos.
 * @param {string} inputB representa o id referente ao input de entrada do cateto B
 * @param {string} inputC representa o id referente ao input de entrada do cateto C
 * 
 * @returns void
 */
function calcHipotenusa(inputB, inputC) {
  var catetoB = parseFloat(document.getElementById(inputB).value);
  var catetoC = parseFloat(document.getElementById(inputC).value);
  if (!validacao(catetoB, catetoC)) {
    printResultado(
      "Erro",
      "O Triângulo não pode ter uma das arestas com o valor de zero"
    );
  } else {
    var hipotenusa = Math.sqrt(Math.pow(catetoB, 2) + Math.pow(catetoC, 2));
    printResultado("Hipotenusa", hipotenusa);
  }
}

/**
 * @name calcCateto
 * @description dado o valores de um dos catetos e da hipotenusa calcula o valor do cateto faltante.
 * @param {string} inputHipo representa o id referente ao input de entrada da Hipotenusa
 * @param {string} inputCate representa o id referente ao input de entrada do Cateto conhecido
 *
 * @returns void
 */
function calcCateto(inputHipo, inputCate) {
  var hipotenusa = parseFloat(document.getElementById(inputHipo).value);
  var cateto = parseFloat(document.getElementById(inputCate).value);
  if (hipotenusa < cateto) {
    printResultado(
      "Erro",
      "O Cateto não pode ser maior que o valor da Hipotenusa"
    );
  } else if (hipotenusa > cateto && !validacao(hipotenusa, cateto)) {
    printResultado(
      "Erro",
      "O Triângulo não pode ter uma das arestas com o valor de zero"
    );
  } else {
    var conta = Math.sqrt(Math.pow(hipotenusa, 2) - Math.pow(cateto, 2));
    printResultado("Cateto", conta);
  }
}

/**
 * @name limpaResultados
 * @description Apaga os elementos da Div criada para receber os resultados das funções calcHipotenusa e calcCateto
 *
 * @returns void
 */
function limpaResultados() {
  var resultado = document.getElementById("resultado");
  if (resultado.childNodes.length > 0) {
    for (var x = 0; x <= resultado.childNodes.length; x++) {
      resultado.removeChild(resultado.childNodes[0]);
    }
  }
}

/**
 * @name printResultado
 * @description cria elemento com o resultado das funções calcHipotenusa ou calcCateto e adiciona esse elemento na div com id resultado
 * @param {string} origem corresponde ao elemento calculado, hipotenusa ou cateto.
 * @param {float} valor corresponde ao valor calculado pelas funções calcHipotenusa ou calcCateto
 *
 * @returns void
 */
function printResultado(origem, valor) {
  limpaResultados();
  var resposta = document.getElementById("resultado");
  var titulo = document.createElement("h3");
  titulo.innerHTML = "Resultado";

  var text = document.createElement("h3");
  text.innerHTML = `${origem} = ${valor}`;
  resposta.appendChild(titulo);
  resposta.appendChild(text);
}

/**
 * @name validacao
 * @description valida se uma ou mais arestas do triângulo retângulo é igual a zero.
 * @param {float} ladoA aresta conhecida no triângulo retângulo
 * @param {float} ladoB aresta conhecida no triângulo retângulo
 *
 * @returns {boolean} true ou false
 */
function validacao(ladoA, ladoB) {
  return ladoA == 0 || ladoB == 0 ? false : true;
}
