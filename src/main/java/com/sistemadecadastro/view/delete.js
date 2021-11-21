 function fazDelete(url){
    let requisicao = new XMLHttpRequest();
    requisicao.open("DELETE", url, false); 
    requisicao.send();
    return requisicao.responseText;
} 

function removerPessoa(){
    let id = document.querySelector('input[name="excluirId"]').value;
    let url = "http://localhost:8080/pessoas/remover" + "?id=" +id;
    fazDelete(url);
}

