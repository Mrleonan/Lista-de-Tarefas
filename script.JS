//pegar o valor do input

const inputText = document.querySelector("#task-title")

const buttonValue = document.querySelector("#add-btn")

buttonValue.addEventListener('click', function(){
  const taskUL = document.querySelector("#task-list")

  // criando spam e icones LI
  const taskLI = document.createElement('li')
  taskLI.classList = "task-box"

  const spam = document.createElement('spam')
  spam.classList = 'task-title'
  spam.textContent = inputText.value

  const addbtn = document.createElement('ion-icon')
  addbtn.setAttribute('name', 'checkmark-outline')
  addbtn.classList = 'add-btn'
  const rmvbtn = document.createElement('ion-icon')
  rmvbtn.setAttribute('name', 'close-outline')
  rmvbtn.classList = 'remove-btn'

  taskLI.appendChild(addbtn)
  taskLI.appendChild(rmvbtn)


  taskLI.appendChild(spam)
  taskUL.appendChild(taskLI)
})


