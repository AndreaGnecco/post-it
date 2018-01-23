var notas = [];

function atualizarSecao(secao) {
    //criar uma variavel que vai guardar o html de todas as notas que devem aparecer na tela

    var htmlNotas = "";

    //percorrer a lista de notas e criar o template de cada nota, criar o html de cada nota e colocar na variavel 
    for (var i = 0; i < notas.length; i++) {
        htmlNotas += '<form class="note" onclick="editarFormulario()">' +
                        '<button class="note__control" type="button" onclick="removerNota(' + i + ', this.form.parentElement)">' +
                            '<i class="fa fa-times" aria-hidden="true"></i>' +
                        '</button>' +
                        '<h1 class="note__title">' + notas[i].titulo + '</h1>' + 
                         '<p class="note__body">' + notas[i].texto +
                         '</p>' + 
                    '</form>'

    }
    //colocar o html de todo mundo dentro da secao
    secao.innerHTML = htmlNotas;

}

function editarFormulario(i){
    //pegar a nota e setar editando = true
    notas[i].editando = true
    
    //chamar o atualiza tela
    atualizarSecao(secao);


}

function adicionarNota(inputTitulo, textareaTexto, formulario, secao) {
    //criar uma variavel nota
    var nota = {
        titulo: inputTitulo.value,
        texto: textareaTexto.value
    };

    //adicionar nota dentro da lista
    notas.push(nota);

    //atualizar a secao de notas
    atualizarSecao(secao);

    //limpar o formulario
    formulario.reset(secao);
}

function removerNota(i, secao){
    //remover nota da lista de notas

    notas.splice(i, 1)

    //atualizar tela

    atualizarSecao(secao)
}