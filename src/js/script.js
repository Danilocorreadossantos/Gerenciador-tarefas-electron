var meuInput = document.getElementById("input-tarefa");


// Adicionar um evento de keypress no input
meuInput.addEventListener("keypress", function(event) {

  // Verificar se a tecla pressionada foi o Enter
  if(event.key == "Enter") {
    // Vou chamar a função addTask
    addTask()
  }
})
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

    showModal()

    console.log(inputValue)
}
  function showModal() {
    //pega o modal
    var modal = document.getElementById("modal-sucesso")

    //adicionar audio
    var audio = document.getElementById("audio-teste");
    audio.play();

    // adiciona o css da modal
    modal.classList.add('open-modal');

    setTimeout(function() {
      // remove o css da modal
      modal.classList.remove('open-modal');
    }, 3000);
  }