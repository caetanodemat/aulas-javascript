//var numero = 6
 
// if (numero == 5){
    //bloco de execucao
 //   console.log("Executando bloco de execucao")

// }
// else {
 //   console.log("Executando bloco de execucao false")
 //}


// if (numero == 6) {
  //  console.log("Executando o bloco de execucao false")
 //}

 ///////////////////////////////////////////////

 //var combustivel = "Alcool"

 //if (combustivel == "Gas") {
//    alert("O carro é movido a gas")
 //}
// else if (combustivel == "Gasolina"){
 //   alert("O carro é movido a Gasolina")
// }
// else if (combustivel == "Alcool"){
//    alert("O carro é movido a Alcool")
// }
//else  {
 //   alert("O carro é movido a ar")
 //}

 ///var numero = parseFloat(prompt("Insira um numero de 1 a 5:"))
 //if (numero == 1) {
  //  alert("Numero um")
 //}
 //else if (numero == 2) {
 //   alert("Numero dois")
 //}
 //else if (numero == 3) {
 //   alert("Numero tres")
 //}
 //else if (numero == 4) {
 //   alert("Numero quatro")
 //}
 //else if (numero == 5) {
 //   alert("Numero cinco")
 //}
 //else {
 //   alert("Voce nao digitou nenhum dos numeros pedido.")
// } 

///////////////////////////////////////////

//var numero = parseFloat(prompt("Digite um numero"))
//console.log(typeof(numero))
//if (numero == 1) {
   //   alert("Numero um")
  // }
  // else if (numero == 2) {
  //    alert("Numero dois")
  // }
  // else if (numero == 3) {
  //    alert("Numero tres")
 //  }
 //  else if (numero == 4) {
 //     alert("Numero quatro")
 //  }
 //  else if (numero == 5) {
 //     alert("Numero cinco")
 //  }
 //  else {
   //   alert("Voce nao digitou nenhum dos numeros pedido.")
  // }

  /////////////////////////////////////////////////////////////


  ///var nome = prompt("Digite um nome:")
  ///var sobreNOme = prompt("Digite um sobrenome:")

 //if ((nome != "") && (sobreNOme != "")){
   // alert(nome + " " + sobreNOme)
 // }else {
 //   alert("Insira um nome e um sobrenome")
 // }

/////////////////////////////////////

 ///function verificaFamilia30(numero) {
   ///     if ((numero >= 30) && (numero < 40)) {
   ///         console.log(numero, "-> Família numérica do 30");
   //     } else {
   //         console.log(numero, "-> Família não identificada");
   //     }
   // }
    
   // verificaFamilia30(30) 
   // verificaFamilia30(35)
   // verificaFamilia30(20)
   // verificaFamilia30(50)

   /////////////////////////////////////////////////

   ///var x =10
   ///var y = 20
  /// if(!(x > y)) {
   // console.log("Entrei aqui")
  // }
  // else{
  //  console.log("Não entrei aqui")
  // }


  ////////////////////////////////////////////////////////////////////////////////////////

  ///var idade = prompt("Digite uma idade:")
  ///if(idade < 18){
   // alert("Voce ainda nao pode tomar uma ceva")

 // }
 // else if ((idade >= 18) && (idade < 60)){
 //   alert("Voce e aduto pode tomar um ceva")
 // }
 // else {
 //   alert("Voce é idose, beba com moderacao")

 // }


 ////////////////////////////////////////////////////////////////////////////////////////////////////


 var letra = prompt("Digite uma letra")

 if ((letra === null) || (letra === "")) {
  alert("Nenhuma letra foi fornecida")
 }
 else if (letra === "a" || letra === "e" || letra === "i" || letra === "o" || letra === "u" ||
  letra === "A" || letra === "E" || letra === "I" || letra === "O" || letra === "U"){
  alert("A letra é uma vogal")
 } 
 else {
  alert("A letra nao é uma vogal")
 }