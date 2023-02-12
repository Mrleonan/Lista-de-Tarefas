const inputText = document.querySelector("#task-title")

const buttonValue = document.querySelector("#add-btn")

buttonValue.addEventListener('click', function(){

  let spams = document.querySelectorAll('.task-title')

  let haveSpam = false;

  spams.forEach(e => {
    if(e.innerText == inputText.value){
      haveSpam = true;
    } 
  });
  
  if(haveSpam || inputText.value == 0){
    window.alert('[ERRO] Valor inválido ou já existente')
  } else {
    console.log(inputText.value)
    const taskUL = document.querySelector("#task-list")
  
    const taskLI = document.createElement('li')
    taskLI.classList = "task-box"

    taskUL.appendChild(taskLI)
    
    const spam = document.createElement('spam')
    spam.classList = 'task-title'
    spam.textContent = inputText.value
    
    taskLI.appendChild(spam)

    //botão Concluir tarefa
    const donebtn = document.createElement('ion-icon')
    donebtn.addEventListener('click', function(){
      taskLI.classList = 'done'
    })
    donebtn.setAttribute('name', 'checkmark-outline')
    donebtn.classList = 'done-btn'

    taskLI.appendChild(donebtn)

    //botão Excluir tarefa 
    const rmvbtn = document.createElement('ion-icon')
    rmvbtn.addEventListener('click', function(){
      taskUL.removeChild(taskLI)
    })
    rmvbtn.setAttribute('name', 'close-outline')
    rmvbtn.classList = 'remove-btn'

    taskLI.appendChild(rmvbtn)
  }
})