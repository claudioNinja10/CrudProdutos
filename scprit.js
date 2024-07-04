let nome = document.getElementById("produtoName")
let descricao = document.getElementById("produDescricao")
let valor = document.getElementById("Valor")


let produtos = []

function cadastrar(){
    let produto = {

        nome: nome.value,
        descricao: descricao.value,
        preco: Number(preco.value)
    }

    produtos.push(produto)
    console.log(produto)


    nome.value = ""
    descricao.value = ""
    preco.value = ""
    nome.focus()

}

function pesquisar(){
    let pesquisa = nome.value


    console.log(pesquisa);

}

