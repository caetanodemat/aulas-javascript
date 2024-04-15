//1- //Os tipos de variaveis
// //string
// let sobrenome = "Matos";
// let nome = "Joao" + sobrenome || 'Joao' +sobrenome || `Joao ${sobrenome}`;
// //number
// let idade = 26
// let altura = 1.77
// //boolean
// let alunoAtivo = true(1) || false (0)
// //undefined
// let cpf;




//2- //prompt alert console
// let nomeUsuario = prompt("Digite o nome de um usuario")
// alert("Ola" + " " +nomeUsuario)




//3- //Operadores relacionais, logicos e condicionais
// //if
// //else
// //else if
// let idade = parseFloat(prompt("Digite sua idade"));
// let cnh = prompt("Possui Cnh?")
// if ((idade >= 18) && (idade <= 65) && (cnh == "sim" || "s" || "ss")) {
//   alert("Voce é maior de idade e possui Cnh, pode dirigir")
// }
// else if ((idade > 65) && (cnh == "sim" || "s" || "ss")){
//   alert("Voce idoso e deve renovar sua carteira de motorista")
// }
//  else{
//   alert("Voce nao pode dirigir!!!!")
//  }




//4- //Funções
// function soma(a, b){
//   return a + b;

// } 
// const subtrair = () => {return a - b
// }

// let resultado = soma(5, 3)
// alert("O resultado da soma é: " + resultado)




// //5- Escopo e contexto this
// var nome = "Global";

// function teste(){
//   let nome = "Local"
//   console.log("Nome local: ", nome)
//   console.log("Nome global: ", this.nome)
// }

// teste();


// //6- For, While e Do While
// for (let i = 0; i < 5; i++){
//   console.log(i)
// }
// console.log("#######")
// let contador = 0
//  while(contador < 5) {
//   console.log(contador + 1)
//   contador++
//  }
//  console.log("#######")
//  do {
//   console.log(contador + 1)
//  } while (false);




//verificar numero par ou impar
// function parOuImpar(numero){
//   if(numero % 2 == 0){
//     return "Par"
//   }else{
//     return "Impar"
//   }
  
// }
// let numero = prompt(parseInt("Digite um numero"));
// alert(parOuImpar(numero))