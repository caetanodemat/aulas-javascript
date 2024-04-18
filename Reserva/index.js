// const fruta = {
//     nome: "Maça",
//     cor: "Vermelha",
//     peso: 150,
//     tipo: 'Fruta'
// }

//@New
// function Fruta(cor, tipo, peso, nome) {
//     this.cor = cor;
//     this.tipo = tipo;
//     this.peso = peso;
//     this.nome = nome;

// }

// const fruta1 = new fruta("Vermelho", "Fruta", 150, "Maca")
// const fruta2 = new fruta("Amarelo", "Fruta", 200, "Banana")

// console.log(fruta1)
// console.log(fruta2)

//@Chamar
// console.log(fruta)
// console.log(fruta.cor)
// console.log("Cor:", fruta.cor)
// console.log("Forma:", fruta["tipo"])

//@Atribuição de Valores
// fruta.peso = 7
// fruta["cor"] = "Rosa"
// console.log(fruta)

//@exercicio
// fruta.cor = "Verde"
// fruta["peso"] = 200
// console.log(fruta.cor)
// console.log(fruta["peso"])


//@metodo funcao
// function Pessoa(nome, idade, rua){
//     this.nome = nome
//     this.idade = idade
//     this.rua = rua
//     this.falar = function(){
//         console.log("Ola, sou " + this.nome)
//         console.log("Ola, sou " + nome)
//     }
// }
// const pessoa1 = new Pessoa("Joao", 22, "Jose Peline Benasse, 299")
// const pessoa2 = new Pessoa("Pedro", 23, "Jose Peline Benasse, 294")
// pessoa1.falar()
// pessoa2.falar()

//@Metodos 
// let texto = "Ola pessoal"
// console.log(texto.length)
// console.log(texto.toLocaleUpperCase())
// console.log(texto.toLocaleLowerCase())


//exercicio
// function Fruta(nome, cor, peso, tipo = "Fruta") {
//          this.nome = nome    
//          this.cor = cor
//          this.peso = peso
//          this.tipo = tipo
             
//      }

// const minhaFruta = new Fruta("Banana", "Amarela", 140)
// console.log(minhaFruta)
// console.log(minhaFruta.nome.length)
// console.log(minhaFruta.cor.toUpperCase())
// console.log(minhaFruta.tipo.toLowerCase())


//@operador in
// const pesso = {
//     nome: "Homer"
//     idade: 39
//     rua: "Av sempre verde 742"
// };
 
// console.log("nome" in pesso);
// console.log("origem" in pesso);


//@operador for in
// const pessoa = {
//          nome: "Homer",
//          idade: 39,
//          rua: "Av sempre verde 742"
//      };

//      for (const propriedade in pessoa) {
//         console.log(pessoa[propriedade])
//      }


//@Exercicio
// function Fruta(nome, cor, peso, tipo = "Fruta") {
//               this.nome = nome    
//               this.cor = cor
//               this.peso = peso
//               this.tipo = tipo
                 
//           }
//           const minhaFruta = new Fruta("Banana", "Amarela", 140)

//           for(const propriedade in minhaFruta) {
//             console.log(propriedade + " = " + minhaFruta[propriedade])
//           }

//@Classes
class Produto {
    constructor(nome, preco) {
        this.nome = nome.toUpperCase()
        this.preco = preco
        this.vendido = false

    }
    somarIcms()
    {
        let icms = parseFloat(prompt("Digite o valor do icms"))
        this.preco = this.preco * icms
    }
    vender() {
        let compra = prompt("Comfirmar compra? Sim ou Nao?")
        this.vendido = compra
    }
}

const produto1 = new Produto("Celular", 1000)
const produto2 = new Produto("Tv", 2500)
const produto3 = new Produto("Videogame", 3500)
const produto4 = new Produto("Estante", 1300)
produto1.somarIcms()
produto2.somarIcms()
produto3.somarIcms()
produto4.somarIcms()
produto1.vender()
produto2.vender()
produto3.vender()
produto4.vender()
console.log(produto1)
console.log(produto2)
console.log(produto3)
console.log(produto4)