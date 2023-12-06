'use strict'

//variables
let form = document.querySelector('.add-task__form')
let addTaskBtn = document.querySelector('add-task__btn')
let taskInput = document.querySelector('.task-input')
let taskListSearch = document.querySelector('.task-list__search')
let deleteAllTaskBtn = document.querySelector('delete-tasks')
let taskList = document.querySelector('.task-list__collection')

//functions
function addTask(event) {
  event.preventDefault()

  if(taskInput.value.trim() === ""){
	return
  }
  //create Li
  const li = document.createElement('li')
  li.className = "collection-item"
  li.textContent = taskInput.value.trim()

  taskList.append(li)
  taskInput.value = ""
}
//addEventListeners
form.addEventListener('submit', addTask)
