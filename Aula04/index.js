//**var numero = parseFloat(prompt("Digite um numero:"))

///if ((numero >= 10) && (numero <= 50)) {
 // alert("Numero esta dentro do esperado")
//}
//else{
 // console.log("Numero errado, tente de novo")
//}  


///////////////////////////////////////////////////////////////////////////////////////////

//function saudade(){
  //console.log("Ola, estudantes");

//}
//saudade();


/////////////////////////////////////////////////////////////////////////////////////////////////
//function recebeNumero(){
 // var numero = parseFloat(prompt("Digite um numero:"));

 // if(numero % 2 == 0) {
 //   alert("Numero digitado é par")

//  }
 // else{
 //   alert("Numero digitado é Impar")

//  }

//}
//recebeNumero();
//recebeNumero();
//recebeNumero();


/////////////////////////////////////////////////////////////////////////////////////////
//function unirPalavras(palavra1, palavra2)
//{
 // console.log(palavra1 + " " + palavra2)
//}

//unirPalavras("Ola,", "Coder");
//unirPalavras("Cursando,", "Js");


/////////////////////////////////////////////////////////////////////////////////////////////////
//var resultado =0;

//function somar(primeiroNumero, segundoNumero){
 // resultado = primeiroNumero + segundoNumero
//}

//function mostrar(mensagem) {
//  console.log(mensagem)
//}

//somar(6, 3)
//mostrar(resultado)


/////////////////////////////////////////////////////////////////////////////////////////////////////
//function somar(primeiroNumero, segundoNumero){
 // return primeiroNumero + segundoNumero
//}
//var resultado = somar(5, 8);
//console.log(resultado)


///////////////////////////////////////////////////////////////////////////////////////////////////////
//function calculadora(primeiroNumero, segundoNumero, operacao) {
  //if (operacao == "+") {
 //     return primeiroNumero + segundoNumero;
 // }
 // else if (operacao == "-") {
 //     return primeiroNumero - segundoNumero;
 // }
 // else if (operacao == "*") {
 //     return primeiroNumero * segundoNumero;
 // }
 // else if (operacao == "/") {
 //     return primeiroNumero / segundoNumero;
//  }
//  else {
 //     return 0;
//  }
//}
//console.log(   calculadora(10, 5, "*")    );


//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//function subtrair(num1, num2){
  //let resultado;
 // if(num1 > num2){
 //     resultado = num1 - num2; 
 //     console.log("O primeiro numero é maior que o segundo", resultado);
 // }else{
//  resultado = num2 - num1;
//  console.log("O segundo numero é maior que o primeiro", resultado);
//  }
//}
//let numero1 = parseFloat(prompt("Digite o primeiro numero:"));

//let numero2 = parseFloat(prompt("Digite o segundo numero:"));

//subtrair(numero1, numero2);


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var resultado = (primeiroNumero, segundoNumero, operacao) => {
if (operacao == "+") {
      return primeiroNumero + segundoNumero;
  }
  else if (operacao == "-") {
      return primeiroNumero - segundoNumero;
  }
  else if (operacao == "*") {
      return primeiroNumero * segundoNumero;
  }
  else if (operacao == "/") {
      return primeiroNumero / segundoNumero;
  }
       return 0;
  }
  let primeiroNumero = parseFloat(prompt("Digite o primeiro numero"));
  let segundoNumero = parseFloat(prompt("Digite o segundo numero"));
  let operacao = (prompt("Digite a operacao desejada"));

  alert(resultado(primeiroNumero, segundoNumero, operacao));

