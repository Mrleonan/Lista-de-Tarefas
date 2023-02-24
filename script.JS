const inputText = document.querySelector("#task-title")

//mensagem resultado
const msgh2 = document.querySelector('#tasks-list-container h2')

msgh2.classList = 'hidden'

const buttonValue = document.querySelector("#add-btn")

buttonValue.addEventListener('click', function(){

  //verificando se já existe um spam criado com o mesmo valor do input
  let spams = document.querySelectorAll('.task-title')

  let haveSpam = false;

  for(elemento of spams){
    if(elemento.innerText == inputText.value){
      haveSpam = true;
      break;
    }
  };
  
  if(haveSpam || inputText.value == 0){
    alert('[ERRO] Valor inválido ou já existente')
  } else {
    //aplicando mensagem mostrando as tarefas
    msgh2.classList.remove('hidden')
    msgh2.textContent = 'Estas são as suas tarefas:'

    // UL -> LI -> SPAM & BUTON  (estrutura)
    const taskUL = document.querySelector("#task-list")
    
    const taskLI = document.createElement('li')
    taskLI.classList = "task-box"
    
    taskUL.appendChild(taskLI)
    
    const spam = document.createElement('spam')
    spam.classList = 'task-title'
    spam.textContent = inputText.value
    
    taskLI.appendChild(spam)

    //resetando o valor do input
    const input = document.querySelector('#task-title')
    input.value = ''

    //criando botão de concluir tarefa
    const donebtn = document.createElement('ion-icon')
    donebtn.setAttribute('name', 'checkmark-outline')
    donebtn.classList = 'done-btn'

    //FUNÇÃO BOTÃO CONCLUIR
    donebtn.addEventListener('click', function(){
      //aplicando efeito de concluido
      const taskLiAll = document.querySelectorAll('.task-box')
      taskLI.classList.toggle('done')

      //verificando se todas as terefas estão finalizadas
      let todosFinalizados = true;

      for(let i = 0; i < taskLiAll.length; i++){
        if(!taskLiAll[i].className.includes('done')){
          todosFinalizados = false
          console.log(todosFinalizados)
          break;
        };
      };
      
      if(todosFinalizados){
        console.log('todos estão finalizados')
      };
      
      if(todosFinalizados == true){
        //aplicando efeito na finalzação
        for(let i = 0; i < taskLiAll.length; i++){
          taskLiAll[i].classList = 'efeito-done'
        };

        //removendo as tarefas e aplicando mensagem de finalização após 3 segundos
        function removerElemento(){
          setTimeout(function(){
            for(let i = 0; i < taskLiAll.length; i++){
              taskUL.removeChild(taskLiAll[i])
            }
            msgh2.textContent = 'PARABÉNS👏👏 Você finalizou TUDO!'
          }, 3000);
        }
        removerElemento()
      };
    })
    //adicionando botão DONE no elemento pai LI
    taskLI.appendChild(donebtn)

    //criando botão de remover tarefa
    const rmvbtn = document.createElement('ion-icon')
    rmvbtn.setAttribute('name', 'close-outline')
    rmvbtn.classList = 'remove-btn'
    
    //FUNÇÃO BOTÃO REMOVER
    rmvbtn.addEventListener('click', function(){
      taskUL.removeChild(taskLI)
      if(taskUL.childNodes.length == 3){
        msgh2.classList = 'hidden'
      }
    })

    //adicionando botão REMOVE no elemento pai LI
    taskLI.appendChild(rmvbtn)
  };
})