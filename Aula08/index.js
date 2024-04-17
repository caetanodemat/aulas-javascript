// // const arrayA = []
// // const arrayB = [1,2,3]
// // const arrayC = ["Joao", "Jose", "Fernando"]
// // const arrayD = [false, true, false, true]
// // const arrayE = [1, "Joao", true, [1,2,3]]

// // const numeros = [1,2,3,4,"Joao"]
// // console.log(numeros[0])
// // console.log(numeros[3])
// // let resultado = numeros[2] + numeros[4]
// // console.log(resultado)

// // for(let index =0; index < 5; index++){
// // console.log(numeros[index])
// // }

// //@Lenght
// // const array = ["Rosa", "Vermelho", "Preto"]
// // console.log(array.length)

// // for (let index =0; index < array.length; index++){
// //     console.log(array[index])
// // }


// //@Acrescentar elementos
// // const cores = ["Rosa", "Vermelho", "Preto"]
// // cores.push("Amarelo")
// // console.log(cores.length)
// // console.log(cores)
// // cores.unshift("Azul")
// // console.log(cores.length)
// // console.log(cores)

// //@Excluir nomes
// // const nomes = ["Rosa", "Vermelho", "Preto"]
// // console.log(nomes)

// // nomes.pop()
// // console.log(nomes)

// // nomes.shift()
// // console.log(nomes)



// //@Splice
// // const nomes = ["Rosa", "Vermelho", "Preto", "Matheus", "Joao", "Rita", "Marco"]
// // nomes.splice(2, 4)
// // console.log(nomes)
// //O primeiro numero é o que comeca a excluir, o segundo é a quantida de ira excluir ate voltar a aparecer

// //@Join
// // const nomes = ["Rosa", "Vermelho", "Preto"]
// // console.log(nomes.join(","))
// // console.log(nomes.join("#"))

// //@concat
// // const caes = ["Batman", "Pandora"]
// // const gatos = ["Mustafa", "Zuri", "Mufasa"]
// // const animais = caes.concat(gatos)
// // console.log(animais)

// //@Slice
// //    const nomes = ["Vanessa", "Marcela", "Miguel", "Matheus", "Joao", "Rita", "Marco"]
// //    const masculinos1 = nomes.slice(2, 5)
// //    console.log(masculinos)


// //@Includes
// // const nomes = ["Vanessa", "Marcela", "Miguel", "Matheus", "Joao", "Rita", "Marco"]
// // console.log(nomes.includes("Rita"))
// // console.log(nomes.includes("Jose"))
// // console.log(nomes.includes("Marco"))
// // console.log(nomes.includes("Maria"))


// //@indexof
// // const nomes = ["Vanessa", "Marcela", "Miguel", "Matheus", "Joao", "Rita", "Marco"]
// // console.log(nomes.indexOf("Rita"))
// // console.log(nomes.indexOf("Marcos"))

// //@Reverse
// //  const nomes = ["Vanessa", "Marcela", "Miguel", "Matheus", "Joao", "Rita", "Marco"]
// // nomes.reverse()
// //     console.log(nomes)


// //@Exemplo
// // const listaNomes = []
// // let quantidade = 5

// // do{
// //     let entrada = prompt("Digite um nome")
// //     listaNomes.push(entrada.toUpperCase())
// //     console.log(listaNomes.length)
// // }
// // while (listaNomes.length != quantidade)

// // const novaLista = listaNomes.concat(["Ana", "Ema"])
// // console.log(novaLista.join("\n"))


// //Exemplo

// // const nomes = ["Vanessa", "Marcela", "Miguel", "Matheus", "Joao", "Rita", "Marco"]
// // console.log(nomes)

// // const eliminar = (nome) => {
// //     //Buscar o index
// //     let index = nomes.indexOf(nome)
// //     if(index != -1){
// //         nomes.splice(index, 1)
// //         console.log(nomes)
// //     }else{
// //         console.log(`O nome ${nome} nao foi encontrado`)
// //     }
// // }
// // let nomeEliminar = prompt("Digite um nome que deseja eliminar:")
// // eliminar(nomeEliminar)



//@Exercicio complexo
// let cores = []
// for (let i = 0; i < 5; i++) {
//   let cor = prompt(`Digite a cor ${i + 1}: `)
//   cores.push(cor)
// }

// console.log("Array completo:: ", cores)
// console.log("Tamnho do array: ", cores.length)

// let corRemover = prompt("Digite a cor a ser removida: ")
// let indexRemover = cores.indexOf(corRemover)
// if (indexRemover != -1) {
//   cores.splice(indexRemover, 1)
//   console.log( `A cor ${corRemover} foi removida`)
// } else {
//   console.log( `A cor ${corRemover} não foi encontrada no array`)
// }

// cores.forEach((cor, index) => {
//   console.log(`Na posição ${index} temos a cor ${cor}`)
// })

// let novaCor = prompt("Digite uma nova cor")
// if (!cores.includes(novaCor)) {
//   cores.unshift(novaCor)
//   console.log(`A cor ${novaCor} foi inserida na primeira posição`)
// } else {
//   console.log(`A cor ${novaCor} ja existe no array`)
// }
// console.log(cores)



// const objeto1 = { id: 1, produto: "Arroz"}
// const array = [objeto1, { id: 2, produto: "Batata"}]
// array.push({ id: 3, produto: "Costela"})
// console.log(array)


// const produtos = [
//     { id: 1, nome: "Arroz"},
//     { id: 2, nome: "Batata"},
//     { id: 3, nome: "Costela"}
//   ]
  
//   for (const produto of produtos) {
//     console.log(produto.id, produto.nome)
//   }