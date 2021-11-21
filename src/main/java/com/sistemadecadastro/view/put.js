function fazPut(url, body){
    let requisicao = new XMLHttpRequest();
    requisicao.open("PUT", url, true);
    requisicao.setRequestHeader("Content-type", "application/json");
    requisicao.send(JSON.stringify(body));

    requisicao.onload = function(){
        console.log(this.responseText);
    }
    return requisicao.responseText;
}

function atualizarPessoa(){
    let url = "http://localhost:8080/pessoas/atualizar";
    let id = document.getElementById("idAtualizacao").value;
    let nome = document.getElementById("nomeAtualizacao").value;
    let sobrenome = document.getElementById("sobrenomeAtualizacao").value;
    let idade = document.getElementById("idadeAtualizacao").value;
    let genero = document.querySelector('input[name="generoAtualizacao"]:checked').value;
    //let genero = document.getElementById("genero").value;

    body = {
        "id": id,
        "nome": nome,
        "sobrenome": sobrenome,
        "idade": idade,
        "genero": genero
    }

    fazPut(url, body);
}