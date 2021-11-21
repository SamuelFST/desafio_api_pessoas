function fazerGet(url){
    let requisicao = new XMLHttpRequest();
    requisicao.open("GET", url, false);
    requisicao.send();
    return requisicao.responseText;
}

function criarLinhaTabela(pessoa){
    linha = document.createElement("tr");
    tdId = document.createElement("td");
    tdNome = document.createElement("td");
    tdSobrenome = document.createElement("td");
    tdIdade = document.createElement("td");
    tdGenero = document.createElement("td");

    tdId.innerHTML = pessoa.id;
    tdNome.innerHTML = pessoa.nome;
    tdSobrenome.innerHTML = pessoa.sobrenome;
    tdIdade.innerHTML = pessoa.idade;
    tdGenero.innerHTML = pessoa.genero;

    linha.appendChild(tdId);
    linha.appendChild(tdNome);
    linha.appendChild(tdSobrenome);
    linha.appendChild(tdIdade);
    linha.appendChild(tdGenero);

    return linha;
}

function gerarTabela(){
    let dadosPessoa = fazerGet("http://localhost:8080/pessoas");
    let pessoa = JSON.parse(dadosPessoa);
    let tabela = document.getElementById("tabela");

    pessoa.forEach(element => {
        let linha = criarLinhaTabela(element);
        tabela.appendChild(linha);
    });
}

gerarTabela();