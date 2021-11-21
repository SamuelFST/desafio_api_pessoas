function fazPost(url, body){
    let requisicao = new XMLHttpRequest();
    requisicao.open("POST", url, true);
    requisicao.setRequestHeader("Content-type", "application/json");
    requisicao.send(JSON.stringify(body));

    requisicao.onload = function(){
        console.log(this.responseText);
    }

    return requisicao.responseText;
}

function cadastrarPessoa(){
    let url = "http://localhost:8080/pessoas/adicionar";
    let nome = document.getElementById("nome").value;
    let sobrenome = document.getElementById("sobrenome").value;
    let idade = document.getElementById("idade").value;
    let genero = document.querySelector('input[name="genero"]:checked').value;

    body = {
        "nome": nome,
        "sobrenome": sobrenome,
        "idade": idade,
        "genero": genero
    }

    fazPost(url, body);
}