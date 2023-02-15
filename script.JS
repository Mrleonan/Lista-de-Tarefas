const inputText = document.querySelector("#task-title")

const buttonValue = document.querySelector("#add-btn")

//mensagem resultado
const msgh2 = document.querySelector('#tasks-list-container h2')
msgh2.classList = 'hidden'


buttonValue.addEventListener('click', function(){

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
    const taskUL = document.querySelector("#task-list")
  
    const taskLI = document.createElement('li')
    taskLI.classList = "task-box"

    taskUL.appendChild(taskLI)
    
    const spam = document.createElement('spam')
    spam.classList = 'task-title'
    spam.textContent = inputText.value
    
    taskLI.appendChild(spam)

    msgh2.textContent = 'Estas são as suas tarefas:'

    //botão Concluir tarefa
    const donebtn = document.createElement('ion-icon')
    donebtn.addEventListener('click', function(){
      const taskLIALL = document.querySelectorAll('.task-box')
      taskLI.classList = 'done'

      let marcados = true;
      for(let i = 0; i < taskLIALL.length; i++){
        if(!taskLIALL[i].className.includes('done')){
          marcados = false;
          break;
        }
      }
      if(marcados == true){
        // taskLI.classList = 'done-effect'
        console.log(taskLI.classList)
      }

  
    })
    donebtn.setAttribute('name', 'checkmark-outline')
    donebtn.classList = 'done-btn'

    taskLI.appendChild(donebtn)

    //botão Excluir tarefa 
    const rmvbtn = document.createElement('ion-icon')
    rmvbtn.addEventListener('click', function(){
      taskUL.removeChild(taskLI)
      spams = document.querySelectorAll('.task-title')
        /*mensagem finalização*/
        console.log(spams)
      if(spams.length == 0){
        msgh2.textContent = 'finalizou tudo'
      }
    })
    rmvbtn.setAttribute('name', 'close-outline')
    rmvbtn.classList = 'remove-btn'

    taskLI.appendChild(rmvbtn)

    msgh2.classList.remove('hidden')
  }
})