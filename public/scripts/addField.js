document.querySelector("#add-time") //Procurar o botão
.addEventListener('click', cloneField) //escuta o clique no botão

function cloneField(){ //Executa ação
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true) //Duplica os campos
    const fields = newFieldContainer.querySelectorAll("input") //reseta os campos de horário
    fields.forEach(function(field) {
        field.value = ""
    });
    document.querySelector('#scheduled-itens').appendChild(newFieldContainer) //Coloca na página abaixo do campo selecionado
}