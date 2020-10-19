// Define UI vars

const form = document.querySelector('.form-group');
const taskInput = document.getElementById('inputLarge');
const taskList = document.querySelector('tbody');


// Load all event listeners
loadAllEventListeners();

function loadAllEventListeners() {
  // DOM load event
  document.addEventListener('DOMContentLoaded', getTasks)
  // Add task
  form.addEventListener('submit', addTask);
  // Remove Task
  taskList.addEventListener('click', removeTask);
  // Done Task
  taskList.addEventListener('click', doneTask);
}

// Get tasks from Local Storage
function getTasks() {
  // repeat from storeTaskInLocalStorage()
  let tasks;
  if(localStorage.getItem('tasks') === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  tasks.forEach(function(task){
    // repeat from addTask()
    // create table-row element
    const tr = document.createElement('tr');
    tr.className = 'table-light';

    // create check-box icon
    const tdCheckBox = document.createElement('td');
    tdCheckBox.className = 'text-right check-item';
    tdCheckBox.innerHTML = '<i class="fas fa-check-circle"></i>';
    tr.appendChild(tdCheckBox);

    // create field with task 
    const tdTask = document.createElement('td');
    tdTask.className = 'text-left';
    tdTask.appendChild(document.createTextNode(task));
    tr.appendChild(tdTask);

    // create delete icon
    const tdDelete = document.createElement('td');
    tdDelete.className = 'text-right delete-item';
    tdDelete.innerHTML = '<i class="fas fa-times"></i>';
    tr.appendChild(tdDelete);

    // add new td to task list
    taskList.appendChild(tr);
  })

}

// Add task
function addTask(e) {
  e.preventDefault();
  if(taskInput.value === '') {
    alert("Add a task");
  }

  // create table-row element
  const tr = document.createElement('tr');
  tr.className = 'table-light';

  // create check-box icon
  const tdCheckBox = document.createElement('td');
  tdCheckBox.className = 'text-right check-item';
  tdCheckBox.innerHTML = '<i class="fas fa-check-circle"></i>';
  tr.appendChild(tdCheckBox);

  // create field with task 
  const tdTask = document.createElement('td');
  tdTask.className = 'text-left';
  tdTask.appendChild(document.createTextNode(taskInput.value));
  tr.appendChild(tdTask);

  // create delete icon
  const tdDelete = document.createElement('td');
  tdDelete.className = 'text-right delete-item';
  tdDelete.innerHTML = '<i class="fas fa-times"></i>';
  tr.appendChild(tdDelete);

  // add new td to task list
  taskList.appendChild(tr);

  // store new task in local storage
  storeTaskInLocalStorage(taskInput.value);
  
  // clear the input
  taskInput.value = '';
}

// Store task in Local Storage
function storeTaskInLocalStorage(task) {
  let tasks;
  if(localStorage.getItem('tasks') === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  tasks.push(task);

  localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Remove Task
function removeTask(e) {
  if(e.target.parentElement.classList.contains('delete-item')) {
    if (confirm('Are you sure?')) {
      e.target.parentElement.parentElement.remove();
      removeTaskFromLocalStorage(e.target.parentElement.parentElement);
    }
  }
}

// Remove from Local Storage

function removeTaskFromLocalStorage(taskItem) {
  if(localStorage.getItem('tasks') === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  tasks.forEach(function(task, index) {
    if(taskItem.textContent === task){
      tasks.splice(index, 1);
    }
  });

  localStorage.setItem('tasks', JSON.stringify(tasks));
  
}

// Check Done Task
function doneTask(e) {
  if(e.target.parentElement.classList.contains('check-item')) {
    console.log(1);
    document.querySelector('.fa-check-circle').classList.add('done');
  }
}

