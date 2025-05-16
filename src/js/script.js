function addTask() {
    //pega o imput
    var input = document.getElementById("input-tarefa")

    //Pega o valor do Input
    var inputvalor = input.value

    console.log(input.value)
    // Limpar o input
    input.value = ""


    var list = document.getElementById("lista-de-tarefas")

    //criar elemento LI
    var li = document.createElement("li")

    //adicionar o valor do input para o LI
    //li.innerText = inputvalor;
    //li.innerHTML = "Minhas Tarefas<button>Excluir</button>";
  li.innerHTML = `${inputvalor} <button onclick="this.parentElement.remove()" >🗑️</button>`;

    //adicionar a funçao de marcar a tarefa como concluida
    li.onclick = function(){
        li.className = "tarefa-concluida";
    } 

    //adicionar o LI na lista de tarefas
    list.appendChild(li)


}