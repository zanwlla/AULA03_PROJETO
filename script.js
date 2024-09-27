var lista = ["Aluno1", "Aluno2", "Aluno3", 100];
var resultado = document.getElementById('resultado');

function mostrarArray() {
    resultado.textContent = `Array: ${JSON.stringify(lista)}`;
}

function buscarElemento() {
    if (lista.length > 3) {
        resultado.textContent = `Elemento na posição 3: ${lista[3]}`;
    } else {
        resultado.textContent = `A posição 3 não existe no array.`;
    }
}

function descobrirTamanho() {
    resultado.textContent = `Tamanho do Array: ${lista.length}`;
}

function saberSeElementoEsta() {
    var index = lista.indexOf("Aluno3");
    resultado.textContent = `Índice de "Aluno3": ${index}`;
    index = lista.indexOf("Aluno4");
    resultado.textContent += `\nÍndice de "Aluno4": ${index}`;
}

function alterarElemento() {
    lista[0] = "Ascrubal";
    resultado.textContent = `Array após alteração: ${JSON.stringify(lista)}`;
}

function adicionarElemento() {
    lista.push('Aluno4');
    resultado.textContent = `Array após adição: ${JSON.stringify(lista)}`;
}

function removerPrimeiroElemento() {
    lista.shift();
    resultado.textContent = `Array após remoção do primeiro elemento: ${JSON.stringify(lista)}`;
}

function removerUltimoElemento() {
    lista.pop();
    resultado.textContent = `Array após remoção do último elemento: ${JSON.stringify(lista)}`;
}

function retornarElementos() {
    resultado.textContent = `Elementos do Array separados por vírgula: ${lista.join(',')}`;
}