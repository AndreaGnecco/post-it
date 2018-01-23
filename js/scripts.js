var notas = [];

function atualizarSecao() {
    //criar uma variavel que vai guardar o html de todas as notas que devem aparecer na tela

    var htmlNotas = document.createElement("form");
    htmlNotas.setAttribute("class", "new-note");
    form.innerHTML = `<h1></h1>
                        <textarea></textarea>
                        <button>Excluir Nota</button>`


    //percorrer a lista de notas e criar o template de cada nota, criar o html de cada nota e colocar na variavel 

    //colocar o html de todo mundo dentro da secao


}

function adicionarNota(inputTitulo, textareaTexto, formulario) {
    //criar uma variavel nota
    var nota = {
        titulo: inputTitulo.value,
        texto: textareaTexto.value
    };

    //adicionar nota dentro da lista
    notas.push(nota);

    //atualizar a secao de notas
    atualizarSecao();

    //limpar o formulario
    formulario.reset();
}