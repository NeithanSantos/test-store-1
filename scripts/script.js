let cadastro = document.querySelector("#vestuario")
let valores = document.querySelector("#preço")
let imagew = document.querySelector(".ilustrações")

let produtos = [
    {
        foto: "../images/jaqueta-streetwear.jpeg",
        roupa: "Blusa Classe Preta",
        preco: 189.98,
    },
    {
        foto: "../images/calça-streetwear.jpeg",
        roupa: "Calça Jeans Street",
        preco: 129.98,
    },
    {
        foto: "../images/conjunto-streetwear.jpeg",
        roupa: "Conjunto LV Mulfs",
        preco: 589.98,
    },
    {
        foto: "../images/conjunto-p.jpeg",
        roupa: "Conjunto Gucci",
        preco: 2439.98,
    },
    {
        foto: "../images/ jaqueta-azul.png",
        roupa: "Jaqueta Azul Baw ",
        preco: 490.98,
    },
    {
        foto: "../images/bag2-militar.jpeg",
        roupa: "Bag Militar NT",
        preco: 199.98,
    }
]

produtos.map(produto =>{
    cadastro.innerHTML += `<h1>${produto.roupa} </h1>`
    valores.innerHTML += `<h3>R$ ${produto.preco.toFixed(2)}</h3>`
    imagew.innerHTML += `<img class="ilustrações" src="${produto.foto}" alt="foto">`;

})

